import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@nextui-org/react";
import { useCalendarStore } from "../../hooks";

export const FabDelete = () => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();

  const handleDelete = () => {
    startDeletingEvent();
  };

  return (
    <Button
      style={{
        display: hasEventSelected ? "" : "none",
      }}
      onClick={handleDelete}
      isIconOnly
      className="fixed bottom-6 left-6 rounded-full bg-red-800 text-white-50 p-3 hover:bg-red-600 cursor-pointer"
    >
      <FontAwesomeIcon icon={faTrash} />
    </Button>
  );
};
