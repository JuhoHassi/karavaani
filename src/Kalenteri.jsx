import { useState } from 'react'
import Calendar from 'react-calendar'
// import Dropdown from 'react-bootstrap/Dropdown'
// import Button from 'react-bootstrap/Button'
import './App.css'
import { isWithinInterval } from "date-fns"

const disabledRanges = [
      [new Date(2022,10,2), new Date(2022,10,4)],
      [new Date(2022,10,10), new Date(2022,10,11)],
    ];

function isWithinRange(date, range) {
    return isWithinInterval(date, { start: range[0], end: range[1] });
  }
  
function isWithinRanges(date, ranges) {
    return ranges.some(range => isWithinRange(date, range));
  }

function tileDisabled({ date, view }) {
    if (view === 'month') {
      return isWithinRanges(date, disabledRanges);
    }
  }

function Kalenteri() {

  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'         
        style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        }}>
        <Calendar 
        onChange={setDate} 
        value={date} 
        selectRange={true}
        minDate={new Date()}
        tileDisabled={tileDisabled}
        // nextLabel='month>>'
        // nextAriaLabel='Go to next month'
        />
      </div>
      {date.length > 0 ? (
      <p className='text-center'>
        <span className='bold'>Start:</span>{' '}
        {date[0].toDateString()}
        &nbsp;|&nbsp;
        <span className='bold'>End:</span> {date[1].toDateString()}
      </p>
      ) : (
        <p className='text-center'>
            <span className='bold'>Default selected date:</span>{' '}
            {date.toDateString()}
        </p>
      )}
    </div>
  );
}

export default Kalenteri;
