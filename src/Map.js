import React from "react";
import * as loc from "./locations"
import * as L from "leaflet"
import Marker from "./Marker"
import SideNav from "./SideNav"
import { GestureHandling } from "leaflet-gesture-handling";
import "leaflet/dist/leaflet.css";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";

class Map extends React.Component {
    state = {
        map: "",
        locations: loc.locations
    };

    componentDidMount() {
        let { zoom, lat, lng } = this.props;
        const center = L.latLng(lat, lng);
        // ctrl+scroll to zoom
        L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);
        const map = L.map('my-map', {
            gestureHandling: true,
            center: center,
            zoom: zoom,
            layers: [
                L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1IjoiZGFudXNrIiwiYSI6ImNqa2lpbXFqazEzeXoza3FnM3IxdDBweHAifQ.Mj0t4kPh8FMDyQknHzOl0g'
            })]
        });
        this.setState({ map: map });
    }

    getMarkers = () => {
        const markers = this.state.locations.map((place, index) => (
            <Marker
                key={index}
                map={this.state.map}
                position={place.location}
                id={place.venue_id}
                title={place.title}
                place={place}
            />
        ))
        return markers
    }

    render() {
        return (
            <div>
                <div id="my-map">
                    {this.getMarkers()}
                </div>
                <SideNav
                    locations={this.state.locations}
                    toggleNav={this.props.toggleNav}
                    show={this.props.showNav}
                    map={this.state.map}
                />
            </div>
        );
    }
}

Map.defaultProps = {
    lat: 37.769908,
    lng: -122.418052,
    zoom: 14
};


export default Map;
