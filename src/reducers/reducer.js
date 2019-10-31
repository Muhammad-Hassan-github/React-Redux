const mystate = {
    name: "Hassan",
    Roll: 2211
}

const reducer = (state = mystate, action) => {
    console.log(action)
    if (action.type == "CHANGE_NAME") {
        return {
            name: action.payload,
        }
    }
    else if(action.type == "CHANGE_ROLLNO") {
        return {
            Roll: action.payload,
        }

    }
    return {
        state

    }
}


export default reducer