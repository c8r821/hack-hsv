function crush(exPressure, radius, yieldStrength, thickness ) {
   temp=(exPressure*radius)/(2*yieldStrength);
   if (thickness >= temp) {
       return True;
   }
}
