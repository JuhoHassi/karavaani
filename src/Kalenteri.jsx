import './App.css'
import React, { useState } from 'react'
// import FeedbackService from './services/Feedback'
// import { BsTrash } from "react-icons/bs"
// import BackToTopBtn from './BackToTopBtn'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment'


const Kalenteri = () => {

const lukko2 = [
    {
      nimi:"AA",
      paiva: new Date('2023,1,19'),
      alkupaiva: new Date('2023,1,24'),
      loppupaiva: new Date('2023,1,28')
    }
    ,
    {
      nimi:"BB",
      paiva: new Date('2023,1,21'),
      alkupaiva: new Date('2023,1,30'),
      loppupaiva: new Date('2023,2,2')
    }
]
let tempDates = []

lukko2.forEach(element => {

  let now = moment()
  let fromDate = moment(element.alkupaiva)
  let toDate = moment(element.loppupaiva)

  if (fromDate > now && toDate > now) {
    while (fromDate <= toDate) {
      let ld = fromDate.format('YYYY-MM-DD')
      tempDates.push(new Date(ld))
      fromDate = moment(fromDate).add(1,'days');
    }
  }
})
console.log('dates', tempDates);

const [selectedDate, setSelectedDate] = useState(null)

    return (
        <div className='divEhdot'>
            <h2 className='titleName'>A</h2>
            <div className='divInfo'>
                <div className='divInfo-item'>
                </div>
                <div>
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        excludeDates={tempDates}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
        </div>
    )
}
export default Kalenteri



                        // excludeDates={lukko2.map((paiva) =>
                        //     paiva)}
                        // excludeDates={lukko2.map((luk) => luk.paiva)}
                        // excludeDates={getDatesInRange(lukko2.map((luk)=>luk.alkupaiva),lukko2.map((luk)=>luk.loppupaiva))}
                        // excludeDates={getDatesInRange(d1,d2)}

                        // excludeDateIntervals={[{start: lukko2.map((luk) => luk.alkupaiva, end: lukko2.map((luk) => luk.loppupaiva))}]}
                        // excludeDateIntervals={[{start: lukko2.map((luk) => luk.alkupaiva, {end: lukko2.map((luk) => luk.loppupaiva)})}]}
                        // excludeDateIntervals={[{start: subDays(new Date(), 5), end: addDays(new Date(), 5) }]}
                        // excludeDateIntervals={{start: (lukko2.map((luk) => luk.alkupaiva)), end: (lukko2.map((luk) => luk.loppupaiva)) }}
                        // excludeDateIntervals={[{start: new Date('2023,1,22'), end: new Date('2023,1,26') }]}
                        // excludeDateIntervals={[{start: new Date('2023,1,22'+'2023,1,26'), end: new Date('2023,1,24'+'2023,1,28') }]}
                        // excludeDateIntervals={[{start: lukko2[0].alkupaiva, end: lukko2[0].loppupaiva }]}
                        // excludeDateIntervals={[{start: lukko2.map((alkupaiva,loppupaiva)=>alkupaiva),end: loppupaiva}]}
                        // excludeDateIntervals={[{start: lukko2.map((alkupaiva,loppupaiva)=>{alkupaiva}, end: {loppupaiva})}]}
                        // excludeDateIntervals={[{start: lukko2.map((alkupaiva)=>alkupaiva), end: lukko2.map((loppupaiva)=>loppupaiva)}]}


// function getDatesInRange(startDate, endDate) {
//     const date = new Date(startDate.getTime());
//     const dates = [];
//     while (date <= endDate) {
//       dates.push(new Date(date));
//       date.setDate(date.getDate() + 1);
//     }
//     // return dates;
//     for (let i = 0; i < dates.length; i++) {
//         const element = dates.date
//         return console.log(element)
//     }
//   }
  
// //   const d1 = new Date('2023-01-18');
// //   const d2 = new Date('2023-01-24');
//   const d1 = lukko2[0].alkupaiva;
//   const d2 = lukko2[0].loppupaiva;  
//   console.log(getDatesInRange(d1, d2));
  


