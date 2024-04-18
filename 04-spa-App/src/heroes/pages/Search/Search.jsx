import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "../../hooks";
import { GetHeroById } from "../../helpers/getHeroById";
import { HeroCard } from "../../components";
import { GetHeroesByName } from "../../helpers/getHeroesByName";




export const Search = () => {

  const navigate = useNavigate()
  const location = useLocation();
  
  const { q = ''} = queryString.parse(location.search);
  console.log(q);

  const heroe = GetHeroesByName( q );

  const { search, onInputChange } = useForm({
    search: q
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // if(search.trim().length <= 1 ) return;

    navigate(`?q=${search}`)

  }

  return (
    <>

      <div className="flex flex-col items-center">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <FontAwesomeIcon className="h-4 w-4 text-slate-500" icon={faMagnifyingGlass} />
          </span>
          <form onSubmit={ handleSubmit }>
            <input className="font-primary pl-9 placeholder:italic placeholder:text-slate-500 outline-none focus:outline-none focus:border-b-2 border-sky-600 rounded-md my-2" 
            placeholder="Search for any hero..." 
            type="text" 
            name="search"
            value={ search }
            onChange={ onInputChange }
            />
          </form>
        </div>

        <div className="max-w-5xl text-center bg-gradient-to-r from-slate-200 to-slate-400">
          <h1 className="font-primary text-xl font-semibold" >Results</h1>
          <div className="flex flex-wrap space-x-4 p-2">

            {/* //* conditional to show error messages */}
            {
              (q === '') 
              ? <h1 className="font-primary italic text-sky-700 font-semibold">Search a hero</h1>
              : ( heroe.length === 0) && <h1 className=" font-primary italic text-red-600"><b>{q}</b> It's not a Hero</h1>
            }
            {/* //* To show heroes */}
            {
              heroe.map((heroe) => (
                <HeroCard key={heroe.id} {...heroe} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
