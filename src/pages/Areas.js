import { Link, useSearchParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import { useState, useEffect } from "react";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import TimePicker from 'react-time-picker';
import useArea from "../hooks/useArea";

const centerInicial = {
  lat: 19.045466312411165,
  lng: -98.19897651672365,
};

function DraggableMarker({ posicion, setPosicion }) {
  const markerRef = L.marker([posicion.lat, posicion.lng], { draggable: true });

  useMapEvents({
    dragend: () => {
      const marker = markerRef;
      if (marker) {
        const { lat, lng } = marker.getLatLng();
        setPosicion({ lat, lng });
        console.log('📍 Nueva posición:', { lat, lng });
      }
    },
  });

  return (
    <Marker
      position={posicion}
      draggable={true}
      eventHandlers={{
        dragend: (e) => {
          const marker = e.target;
          const nuevaPos = marker.getLatLng();
          setPosicion({ lat: nuevaPos.lat, lng: nuevaPos.lng });
        },
      }}
      icon={L.icon({
        iconUrl: '/marker.png',
        iconSize: [40, 40],
      })}
    />
  );
}

function Areas() {
  const {areas,listarAreas,nueva_area,setAreas} = useArea();
  const [posicion, setPosicion] = useState(centerInicial);
  const [form,setForm] = useState({
    area:"",
    hora_salida:"",
    latitud:"",
    longitud:""
  });

  useEffect(() => {
        console.log("Cambió la posicion:", posicion);
        setForm({...form,latitud:posicion.lat,longitud:posicion.lng});
         console.log('api url',process.env.REACT_APP_API_URL);
    }, [posicion]);

  useEffect(()=>{
    const cargar = async()=>{
      const result = await listarAreas();
      setAreas(result);
    }
    cargar();
  },[]);



  return (
    <div className="contenido-unic">
      <Header />
      <div className="contenido">
        <div className="uk-container">
            <h1 className="uk-text-center">Areas</h1>
            <button uk-toggle="target: #modal-areas" className="uk-button uk-button-primary">Nuevo</button>
            <h2>Lista de Aréas</h2>
            <table className="uk-table uk-table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Area</th>
                        <th>Edificio</th>
                        <th>Responsable</th>
                        <th>Departamento</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                  {areas.length === 0?(
                    <img src="img/loading.gif" />
                  ):(areas.map((area,index) => (
                    <tr key={index}>
                        <td>{area.id_area}</td>
                        <td>{area.nombre_area}</td>
                        <td>{area.responsable}</td>
                        <td>Cargo</td>
                        <td>Departamento</td>
                        <td>Email</td>
                        <td>
                            <button className="uk-button uk-button-primary">
                                Editar
                            </button>
                            <button className="uk-button uk-button-danger">
                                Eliminar
                            </button>
                            <button onClick={()=>window.open(process.env.REACT_APP_API_URL+'reportes/'+area.id_area, '_blank')} className="uk-button uk-button-primary">
                                Ver QR
                            </button>
                        </td>
                    </tr>
                  )))}
                </tbody>
            </table>
        </div>
      </div>
      <Footer />

      <div id="modal-areas" className="uk-modal-container" uk-modal="true">
        <div className="uk-modal-dialog" uk-overflow-auto="true">
          <button className="uk-modal-close-default" type="button" uk-close="true"></button>
          <div className="uk-modal-header">
            <h2 className="uk-modal-title">Nueva Area</h2>
          </div>
          <div className="uk-modal-body">
            <form class="uk-grid-small" uk-grid="true">
                <div class="uk-width-1-2@s">
                    <label class="uk-form-label" for="form-stacked-text">Nombre Area:</label>
                    <div class="uk-form-controls">
                        <input class="uk-input" type="text" placeholder=""
                        value={form.area}
                        onChange={e=>setForm({...form,area:e.target.value})}
                        />
                    </div>
                </div>
                 <div class="uk-width-1-4@s">
                    <label class="uk-form-label" for="form-stacked-text">Salón:</label>
                    <div class="uk-form-controls">
                        <input class="uk-input"  type="text" placeholder="" />
                    </div>
                </div>
                 <div class="uk-width-1-4@s">
                    <label class="uk-form-label" for="form-stacked-text">Edificio:</label>
                    <div class="uk-form-controls">
                        <input class="uk-input"  type="text" placeholder="" />
                    </div>
                </div>
                 <div class="uk-width-1-2@s">
                    <label class="uk-form-label" for="form-stacked-text">Responsable:</label>
                    <div class="uk-form-controls">
                        <input class="uk-input"  type="text" placeholder="" />
                    </div>
                </div>
                <div class="uk-width-1-4@s">
                    <label class="uk-form-label" for="form-stacked-text">Hora Entrada:</label>
                    <div class="uk-form-controls">
                        <input class="uk-input"  type="text" placeholder="" />
                    </div>
                </div>
                <div class="uk-width-1-4@s">
                    <label class="uk-form-label" for="form-stacked-text">Hora Salida:</label>
                    <div class="uk-form-controls">
                        <input class="uk-input"  type="text" placeholder=""onChange={e=>setForm({...form,hora_salida:e.target.value})} value={form.hora_salida} />
                    </div>
                </div>
                <div class="uk-width-1-4@s">
                    <label class="uk-form-label" for="form-stacked-text">Latitud:</label>
                    <div class="uk-form-controls">
                        <input class="uk-input"  type="text" placeholder=""
                        value={form.latitud}
                        onChange={e=>setForm({...form,latitud:e.target.value})}
                        />
                    </div>
                </div>
                <div class="uk-width-1-4@s">
                    <label class="uk-form-label" for="form-stacked-text">Longitud:</label>
                    <div class="uk-form-controls">
                        <input class="uk-input"  type="text" placeholder=""
                        value={form.longitud}
                        onChange={e=>setForm({...form,longitud:e.target.value})}
                        />
                    </div>
                </div>
                <div class="uk-width-1-4@s">
                    <label class="uk-form-label" for="form-stacked-text">Código QR:</label>
                    <div class="uk-form-controls">
                        <input class="uk-input"  type="text" placeholder="" />
                    </div>
                </div>
                <MapContainer
                    center={posicion}
                    zoom={17}
                    style={{ width: '100%', height: '450px' }}
                >
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <DraggableMarker posicion={posicion} setPosicion={setPosicion} />
                </MapContainer>
            </form>
          </div>
          <div className="uk-modal-footer uk-text-right">
            <button className="uk-button uk-button-default uk-modal-close" type="button">CANCELAR</button>
            <button className="uk-button uk-button-primary" type="button">GUARDAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Areas;