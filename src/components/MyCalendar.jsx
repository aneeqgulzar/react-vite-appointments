import React from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';

const CustomToolbar = () => {
  return <div>{}</div>;
};

const MyCalendar = (props) => {
  const localizer = dayjsLocalizer(dayjs);

  const { name, reason, startTimeFormatted, endTimeFormatted} = props;

  const currentDate = new Date();

  const meetings = [
    {
      title: `Today's Meeting with ${name} Reason: ${reason}`,
      start: currentDate, 
      end: new Date(currentDate.getTime() + 3 * 60 * 60 * 1000),
      startTimeFormatted: `${startTimeFormatted}`,
      endTimeFormatted: `${endTimeFormatted}`,
     
    }
  
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
        defaultView="week"
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
        eventPropGetter={(event, start, end, isSelected) => {
          const backgroundColor = 'blue';
          return {
            style: {
              backgroundColor,
            },
          };
        }}
        dayPropGetter={dayPropGetter}
        min={new Date(2023, 9, 2, 0, 0)}
        max={new Date(2023, 9, 2, 23, 59)}
      />
    </div>
  );
};

export default MyCalendar;
