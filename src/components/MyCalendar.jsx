import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import './../styles/MyCalendar.css'
function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    const selectedMonth = date.getMonth();
    const selectedDay = date.getDate();
    if (selectedMonth === 3 && selectedDay === 26) {
      window.location.href = '/dashboard'; // Cambia la URL actual del navegador a la URL del componente Dashboard
    }
  };

  return (
    <div className="Calendar">
      <Calendar onChange={handleDateSelect} value={selectedDate} />
    </div>
  );
}

export default MyCalendar;