import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css"
import { useState } from 'react';


export default function SearchBox({ updateInfo }) {
    let URL = "https://api.openweathermap.org/data/2.5/weather"

    let API_KEY = "daae21f983b7fc72b0f62b92d52b2fb7"
    let [city, setCity] = useState("")
    let [err, setErr] = useState(false);

    function handelInputChnage(evt) {
        setCity(evt.target.value);
    }

    async function getWeatherInfo() {
        try {
            let response = await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                temp_min: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                description: jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }

    async function formDefault(evt) {
        try {
            setErr(false)
            evt.preventDefault();
            setCity("");
            let info = await getWeatherInfo();
            updateInfo(info);
        }
        catch (err) {
            setErr(true);
        }
    }

    return (
        <div className='searchbox'>

            <form onSubmit={formDefault} >
                <TextField onChange={handelInputChnage} value={city} id="outlined-basic" label="City name" variant="outlined" required />
                <br /><br />
                <Button type='submit' variant="contained" color="primary">
                    Search
                </Button>
            </form>

            {err && <p style={{ color: "red" }}>"This place does not exists!!"</p>}
        </div>
    )
}