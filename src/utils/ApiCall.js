export const ApiCall = async () => {

        let pokemons = []
        let species = []
        let gender = []
        let evolution = []


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
                    .then( async data => ({
                        id: data.id,
                color: data.color.name,
                flavor_text_entries: data.flavor_text_entries.find(
                    data => data.language.name === 'en'),
                habitat: data.habitat ? data.habitat.name : null,
                is_baby: data.is_baby,
                is_legendary: data.is_legendary,
                is_mythical: data.is_mythical,
                evolution_chain: await fetch(data.evolution_chain.url)
                    .then(response => response.json())
                    .then(data => ({
                        // evolution: data.chain,
                        evolves_1: data.chain.species.url,
                        evolves_2: data.chain.evolves_to[0]
                            ? data.chain.evolves_to[0].species.url
                            : null,
                        evolves_3: (data.chain.evolves_to[0] && data.chain.evolves_to[0].evolves_to[0])
                            ? data.chain.evolves_to[0].evolves_to[0].species.url
                            : null
                        }))
                    }))
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

        const pokemonEvolutionApi = await fetch(`https://pokeapi.co/api/v2/evolution-chain/?offset=20&limit=898`)
        const pokemonEvolutionData = await pokemonEvolutionApi.json()
        pokemonEvolutionData.results.map( evol => {
            return {
                evolution: fetch(evol.url)
                    .then(response => response.json())
                    .then(data => evolution.push(data) )

            }
        })
        const countApi = await fetch(`https://pokeapi.co/api/v2/pokemon-species/`)
        const count = await countApi.json()
        count.results.map( count => {
            return {
                count: count.count
            }
        })
        // debugger
        
        return { pokemons, species, gender, evolution } 
    }