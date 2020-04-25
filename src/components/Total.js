import React from "react";

const Total = (props) => {
    let sum = 0;
    for (let i = 0; i < props.car.additionalPrice.length; i++) {
        sum += props.car.additionalPrice[i].price;
    }

    return (
        <div className="content">
            <h4>Total Amount: ${props.car.car.price + sum}</h4>
        </div>
    );
};

export default Total;
