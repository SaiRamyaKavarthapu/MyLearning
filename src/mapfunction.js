import React from "react";


   

function MapFunction() {
    var numbers = [1, 2, 3, 4, 5];   

    var doubleValue = numbers.map((number)=>{   
        return (number * 2);   
    });   
    return (
        <div className="App">
          {doubleValue}
        </div>
    );
}
export default MapFunction;

