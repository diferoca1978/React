import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Search = () => {
  return (
    <>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <FontAwesomeIcon className="h-4 w-4 text-slate-300" icon={faMagnifyingGlass} />
        </span>
        <input className="placeholder:italic placeholder:text-slate-400 block border-b-slate-300 bg-white w-full pl-9 focus:outline-none focus:border-b-2 border-sky-500 rounded-md sm:text-sm" placeholder="Search for anything..." type="search" name="search"/>
      </label>
    </>
  )
}
