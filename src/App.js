import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { getFeature } from "./actions/featuresActions";
import { updateFeatures } from "./actions/carActions";

const App = (props) => {
    const addFeature = (item) => {
        props.getFeature(item);
        props.updateFeatures(props.selectedFeatures);
    };

    // const removeFeature = (item) => {
    //     // dispatch an action here to remove an item
    // };

    return (
        <div className="boxes">
            <div className="box">
                <Header car={props.car} />
                <AddedFeatures car={props.car} />
            </div>
            <div className="box">
                <AdditionalFeatures
                    additionalFeatures={props.features}
                    addFeature={addFeature}
                />
                <Total
                    car={props.car}
                    //additionalPrice={state.additionalPrice}
                />
            </div>
        </div>
    );
};

//export default App;
const mapStateToProps = (state) => {
    return {
        car: state.carReducer,
        features: state.featuresReducer.features,
        selectedFeatures: state.featuresReducer.selected,
    };
};

export default connect(mapStateToProps, { getFeature, updateFeatures })(App);
