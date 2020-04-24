import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { getFeature } from "./actions/featuresActions";
import { updateFeatures } from "./actions/carActions";

const App = (props) => {
    //const [state, setState] = useState(props.car);
    //console.log("State", state);

    //const state = {
    // additionalPrice: 0,
    // car: {
    //     price: 26395,
    //     name: "2019 Ford Mustang",
    //     image:
    //         "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    //     features: [],
    // },
    // additionalFeatures: [
    //     { id: 1, name: "V-6 engine", price: 1500 },
    //     { id: 2, name: "Racing detail package", price: 1500 },
    //     { id: 3, name: "Premium sound system", price: 500 },
    //     { id: 4, name: "Rear spoiler", price: 250 },
    // ],
    //};

    const addFeature = (item) => {
        // dipsatch an action here to add an item
        props.getFeature(item);
        props.updateFeatures(props.selectedFeatures);
        //console.log("car updated features", props.car);
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
    //console.log("stateToProps:", state);
    return {
        car: state.carReducer,
        features: state.featuresReducer.features,
        selectedFeatures: state.featuresReducer.selected,
    };
};

export default connect(mapStateToProps, { getFeature, updateFeatures })(App);
