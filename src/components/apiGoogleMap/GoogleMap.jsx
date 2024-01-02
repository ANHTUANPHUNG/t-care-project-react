import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';

 const REACT_APP_GOOGLE_MAPS_KEY = "AIzaSyCt9olIIrAV34JqidXlgRkLC9hLjOZK2hA"
 
 const MapComponent = ({ selectedLocation }) => {
   const { isLoaded, loadError } = useLoadScript({
     googleMapsApiKey: REACT_APP_GOOGLE_MAPS_KEY,
   });
   const mapRef = React.useRef();
   const onMapLoad = React.useCallback((map) => {
     mapRef.current = map;
   }, []);
   if (loadError) return "Error";
   if (!isLoaded) return "Maps";
 
   return (
     <div style={{ marginTop: "30px" }}>
       <GoogleMap
         mapContainerStyle={{
           height: "400px",
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