import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    //TODO: get the backend

    //? if all had been good

    if (calendarEvent._id) {
      // updating
      dispatch(onUpdateEvent(calendarEvent));
    } else {
      //Creating
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  const startDeletingEvent = () => {
    dispatch(onDeleteEvent());
  };

  return {
    //* Properties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent, //* To manage if there is an event object or null. To show or not the FabDelete button.

    //* Methods
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
  };
};