// const lukko7 = lukko2.map((luk) => {return {alku: luk.alkupaiva, loppu: luk.loppupaiva}})
// console.log(lukko7)
// const lukko8 = lukko2.map((luk) => {return {datesBetweenalku: luk.alkupaiva, loppu: luk.loppupaiva}})
// console.log(eachDay(
//     new Date(2023, 1, 9),
//     new Date(2023, 1, 19)
//   ))

// console.log(lukko7)
// const alku = lukko2[0].alkupaiva
// console.log(alku)
// console.log(lukko2.length)
// console.log(lukko2["alkupaiva"])
// looppa lukko2 niin monta kertaa kun siellä on eri settejä. hae datesbetweenillä alku ja loppupäivien väliset päivä ja lisää listalle.
// const paivat = []
// for (let pa of lukko2) {
//     const paivat = pa.alkupaiva
//     console.log(paivat)
//   }

// const paivia = lukko2.forEach(datesBetween(lukko2[0].alkupaiva,lukko2[0].loppupaiva))
// const dates = Array.from(datesBetween(lukko2[0].alkupaiva,lukko2[0].loppupaiva));
// console.log(dates)

// for (let i = 0; i < lukko2.length; i++) {
//     const alku = lukko2[index];
    
// }


// for (const date of datesBetween(lukko2[0].alkupaiva,lukko2[0].loppupaiva)) {

//     console.log(date);
// }

// const lukko3 = lukko2.map((luk)=>luk.alkupaiva)
// const lukko4 = lukko2.map((luk)=>luk.loppupaiva)
// const lukko5 = lukko3.concat(lukko4)
// console.log(lukko5)
// console.log(lukko2.map((luk)=>luk.paiva))
















// import './App.css'
// import React, { useState, useEffect } from 'react'
// import FeedbackService from './services/Feedback'
// import { BsTrash } from "react-icons/bs"
// import BackToTopBtn from './BackToTopBtn'



// const Varaa = () => {

//     // poistetaan lopusta merkkejä jotta kalenteri tunnistaa ajan.
//     var today = new Date().toISOString()
//     today = today.slice(0,-8)



//     return (
//         <div className='divEhdot'>
//             <h2 className='titleName'>Varaa {today}</h2>
//             <div className='divInfo'>
//                 <div className='divInfo-item'>
//                 </div>
//                 <div className='divInfo-item'>
//                     <form  className='divPalaute'>
//                         <h4 className='pText'>Anna meille palautetta...</h4>

//                         <div>
//                             <input type='email' placeholder='Sähköposti'/>
//                         </div>
//                         <div>
//                             <input type='number' max='10' min='1' placeholder='Arvio asteikolla 1-10' />
//                         </div>
//                         <div>
//                             <textarea placeholder='Kirjoittaa tänne kommentti ...' type='text' ></textarea>                          
//                         </div>
//                         <div>
//                             <input type="datetime-local" name="book" min="2023-01-10T00:00, 2023-01-23T00:00" max="2023-01-22T00:00"></input>
//                         </div>
//                         {/* <div>
//                             <input type="datetime-local" value={newDay} onChange={({ target }) => setNewDay(target.value)}/>
//                         </div> */}
//                         <div>
//                             {/* <input className='btn btn-outline-warning' type='button' value='Tyhjentää' onClick={emptyFields}/> */}
//                             <input className='btn btn-warning' type="submit" value="Lähetä"/>                            
//                         </div>
//                     </form>
//                     <BackToTopBtn/>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Varaa






















// import { useState } from 'react'
// import Calendar from 'react-calendar'
// // import Dropdown from 'react-bootstrap/Dropdown'
// // import Button from 'react-bootstrap/Button'
// import './App.css'
// import { isWithinInterval } from "date-fns"
// import Lisavarusteet from './Lisavarusteet'


// const paiva1 = new Date(2022,11,18)
// const paiva2 = new Date(2022,12,3)
// const hinta = 100


