export type IPokemons = {
    id: number,
    name: string,
    type: string[],
    order: number,
    image: string,
    stats: any[]
}

export type IGetPokemons = {
    count: number,
    next: string | null,
    previous: null | string,
    results: null | IPokemonsResponse[]
}

export type  IPokemonsResponse = {
    name: string,
    url: string
}

export type IPokemonList = {
    pokemonList: IPokemons[]
    loadPokemons?: (value?: string ) => Promise<void>
    isNext?: boolean
    loadPreviousPokemons?: (value?: string ) => Promise<void>
    isPrevious?: boolean
}

export type IPokemonCard = {
    pokemon: IPokemons
}

export type IPokemonTypeColor = {
    [key: string] : string,
}