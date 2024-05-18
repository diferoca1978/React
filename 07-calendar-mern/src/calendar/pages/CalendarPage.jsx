import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';
import { localizer } from '../../helpers';
import { CalendarBoxEvent } from '../components/CalendarBoxEvent';
import { ModalCalendar } from '../components/ModalCalendar';





const events = [ {
  title: ' Boss Happy birthday',
  notes: 'Buy a pie',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Diego'
  }
} ]

const onDoubleClick = (event) => {
  console.log({ doubleClick: event })
}

const onSelect = (event) => {
  console.log({ click: event })
}

const onViewChange = (event) => {
  localStorage.setItem('lastView', event);

}

export const CalendarPage = () => {

  const [ lastview, setLastview ] = useState(localStorage.getItem('lastView') || 'Month')

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

    </>
  )
};