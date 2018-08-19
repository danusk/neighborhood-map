import React from "react";
import * as L from "leaflet"
import "./animation"

class SideNav extends React.Component {
    state = {
        query: "",
        results: [],
        bluePresent: false,
        prevMarker: ""
    }

    componentWillMount() {
        this.setState({ results: this.props.locations })
    }

    toggleAnimation(marker) {
        const blueIcon = L.icon({
            iconUrl: "./icons/coffee-blue.svg",
            popupAnchor: [25, 0]
        })

        const pinkIcon = L.icon({
            iconUrl: "./icons/coffee-pink.svg",
            popupAnchor: [25, 0]
        })

        if (this.state.bluePresent === true) {
            this.state.prevMarker.setIcon(pinkIcon)
            this.setState({
                bluePresent: false
            })
        }

        marker.bounce({ duration: 1000, height: 20 });
        marker.setIcon(blueIcon)
        marker.openPopup()
        this.props.toggleNav()
        this.props.map.setView(marker.getLatLng())

        this.setState({
            bluePresent: true,
            prevMarker: marker
        })

    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
            }, () => {
            if (this.state.query && this.state.query.length > 0) {
                this.getLocations(this.state.query)
            } else {
                this.setState({ query: "", results: this.props.locations })
                this.props.locations.forEach(location => {
                    this.props.map.addLayer(location.marker)
                })
            }
        })
    }

    getLocations(query) {
        let filteredLoc = []
        this.props.locations.forEach(location => {
        if (location.title.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
            this.props.map.addLayer(location.marker);
            filteredLoc.push(location);
        } else {
            this.props.map.removeLayer(location.marker);
        }
        })
        this.setState ({
            results: filteredLoc
        })
    }

    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div className="side-nav">
                <nav className="side-nav-content">
                    <button className="close-nav" onClick={ this.props.toggleNav }>
                        <i className="fas fa-times"></i>
                    </button>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Filter By Cafe Name..."
                            ref={ input => this.search = input }
                            onChange={ this.handleInputChange }
                        />
                    </div>
                    <ul className="place-list">
                        { this.state.results.length ? this.state.results.map((location, index) =>
                            <li key={ index }>
                                <a onClick={ () => this.toggleAnimation(location.marker) } tabIndex="0">
                                    { location.title }
                                </a>
                            </li>
                        ) : "No results found" }
                    </ul>
                </nav>
            </div>
        )
    }
}

export default SideNav