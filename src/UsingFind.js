import React, { useState, useEffect } from "react";
import Form from './Form'
import './App.css';

const UsingFind = () => {

    var cars = [
        {
          "color": "purple",
          "type": "minivan",
          "capacity": 7
        },
        {
          "color": "red",
          "type": "station wagon",
          "registration": new Date('2018-03-03'),
          "capacity": 5
        },
      ]
      var car = cars.find(car => car.color === "red");

     console.log("car",car)

  return (
   <p>{car.color}</p>
  )
}

export default UsingFind;