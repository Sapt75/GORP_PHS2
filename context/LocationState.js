import React, { useEffect } from "react";
import LocationContext from "./LocationContext";


const LocationState = (props) => {

  const [location, setLocation] = React.useState()
  const [pinn, setpinn] = React.useState()
  const [showInp, setShowInp] = React.useState(false)
  const [pop, showPop] = React.useState(false)
  const [showLoc, setShowLoc] = React.useState(false);
  const [det, setDet] = React.useState("initial")



  useEffect(() => {
    if (sessionStorage.getItem("city") === null) {
      sessionStorage.setItem("city", "Mumbai")
      setLocation("Mumbai")
    } else {
      setLocation(sessionStorage.getItem("city"))
    }
  }, [location])



  return (
    <LocationContext.Provider value={{ location, pinn, setpinn, setLocation, pop, showPop, showInp, setShowInp, showLoc, setShowLoc, det, setDet }}>
      {props.children}
    </LocationContext.Provider>
  )
}

export default LocationState