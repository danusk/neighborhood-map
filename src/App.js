import React from "react";
import Container from "./Container";
import Map from "./Map";

class App extends React.Component {
    state = {
        showNav: false
    }

    toggleNav = () => {
        this.setState({
            showNav: !this.state.showNav
        })
    }

    render() {
        return (
            <div className="App">
                <header className="main-title">
                    <button className="menu-button" onClick={ this.toggleNav.bind(this) } tabIndex="1">
                        <i className="fas fa-bars" />
                    </button>
                    <h2>Neighborhood Map</h2>
                </header>
                <Container>
                    <Map
                        toggleNav={ this.toggleNav }
                        showNav={ this.state.showNav }
                    />
                </Container>
            </div>
        );
    }
}

export default App;
