import React from "react";

const AdditionalFeature = (props) => {
    const clickHandler = (e) => {
        //console.log(e.target.getAttribute("data-id"));
        props.addFeature(e.target.getAttribute("data-id"));
    };

    return (
        <li>
            {/* Add an onClick that will let you add a feature to your car */}
            <button
                onClick={clickHandler}
                className="button"
                data-id={props.feature.id}
            >
                Add
            </button>
            {props.feature.name} (+{props.feature.price})
        </li>
    );
};

export default AdditionalFeature;
