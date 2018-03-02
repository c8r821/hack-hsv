const length = 180;

function crush(depth, radius, yieldStrength, thickness) {
    let temp = (calcPressure(depth) * (radius * 0.3048 /* Feet->Meters */)) / (2 * yieldStrength);
    return (thickness * 0.3048) < temp;
}

function calcPressure(depth) {
    return depth * 0.00299;
}

function pressureOnHull(exPressure, radius) {
    let area = 2 * Math.PI * radius * length + 2 * Math.PI * radius ** 2;
    let areaInMeters = area / 3.28;
    return areaInMeters * exPressure;

}

function money(radius, thickness, density, pricePerPound) {
    // console.log('radius', radius, 'thickness', thickness, 'density', density, 'ppp', pricePerPound);
    let volume = Math.PI * (length * 30.48) * (((radius * 30.48) - ((radius * 30.48) - (thickness * 30.48))));
    // console.log("volume", volume);
    
    let mass = density * (volume * 28316.8);
    
    // console.log('mass', mass);
    
    let weight = mass * 0.00220462;

    // console.log('weight', weight);
    return weight * pricePerPound;
}