export const initialState = {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
        "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
    additionalPrice: 0,
};

export const carReducer = (state = initialState, action) => {
    console.log("car reducer", action.payload);
    // switch (action.type) {
    //     case "ADD_FEATURE":
    //         return {
    //             ...state,
    //             features: [...state.features, action.payload],
    //         };
    //     default:
    //         return state;
    // }
    return state;
};
