import { createSlice } from "@reduxjs/toolkit";
import { addSeconds } from "date-fns";

//TODO: The proper implementation is through the backend, this event is provisional.

const tempEvent = {
  _id: new Date().getTime(),
  title: " Boss Happy birthday",
  description: "Buy a pie",
  start: new Date(),
  end: addSeconds(new Date(), 30),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "Diego",
  },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },

    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },

    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event._id === payload._id) {
          return payload;
        }
        return event;
      });
    },

    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event._id !== state.activeEvent._id
        );
        state.activeEvent = null;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } =
  calendarSlice.actions;
