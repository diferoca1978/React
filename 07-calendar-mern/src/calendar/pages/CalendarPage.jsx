import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { localizer } from '../../helpers';
import { CalendarBoxEvent, FabAddNewEvent, FabDelete, ModalCalendar } from '../components';
import { useUiStore, useCalendarStore } from '../../hooks';


export const CalendarPage = () => {

  const { openDateModal } = useUiStore()
  const { events, setActiveEvent } = useCalendarStore()

  const [ lastview, setLastview ] = useState(localStorage.getItem('lastView') || 'Month')

  const onDoubleClick = (event) => {
    // console.log({ doubleClick: event });
    openDateModal();
  }

  const onSelect = (event) => {
    // console.log({ click: event })
    setActiveEvent(event);
  }

  const onViewChange = (event) => {
    localStorage.setItem('lastView', event);
    setLastview(event)

  }

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        defaultView={lastview}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 110px)', padding: 8 }}
        components={{
          event: CalendarBoxEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
      />

      <ModalCalendar />

      <FabAddNewEvent />

      <FabDelete />

    </>
  )
};
