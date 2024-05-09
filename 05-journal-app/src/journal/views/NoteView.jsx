import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Delete, SaveOutlined, UploadFile } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { ImageGallery } from "../components/ImageGallery";
import { useForm } from "../../hooks/useForm";
import {
  setActiveNote,
  startDeletingNote,
  startUpdateNote,
  startUploadingFiles,
} from "../../store/journal";

export const NoteView = () => {
  const dispatch = useDispatch();

  const {
    active: note,
    messageSaved,
    isSaved,
  } = useSelector((state) => state.journal);

  const { title, body, date, onInputChange, formState } = useForm(note);

  const dateFormat = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  const fileInputRef = useRef(); // Here we're using useRef hook to reference the input.

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire({
        title: "Note has been updated",
        icon: "success",
        text: [messageSaved],
      });
    }
  }, [messageSaved]);

  const onSavedNote = () => {
    dispatch(startUpdateNote());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;

    dispatch(startUploadingFiles(target.files));
  };

  const onDelete = () => {
    dispatch(startDeletingNote());
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn animate__slow"
    >
      <Grid item>
        <Typography fontSize={28} fontWeight="light">
          {dateFormat}
        </Typography>
      </Grid>

      <input
        type="file"
        multiple
        onChange={onFileInputChange}
        style={{ display: "none" }}
        ref={fileInputRef} // Here we are use the reference into the input.
      />
      <IconButton
        color="info"
        disabled={isSaved}
        onClick={() => fileInputRef.current.click()} // this line simulate the click over the input type:file.
      >
        <UploadFile />
        <Typography fontSize={16} fontWeight="light">
          Upload files
        </Typography>
      </IconButton>

      <Grid item>
        <Button
          disabled={isSaved}
          onClick={onSavedNote}
          type="submit"
          variant="text"
          size="small"
          color="inherit"
          sx={{ padding: 1 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día de hoy?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      <IconButton color="warning" sx={{ mt: 2 }} onClick={onDelete}>
        <Delete />
        <Typography>Delete Note</Typography>
      </IconButton>

      {/* Image gallery */}
      <ImageGallery images={note.imgURL} />
    </Grid>
  );
};
