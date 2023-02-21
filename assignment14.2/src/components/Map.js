import React, { useState, useEffect } from "react";
import '../styles/Map.css'

function Map() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [isLoading, setIsLoading] = useState(true);


  return (
    <div className="Map">
        <h3 className="Map-name">{name}</h3>
        {!isLoading ? <img className="Map-image" src={photo} alt="someone"/> : <h3>Loading...</h3>}
    </div>
  )
}
export default Map;
