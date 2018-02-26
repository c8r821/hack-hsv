const length=180;
function crush(depth, radius, yieldStrength, thickness ) {
   let temp=Math.sqrt(calcPressure(depth) * 72.5 * radius) / (2 * yieldStrength);
   console.log("min: ", temp, "real: ", thickness);
   return (thickness < temp);
}
function calcPressure(depth){
    return (depth*0.003063)+0.101325;
}
function warning(depth, radius, yieldStrength, thickness){
        if(crush(depth+200,radius,yieldStrength,thickness)) {
             return true
        }
}

function pressureOnHull(exPressure,radius){
    let area=2*Math.PI*radius*length+2*Math.PI*radius**2;
    let areaInMeters=area/3.28;
    return areaInMeters*exPressure;

}
function money(radius,thickness,density,pricePerPound){
    let volume=Math.PI*(length*30.48)*(((radius*30.48)-((radius*30.48)-(thickness*30.48))));
    let mass=density*volume;
    let weight=mass*0.00220462;
    return weight*pricePerPound;


}