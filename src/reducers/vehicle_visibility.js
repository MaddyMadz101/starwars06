const vehicleVisibility = (state = false, action) => {
    switch(action.type){
        case "SHOWVEHICLES":
            return !state;
        case "HIDEVEHICLES":
            return state;
        default:
            return state;
    }
}

export default vehicleVisibility;