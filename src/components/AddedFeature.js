import React from "react";

const AddedFeature = (props) => {
    const removeFeature = (e) => {
        props.removeFeature(e.target.getAttribute("data-id"));
    };

    return (
        <li>
            {/* Add an onClick to run a function to remove a feature */}
            <button
                className="button"
                data-id={props.feature.id}
                onClick={removeFeature}
            >
                remove
            </button>
            {props.feature.name} - {props.feature.price}
        </li>
    );
};

export default AddedFeature;
