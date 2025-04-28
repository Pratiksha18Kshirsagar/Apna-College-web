import SearchBox from './searchBox'
import Info from './info'
import { useState } from 'react'

export default function WeatherBox(){
let[weatherInfo , setWeatherInfo] = useState({
    city:"Delhi",
    temp: 25.8,
    temp_min: 23.09,
    temp_max: 25.8,
    humidity: 10,
    description:"Haze",
})

let updateInfo = (info)=>{
setWeatherInfo(info);
}
    return(
        <>
        <h1 style={{textAlign:"center"}}>Weather App!</h1>
        <SearchBox updateInfo={updateInfo}/>
        <Info info={weatherInfo}/>
        </>
    )
}