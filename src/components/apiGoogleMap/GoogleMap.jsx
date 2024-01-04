import React, { useEffect } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const REACT_APP_GOOGLE_MAPS_KEY = "AIzaSyADjq6OpnNMXE-b2LKvk4CrgoHh6s9JJUM";

const MapComponent = ({ selectedLocation, widthMap }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_KEY,
  });
  const mapRef = React.useRef();

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.panTo(selectedLocation);
      mapRef.current.setZoom(18);
    }
  }, [selectedLocation]);

  if (loadError) return "Error";
  if (!isLoaded) return "Maps";

  return (
    <div style={{ marginTop: "30px" }}>
      <GoogleMap
        mapContainerStyle={{
          height: "400px",
          width: widthMap || "auto"
        }}
        center={selectedLocation}
        zoom={13}
        onLoad={onMapLoad}
      >
        <MarkerF
          position={selectedLocation}
          icon={"https://res.cloudinary.com/dw4xpd646/image/upload/v1704201738/Cloudinary-React/nvxi1h4uw1ziv3bvygqu.png"}
        />
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
