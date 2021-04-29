export const CheckBoxReducers = ( state = [], action ) => {
    switch (action.type) {
        case 'toogleFilter':
            return state.map( check => {
                if(check.type === action.payload) {
                    return {
                        ...check, 
                        checked: !check.checked
                    }
                } else {
                    return check
                }
            })
        default:
            return state;
    }
}
