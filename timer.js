import React, {useState,useEffect} from 'react'
import App from "./App.js";


const Timer = () =>{
    const [minute, setminute] =useState(1)
    const [second, setsecond] =useState(0)


    let timer;

    useEffect(()=> {
        timer = setInterval(() => {
            
          setsecond(second - 1)

          if(second === 0){
            setminute(minute - 1)
            setsecond(60)
          }

          if(minute == 0){
            <h1>your time is off</h1>
            setminute(0)
            setsecond(second -1)
          }

          if(minute == 0 & second === 0){
            setminute(0)
            setsecond(0)
          
          }

          if(minute == 0 & second === 0){
          <App/>
          }



        }, 1000)
        
        return() => clearInterval(timer)
    })

    return(
        <div>
            <h1>{minute} : {second}</h1>
        </div>
    )
}

export default Timer;