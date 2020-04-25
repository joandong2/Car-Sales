import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { addFeature, removeFeature } from "./actions/carActions";

const App = (props) => {
    const addFeature = (item) => {
        // dispatch an action here to remove an item
        props.addFeature(item);
    };

    const removeFeature = (item) => {
        // dispatch an action here to remove an item
        props.removeFeature(item);
    };

    return (
        <div className="boxes">
            <div className="box">
                <Header car={props.car.car} />
                <AddedFeatures
                    car={props.car.car}
                    removeFeature={removeFeature}
                />
            </div>
            <div className="box">
                <AdditionalFeatures
                    additionalFeatures={props.car.additionalFeatures}
                    addFeature={addFeature}
                />
                <Total car={props.car} />
            </div>
        </div>
    );
};

//export default App;
const mapStateToProps = (state) => {
    //console.log(state);
    return {
        car: state.carReducer,
    };
};

export default connect(mapStateToProps, {
    addFeature,
    removeFeature,
})(App);
