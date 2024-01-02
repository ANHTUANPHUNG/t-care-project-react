import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  }, []);

  console.log(coords);

  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627,
  //   },
  //   zoom: 11,
  // };

  return (
    // Important! Always set the container height explicitly
    <>
      <h3>map</h3>
      <div style={{ height: "300px", width: "50%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCt9olIIrAV34JqidXlgRkLC9hLjOZK2hA" }}
          defaultCenter={coords}
          defaultZoom={11}
          center={coords }
        ></GoogleMapReact>
      </div>
    </>
  );
}
