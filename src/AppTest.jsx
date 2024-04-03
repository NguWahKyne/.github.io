import React,{ useState, useEffect } from 'react'
//import AppHeader from './components/AppHeader'
//import PageTitle from './components/PageTitle'

function AppTest() { 
    const [seconds, setSeconds] = useState(30);
    useEffect(() => {
        const timerInterval = setInterval(() => {
          if (seconds > 0) {
            // setSeconds((prevSeconds) => prevSeconds - 1);
            setSeconds(seconds - 1);
          } else {
            clearInterval(timerInterval);
          }
        }, 1000);
    
        return () => clearInterval(timerInterval); // Cleanup on component unmount
      }, [seconds]);
    
    //   const formatTime = (time) => {
    //     const minutes = Math.floor(time / 60);
    //     const remainingSeconds = time % 60;
    //     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    //   };

  return (
    <div className="timer">
      <h1>Countdown Timer</h1>
      {/* <div className="countdown">{formatTime(seconds)}</div> */}
      <div className={`countdown ${seconds <=5 ? 'red-text':''}` }> 
      <div className='text-white bg-slate-800 rounded-3xl w-[40px] h-[40px]  justify-center text-center items-center'>
      <p> {seconds}s</p>
      </div>
      
       
      </div>
    </div>
  );
}

export default AppTest
