import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker/Marker";

const getMapOptions = maps => {
  return {
    disableDefaultUI: true,
    mapTypeControl: true,
    streetViewControl: true,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "on" }]
      }
    ]
  };
};
class SimpleMap extends Component {
  state = {
    center: {
      lat: 40.4167754,
      lng: -3.7037901999999576
    },
    box: {
      lat: "",
      lng: ""
    },
    zoom: 9
  };
  componentDidMount() {
    console.log(this.props);
    this.setState(prevState => ({
      box: {
        ...prevState.box, // copy all other key-value pairs of food object
        lat: this.props.pos.latitude,
        lng: this.props.pos.longitude
      }
    }));
  }

  render() {
    const { pos } = this.props;
    console.log(this.state);

    return (
      // Important! Always set the container height explicitly

      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBp-UvjxkIJCseXzKxl8l-OCo5iU2mMjzU" }}
          defaultCenter={this.state.box}
          defaultZoom={this.state.zoom}
          options={getMapOptions}
        >
          <Marker
            lat={pos.latitude}
            lng={pos.longitude}
            draggable={true}
            text="My Marker"
            name="BoxName"
            color="blue"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
