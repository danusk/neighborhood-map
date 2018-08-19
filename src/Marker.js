import React from "react";
import * as foursquare from "./foursquare";
import L from "leaflet"

class Marker extends React.Component {
    state = {
        text: "",
        address: "",
        infoWindow: L.popup({
            minWidth: 150,
            maxWidth: 240,
            closeButton: false
        })
    };

    componentDidUpdate(prevProps) {
        if (
            this.props.map !== prevProps.map ||
            this.props.position !== prevProps.position
        ) {
            this.renderMarker();
        }
    };

    renderMarker() {
        const myIcon = L.icon({
            iconUrl: "./icons/coffee-pink.svg",
            popupAnchor: [25, 0]
        })

        const marker = L.marker(
            this.props.position, {
                icon: myIcon,
                alt: "Location Marker"
            })
            .addTo(this.props.map)

        marker.on("click", handleClick => {
            this.props.map.setView(this.props.position);
        });

        marker.bindPopup(this.state.infoWindow)

        this.state.infoWindow.setContent(contentString => {
            let title = this.props.title
            return `<div class="info-contents"><h3>${title}</h3> <p>${
                this.state.text
                }</p> <p>${this.state.address}</p>
                <img
                src="./icons/powered-by-foursquare-blue.png"
                alt="Powered By Foursquare"
                width="70%"
                ></div>`;
            }
        )

        if (this.state.text !== "") {
            marker.togglePopup()
        }
        this.props.place.marker = marker;
    }

    componentDidMount() {
        foursquare.getTip(this.props.id).then(data => {
            this.setState({ text: `<b>Tip:</b> ${data.tips.items[0].text}` });
            }
        )
        .catch(err => this.setState({text: "Sorry, could not load tip from Foursquare"}));
/*
        foursquare.getDetail(this.props.position.lat, this.props.position.lng)
            .then(data => {
                let loc = data.venues[0].location.formattedAddress;
                this.setState({ address: `${loc[0]} ${loc[1]}` });
            })
            .catch(err =>
                this.setState({
                    address: "Sorry, could not load address from Foursquare"
                })
            );
            */
    }

    render() {
        return null
    }
}

export default Marker;
