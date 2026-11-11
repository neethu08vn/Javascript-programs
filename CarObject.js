const car = 
{
    Color: "Black",
    Brand: "Kia",
    Price: 1000000,
    Isautomate: true,
    features: ["Feature 1", "Feature 2"],
    engine: //nested object
    {
        type: "Petrol",
        power: 250

    },
    details: function()
    {
        console.log(this.Color)
        console.log(this.Brand)
    }
}

console.log(car.Color)
console.log(car.features[1])
console.log(car.engine.power)
car.details()

import data from './Data.json' with {type:'json'}
const dataString = JSON.stringify(data)
const datajs = JSON.parse(dataString)
console.log(datajs.Brand)

