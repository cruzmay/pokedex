import { getImage } from "./getImage"
    //image link
    export const imageLink = (link, size) => {
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/${size}/${getImage(link)}.png`
    }