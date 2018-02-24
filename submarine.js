function crush(exPressure, radius, yieldStrength, thickness ) {
   temp=(exPressure*radius)/(2*yieldStrength);
   if (thickness >= temp) {
       return true;
   }
}
function calcPressure(depth){
    pressure= (depth*0.003063)+0.101325;
    return pressure;

}
function calcDepth(pressure) {
    depth=(pressure-0.101325)/0.003063;
    return depth
}
function warning(exPressure, radius, yieldStrength, thickness ){
    for (i=calcDepth(exPressure);i<calcDepth(exPressure)+10;i++){
        if(crush(calcDepth(i),radius,yieldStrength,thickness)){
            return true
        }
    }

}

modules.export = {
    crush,
    calcDepth,
    calcPressure,
    warning
};