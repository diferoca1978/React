import { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { Button, Input, Textarea } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { addSeconds, differenceInSeconds } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks";

const customStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const ModalCalendar = () => {
  const { isDateModalOpen, closeDateModal } = useUiStore();
  const { activeEvent, startSavingEvent } = useCalendarStore();
  const [formSubmited, setFormSubmited] = useState(false);
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    start: new Date(),
    end: addSeconds(new Date()),
  });

  const isInvalidTitle = useMemo(() => {
    if (!formSubmited) return "";

    return formValues.title.length > 0 ? "" : "true";
  }, [formValues.title, formSubmited]);

  useEffect(() => {
    if (activeEvent !== null) {
      setFormValues({ ...activeEvent });
    }
  }, [activeEvent]);

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onDateChange = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event,
    });
  };

  const onCloseModal = () => {
    closeDateModal();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormSubmited(true);

    const difference = differenceInSeconds(formValues.end, formValues.start);

    if (isNaN(difference) || difference <= 0) {
      Swal.fire({
        title: "Error!",
        text: "Wrong dates",
        icon: "error",
        confirmButtonText: "Return",
        confirmButtonColor: "#d62828",
      });
      return;
    }

    if (formValues.title.length < 0) return;

    console.log(formValues);

    await startSavingEvent(formValues);
    onCloseModal();
    setFormSubmited(false);
  };

  return (
    <>
      <Modal
        isOpen={isDateModalOpen}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
      >
        <div className="flex flex-col p-2 gap-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Nuevo evento</h1>
            <i className="cursor-pointer" onClick={onCloseModal}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </i>
          </div>

          <hr className="border-blueDark-800 my-3"></hr>

          <form onSubmit={onSubmit} className="flex flex-col gap-3 w-80">
            <div className="flex flex-col gap-2">
              <label>Start date/time </label>
              <DatePicker
                dateFormat="dd/MM/yyyy h:mm aa"
                showTimeSelect
                className="border-b-2 border-white-300 w-full outline-none"
                onChange={(event) => onDateChange(event, "start")}
                selected={formValues.start}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>End date/time </label>
              <DatePicker
                showTimeSelect
                className="border-b-2 border-white-300 w-full outline-none"
                minDate={formValues.start}
                onChange={(event) => onDateChange(event, "end")}
                selected={formValues.end}
                dateFormat="dd/MM/yyyy h:mm aa"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Title</label>
              <Input
                variant="underlined"
                placeholder="Event title"
                name="title"
                value={formValues.title}
                onChange={onInputChange}
                isInvalid={isInvalidTitle}
                color={isInvalidTitle ? "danger" : ""}
                errorMessage={isInvalidTitle && "Please enter a title"}
              />
            </div>
            <div>
              <Textarea
                label="Description"
                placeholder="Enter a description"
                color="warning"
                name="description"
                value={formValues.description}
                onChange={onInputChange}
              />
            </div>
            <div>
              <Button className="mb-1" type="submit" color="primary">
                Save <FontAwesomeIcon icon={faFloppyDisk} />
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};
