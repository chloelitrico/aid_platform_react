import React from 'react';
import $ from 'jquery';
import ReactMapGL, { Marker, GeolocateControl } from 'react-map-gl';

class MyMap extends React.Component {
  constructor () {
    super();
    this.state = {
      requests: [],
      viewport: {
        width: "",
        height: "",
        latitude: 0,
        longitude: 0,
        zoom: 0
      }
    }
  }



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

  componentDidMount(){
    $.ajax({
			type: 'GET',
      url: 'http://localhost:3001/requests',
      headers: JSON.parse(sessionStorage.user)
		}).done((data) => {
      this.setState({requests: data});
    });
    
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
        {this.state.requests.map((request, key) => 
          <Marker key={request.id} latitude={request.latitude} longitude={request.longitude} offsetLeft={-20} offsetTop={-10}>
            <div><i className="fas fa-map-marker"/></div>
          </Marker>
        )}
      </ReactMapGL>
    );
  }
}
export default MyMap;


