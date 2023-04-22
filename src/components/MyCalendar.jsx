import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import './../styles/MyCalendar.css';

function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [anniversaryVisible, setAnniversaryVisible] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsButtonVisible(date.getMonth() === 3 && date.getDate() === 22);
    setAnniversaryVisible(date.getMonth() === 3 && date.getDate() === 26);
  };

  return (
    <div className="CalendarContainer">
      <Calendar onChange={handleDateSelect} value={selectedDate} className="Calendar" />
      {isButtonVisible && (
        <div className={`DashboardButtonContainer ${isButtonVisible ? "show" : ""}`}>
          <Link to="/dashboard" className="DashboardButton">Así es!, tu cumpleaños </Link>
        </div>
      )}
      {
        anniversaryVisible &&(
          <div className={`anniversaryButtonContainer ${anniversaryVisible ? "show" : ""}`}>
          <Link to="/await" className="anniversaryButton">Nuestro aniversario! </Link>
        </div>
        )
      }
    </div>
  );
}

export default MyCalendar;