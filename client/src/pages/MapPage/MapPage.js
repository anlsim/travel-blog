import React from "react"
import Map from "../../components/Map/Map"
import Hero from "../../components/Hero/Hero"

const MapPage = () => {
  return (
    <div>
      <Hero title={"Map"} />
      <div className="mapDiv">
        <Map />
      </div>
    </div>
  )
}
export default MapPage
