import { setPokemons, startLoadingPokemons } from "./slicePokemon"
import { axiosInstance } from "../../../api/pokemonApi"


export const getPokemons = ( page = 0) => {
  return async (dispatch) => {

    dispatch(startLoadingPokemons())

    // TODO: realizar peticion http

    // const resp = await fetch(` https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
    // const data = await resp.json();
    // console.log(data);

    const { data } = await axiosInstance.get(`/pokemon?limit=10&offset=${page * 10}`);
   

    dispatch(setPokemons({pokemons: data.results, page: page + 1 }))
  }
}
