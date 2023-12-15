import React, { useContext, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Polygon,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Header2 from '../components/Nevbar2';
import Modal from '../components/Map/CustomModal';
import { AuthContext } from '../components/Provider';

function Map({ setIsLoggedIn }) {
  const [polygonPositions, setPolygonPositions] = useState([]);
  const [isDrawingMode, setIsDrawingMode] = useState(false);
  const { openCalculator, calculatorHandler } = useContext(AuthContext);

  const handleMapClick = (e) => {
    if (isDrawingMode) {
      const { lat, lng } = e.latlng;
      setPolygonPositions((prevPositions) => [...prevPositions, [lat, lng]]);
    }
  };

  const handleToggleDrawingMode = () => {
    setIsDrawingMode((prevMode) => !prevMode);
    setPolygonPositions([]); // Clear existing polygon positions when toggling drawing mode
  };

  const MapEvents = () => {
    useMapEvents({
      click: handleMapClick,
    });

    return null;
  };

  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: 'calc(100vh)', width: '100%' }}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // attribution="&copy; OpenStreetMap contributors"
          maxZoom={20}
        />

        {isDrawingMode && (
          <Polygon
            pathOptions={{ color: 'blue' }}
            positions={polygonPositions}
          />
        )}
        <Marker position={[51.505, -0.09]} />
        <MapEvents />
        {isDrawingMode && (
          <Polygon
            pathOptions={{ color: 'blue' }}
            positions={polygonPositions}
          />
        )}

        {/* Absolute positioning for the Header */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
          }}
        >
          <Header2 backgroundColor="#323aa8" setIsLoggedIn={setIsLoggedIn} />
        </div>

        {openCalculator && <Modal />}
      </MapContainer>
    </>
  );
}

export default Map;
