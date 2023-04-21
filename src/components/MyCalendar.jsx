import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import './../styles/MyCalendar.css';

function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="CalendarContainer">
      <Calendar onChange={handleDateSelect} value={selectedDate} className="Calendar" />
      {selectedDate.getMonth() === 3 && selectedDate.getDate() === 26 && (
        <div className="DashboardButtonContainer">
          <Link to="/dashboard" className="DashboardButton">Ir al Dashboard</Link>
        </div>
      )}
    </div>
  );
}

export default MyCalendar;