const length=180;
function crush(depth, radius, yieldStrength, thickness ) {
   temp=Math.sqrt(calcPressure(depth) * 72.5 * radius) / (2 * yieldStrength);
   console.log("min: ", temp, "real: ", thickness);
   return (thickness < temp);
}
function calcPressure(depth){
    return (depth*0.003063)+0.101325;
}
function calcDepth(pressure) {
    return (pressure-0.101325)/0.003063;
}
function warning(depth, radius, yieldStrength, thickness){
        if(crush(depth+10,radius,yieldStrength,thickness)) {
             return true
        }
}

function pressureOnHull(exPressure,radius){
    area=2*Math.PI*radius*length+2*Math.PI*radius**2;
    areaInMeters=area/3.28;
    return areaInMeters*exPressure;

}
function money(radius,thickness){
    volume=Math.PI*length*((radius-(radius-thickness)));

}