// // const disabledRanges = [
// //       [new Date(2022,10,2), new Date(2022,10,4)],
// //       [new Date(2022,10,10), new Date(2022,10,11)],
// //     ];

// // function isWithinRange(date, range) {
// //     return isWithinInterval(date, { start: range[0], end: range[1] });
// //   }
  
// // function isWithinRanges(date, ranges) {
// //     return ranges.some(range => isWithinRange(date, range));
// //   }

// // function tileDisabled({ date, view }) {
// //     if (view === 'month') {
// //       return isWithinRanges(date, disabledRanges);
// //     }
// //   }


// function Kalenteri() {

//   const [date, setDate] = useState(new Date());
//   const paivaero2 = Math.floor(((Date.parse(date[1]) - Date.parse(date[0]))/86400000) +1)

//   return (
//     <div className='kalenteriSivu'>
//       <h1 className='text-center'>React Calendar </h1>
//       <div className='calendar-container'         
//         style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         }}>
//         <Calendar 
//         onChange={setDate} 
//         value={date} 
//         selectRange={true}
//         minDate={new Date()}
//         // tileDisabled={tileDisabled}
//         // tileContent={'100€'}
//         // nextLabel='month>>'
//         // nextAriaLabel='Go to next month'
//         />
//       </div>
//       {date.length > 0 ? (
//       <p className='text-center'>
//         <span className='bold'>Start:</span>{' '}{date[0].toDateString()}
//         &nbsp;|&nbsp;
//         <span className='bold'>End:</span> {date[1].toDateString()} <br/>
//         <span className='bold'> {paivaero2} päivää. Yhteensä: {paivaero2 * hinta}€</span>
//       </p>
//       ) : (
//         <p className='text-center'>
//             <span className='bold'>Default selected date:</span>{' '}
//             {date.toDateString()}
//         </p>
//       )}
//       <Lisavarusteet/>
//     </div>
//   );
// }

// export default Kalenteri;


// // import { useState } from 'react'
// // import Calendar from 'react-calendar'
// // // import Dropdown from 'react-bootstrap/Dropdown'
// // // import Button from 'react-bootstrap/Button'
// // import './App.css'
// // import { isWithinInterval } from "date-fns"


// // const disabledRanges = [
// //       [new Date(2022,10,2), new Date(2022,10,4)],
// //       [new Date(2022,10,10), new Date(2022,10,11)],
// //     ];

// // function isWithinRange(date, range) {
// //     return isWithinInterval(date, { start: range[0], end: range[1] });
// //   }
  
// // function isWithinRanges(date, ranges) {
// //     return ranges.some(range => isWithinRange(date, range));
// //   }

// // function tileDisabled({ date, view }) {
// //     if (view === 'month') {
// //       return isWithinRanges(date, disabledRanges);
// //     }
// //   }



// // function Kalenteri() {

// //   const [date, setDate] = useState(new Date());

// //   return (
// //     <div className='app'>
// //       <h1 className='text-center'>React Calendar</h1>
// //       <div className='calendar-container'         
// //         style={{
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center'
// //         }}>
// //         <Calendar 
// //         onChange={setDate} 
// //         value={date} 
// //         selectRange={true}
// //         minDate={new Date()}
// //         tileDisabled={tileDisabled}
// //         // nextLabel='month>>'
// //         // nextAriaLabel='Go to next month'
// //         />
// //       </div>
// //       {date.length > 0 ? (
// //       <p className='text-center'>
// //         <span className='bold'>Start:</span>{' '}
// //         {date[0].toDateString()}
// //         &nbsp;|&nbsp;
// //         <span className='bold'>End:</span> {date[1].toDateString()}
// //       </p>
// //       ) : (
// //         <p className='text-center'>
// //             <span className='bold'>Default selected date:</span>{' '}
// //             {date.toDateString()}
// //         </p>
// //       )}

// //     </div>
// //   );
// // }

// // export default Kalenteri;