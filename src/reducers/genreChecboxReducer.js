export const GenreChecboxReducer = (state = [], action) => {
   switch (action.type) {
       case 'toogleGenreFilter':
            return state.map( data => {
                if(data.gender === action.payload) {
                    return {
                        ...data, 
                        checked: !data.checked
                    }
                } else {
                    return data
                }
            })
       default:
           return state
   }
}
