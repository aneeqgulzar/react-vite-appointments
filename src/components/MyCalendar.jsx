import React from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';


const CustomToolbar = () => {
  return (
    <div>
      {}
    </div>
  );
};

const MyCalendar = (props) => {
  const localizer = dayjsLocalizer(dayjs);

  const name  = props;

  const meetings = [
    {
      title: `Meeting with ${name}`,
      start: new Date(2023, 9, 2, 8, 0), 
      end: new Date(2023, 9, 2, 11, 0), 
    },
    {
      title: `Another Meeting with ${name}`,
      start: new Date(2023, 9, 4, 10, 0), 
      end: new Date(2023, 9, 4, 12, 0), 
    },
  ];

  const customFormats = {
    dayHeaderFormat: (date, culture, localizer) => {
      return localizer.format(date, 'dddd', culture);
    },
  };

  const dayPropGetter = (date) => {
    const isToday = dayjs(date).isSame(dayjs(), 'day');
    return isToday ? { className: 'not-today' } : {};
  };

  const calendarStyles = {
    margin: '30px', 
    
    
  };

  return (
    <div style={calendarStyles}>
      <Calendar
        views={['week']}
        defaultView='week'
        localizer={localizer}
        components={{
          toolbar: CustomToolbar,
        }}
        startAccessor="start"
        endAccessor="end"
        events={meetings}
        formats={{
          dayFormat: (date, culture, localizer) =>
            localizer.format(date, 'dddd', culture),
        }}
        style={{
          '.rbc-header': {
            textAlign: 'center',
          },
          '.not-today': {
            backgroundColor: 'transparent',
          },

          
        }}
        dayPropGetter={dayPropGetter}
        min={new Date(2023, 9, 2, 8, 0)} 
        max={new Date(2023, 9, 2, 20, 0)} 
      />
    </div>
  );
};

export default MyCalendar;
