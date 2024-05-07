import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { MainLayout } from "../../layout/MainLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { startNewNote } from "../../store/journal/thunks";

export const JournalHome = () => {
  const { isSaved, active } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <MainLayout>
      {active != null ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        disabled={isSaved}
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </MainLayout>
  );
};
