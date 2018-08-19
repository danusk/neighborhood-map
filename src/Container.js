import React from "react";

const Container = (props) => {
    return (
        <div className="map-container">
            { props.children }
        </div>
    )
}

export default Container;