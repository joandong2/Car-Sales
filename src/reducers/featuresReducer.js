export const initialState = {
    features: [
        { id: 1, name: "V-6 engine", price: 1500 },
        { id: 2, name: "Racing detail package", price: 1500 },
        { id: 3, name: "Premium sound system", price: 500 },
        { id: 4, name: "Rear spoiler", price: 250 },
    ],
    selected: [],
};

export const featuresReducer = (state = initialState, action) => {
    let feature = [];

    if (action.type === "GET_FEATURE") {
        feature = state.features.filter(
            (item) => item.id === Number(action.payload)
        );
    }

    if (feature.length !== 0) {
        state.selected.push(feature[0]);
    }

    return state;
};
