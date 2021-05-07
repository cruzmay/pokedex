export const ApiCall = async () => {

        let pokemons = []
        let species = []
        let gender = []
        const arr = []

        const PokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898`)
        const pokeData = await PokeApi.json()
        pokeData.results.map( data => {
            return {
                name: data.name,
                url: fetch(data.url)
                    .then(response => response.json())
                    .then(data => pokemons.push(data))
            }
        });

        const PokeSpeciesApi = await fetch(`https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=898`)
        const pokeDataSpecies = await PokeSpeciesApi.json()
        pokeDataSpecies.results.map( esp => {
            return {
                url: fetch(esp.url)
                    .then(response => response.json())
                    .then(data => species.push(data))
            }
        })

        const pokemonGenderApi = await fetch(`https://pokeapi.co/api/v2/gender/`)
        const pokemonGenderData = await pokemonGenderApi.json()
        pokemonGenderData.results.map( gen => {
            return {
                gender: gen.name,
                url: fetch(gen.url)
                    .then(response => response.json())
                    .then(data => gender.push(data) )
            }
        })
        console.log([].concat)
        return { pokemons, species, gender } 
    }