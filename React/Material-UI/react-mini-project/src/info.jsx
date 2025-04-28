import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";


export default function Info({ info }) {

  let Rain_URL = "https://media.assettype.com/english-sentinelassam%2Fimport%2Fh-upload%2F2023%2F06%2F11%2F461927-monsoon-1.webp?w=480&dpr=2&auto=format%2Ccompress&fit=max&q=85"
  let HOT_URL = "https://t4.ftcdn.net/jpg/03/29/60/15/360_F_329601547_xDmIzUwEyDSvDW6eGWQvFy044zGxcDTP.jpg"
  let SNOW_URL = "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/10/17/USAT/75714706007-usatsi-24195665.jpg?crop=3475,1955,x0,y169&width=3200&height=1801&format=pjpg&auto=webp"

  return (<>
    <div className='infoBox'>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity > 80 ? Rain_URL : info.temp > 15 ? HOT_URL : SNOW_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>🔥Temperature = {info.temp}&deg;C</p>
            <p>❄️Min-Temp = {info.temp_min}&deg;C</p>
            <p>❤️‍🔥Max-Temp = {info.temp_max}&deg;C</p>
            <p>🍃Humidity = {info.humidity}</p>
            <p>Weather can be described as <b><i>{info.description}</i></b>!</p>
          </Typography>
        </CardContent>

      </Card>
    </div>
  </>)
}