import React from "react";

const initState = {
    User: [
        {id: 1, name: 'John'},
        {id: 2, name: 'Hayate'}
    ]
}
const rootReducer = (state = initState, action) => {

    return state
}

export default rootReducer