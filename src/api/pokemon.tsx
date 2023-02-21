import { API_HOST } from "../utils/constants";

export const getPokemonsApi = async (endpoint : string | null) => {
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`
        const response = await fetch(endpoint || url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export const getPokemonDetailsByUrlApi = async (url : string) => {
    try {
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}