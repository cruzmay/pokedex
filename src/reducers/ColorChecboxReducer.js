export const ColorChecboxReducer = (state = [], action) => {
   switch (action.type) {
       case 'toogleColorFilter':
            return state.map( colorcheck => {
                if(colorcheck.color === action.payload) {
                    return {
                        ...colorcheck, 
                        checked: !colorcheck.checked
                    }
                } else {
                    return colorcheck
                }
            })
       default:
           return state
   }
}
