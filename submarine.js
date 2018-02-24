function crush(exPressure, radius, yieldStrength, thickness ) {
   temp=(exPressure*radius)/(2*yieldStrength);
   if (thickness >= temp) {
       return True;
   }
}
function calcPressure(depth){
    pressure= (depth*0.003063)+0.101325
    return pressure
}