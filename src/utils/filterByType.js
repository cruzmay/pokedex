import { noRepeatElement } from "./noRepeatElement"
import { ordered } from "./ordered"

export const filterByType = (pokemons) => {
    const types = pokemons.map( type => {
      return type.types[0].type.name
    })
    let checkboxes = types.filter( noRepeatElement )
    let arrCheckBoxes = checkboxes.map((filt, i) => {
        return {
            type: filt,
            checked: false,
            id: i
        }
    })
    let checkBoxesOrderedId = arrCheckBoxes.sort(ordered)
 
    return checkBoxesOrderedId
}
