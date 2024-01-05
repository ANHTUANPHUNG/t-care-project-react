import { useRef, useEffect, useState } from "react";
import AddLocationIcon from "@mui/icons-material/AddLocation";

const SearchLocationInput = ({ setSelectedLocation, setPlace,title }) => {


  
  const autoCompleteRef = useRef();

  const inputRef = useRef();
  const [query, setQuery] = useState("");
  console.log(query);
  const handleScriptLoad = (updateQuery) => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: "VN" },
    });

    autoCompleteRef.current.addListener("place_changed", () => {
      handlePlaceSelect(updateQuery);
    });
  };

  const handlePlaceSelect = async (updateQuery) => {
    const addressObject = await autoCompleteRef.current.getPlace();

    if (addressObject && addressObject.formatted_address) {
      const selectedQuery = addressObject.formatted_address;
      updateQuery(selectedQuery);

      const latLng = {
        lat: addressObject?.geometry?.location?.lat(),
        lng: addressObject?.geometry?.location?.lng(),
      };

      setSelectedLocation(latLng);
    } else {
      console.error("Invalid addressObject:", addressObject);
    }
  };
  useEffect(() => {
    handleScriptLoad(setQuery);
  }, []);
  return (
    <div className="search-location-input">
      <label htmlFor="inputSearchAddress" style={{ cursor: "pointer" }}>
        <h3>{title || "Where do you live?"} </h3>
      </label>
      <div className="d-flex " style={{margin:" 15px 20% 0 20%"}}>
       
        <input
          style={{  cursor: "pointer" }}
          ref={inputRef}
          className="form-control"
          onChange={(event) => (setQuery(event.target.value) ,setPlace(event.target.value))}
          placeholder="Search Places ..."
          value={query}
          id="inputSearchAddress"
        />
        <label htmlFor="inputSearchAddress" style={{ cursor: "pointer" }}>
          <AddLocationIcon style={{ margin: "7px 0 0 -25px" }} />
        </label>
      </div>
    </div>
  );
};
export default SearchLocationInput;
