import React from 'react';
import ReactMapGL, { Marker, GeolocateControl } from 'react-map-gl';

class MyMap extends React.Component {

  state = {
    viewport: {
      width: "",
      height: "",
      latitude: 0,
      longitude: 0,
      zoom: 0
    }
  };

  componentWillMount(){
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        viewport: {
          height: "100vh",
          width: "100vw",
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          zoom: 14
        }
      })
    })  
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken = "pk.eyJ1IjoiY2hsb2VsaXQiLCJhIjoiY2swM3dqMnIyMXpjeDNtcHJoMWc0NDF0eiJ9.ix20dvm-nlqn0Ew1j3Q0-w"
      >
        <GeolocateControl 
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
          fitBoundsOptions={{maxZoom: 5}}
        />

      </ReactMapGL>
    );
  }
}
export default MyMap;



