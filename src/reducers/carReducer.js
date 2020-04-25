export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: "2019 Ford Mustang",
        image:
            "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
        features: [],
    },
    additionalFeatures: [
        { id: 1, name: "V-6 engine", price: 1500 },
        { id: 2, name: "Racing detail package", price: 1500 },
        { id: 3, name: "Premium sound system", price: 500 },
        { id: 4, name: "Rear spoiler", price: 250 },
    ],
};

export const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FEATURE":
            const getFeature = state.additionalFeatures.filter((feature) => {
                return feature.id === Number(action.payload);
            });

            return {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features, getFeature[0]],
                },
                additionalFeatures: [
                    ...state.additionalFeatures.filter(
                        (feature) => feature.id !== Number(action.payload)
                    ),
                ],
                additionalPrice: [...state.car.features, getFeature[0]],
            };
        case "REMOVE_FEATURE":
            const removedFeature = state.car.features.filter((feature) => {
                return feature.id === Number(action.payload);
            });

            console.log("removed", removedFeature);

            return {
                ...state,
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features.filter((feature) => {
                            return feature.id !== Number(action.payload);
                        }),
                    ],
                },
                additionalFeatures: [
                    ...state.additionalFeatures,
                    removedFeature[0],
                ],
                additionalPrice: [
                    ...state.car.features.filter((feature) => {
                        return feature.id !== Number(action.payload);
                    }),
                ],
            };
        default:
            return state;
    }
};
