import React,{useEffect, useState} from 'react'
import "./style.css"
import Weather from './weather';
const Temp = () => {
    const [searchValue,setSearchValue]=useState("Karachi");
    const[tempInfo,setTempInfo]=useState({})
    const getWeatherInfo=async()=>{
        try {
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=4b2501411b2fcb79eebc6f8e1925d1fa`
            const res = await fetch(url)
            const data = await res.json()
            const {temp,humidity,pressure} = data.main;
            const{main:weathermood} = data.weather[0];
            const {name}=data
            const{speed} = data.wind
            const {country,sunset} =data.sys;
            const myNewWeatherInfo = {temp,humidity,pressure,weathermood,name,country,speed,sunset}
    setTempInfo(myNewWeatherInfo)
           
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(()=>{
getWeatherInfo();
    },[])
    return (
   <>
   <div className="wrap">
    <div className="search">
<input type="search" placeholder='search' autoFocus id='search' className='searchTerm'value={searchValue} onChange={(e)=>{
    setSearchValue(e.target.value)
}}/>
    <button className="searchButton" type='button' onClick={getWeatherInfo}>Search</button>
    
    </div>
   </div>
   <Weather tempInfo={tempInfo}/>
   </>
  )
}

export default Temp