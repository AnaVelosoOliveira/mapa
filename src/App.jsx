import s from './App.module.css'

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {

  const position = [-25.4248519, -49.27497958]

  return (
    <div className={s.wrapAll}>
      <h1>Mapa do Leaftlet</h1>
      <div className={s.wrapMap}>
      <MapContainer style={{borderRadius:'20px', width: "100%", height: "100%"}} center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
       <a target='_blank'  href="https://www.google.com/maps/place/Col%C3%A9gio+SESI+Celso+Charuri/@-25.4248519,-49.2749795,17z/data=!3m1!4b1!4m6!3m5!1s0x94dce55e3000a6f1:0xc52cd0912ecfc2bd!8m2!3d-25.4248519!4d-49.2724046!16s%2Fg%2F11vd8tbjfz?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D">
       Ir para Google maps</a>
      
        
      </Popup>
    </Marker>
  </MapContainer>
     
    </div>
    </div>
  )
}

export default App
