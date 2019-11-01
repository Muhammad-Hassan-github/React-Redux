const rollnoReducer = (state = [], action) => {
    // console.log(action)
    if (action.type == "CHANGE_ROLLNO") {
        return [
            ...state,action.payload
        ]
    } 
    return state;
}
export default rollnoReducer