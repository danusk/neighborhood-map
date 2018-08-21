import React from "react";

const Container = (props) => {
    return (
        <div className="map-container" role="application">
            { props.children }
        </div>
    )
}

export default Container;