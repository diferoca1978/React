import { GetList } from "../../components"



export const MarvelPage = () => {
  

  return (
    <>
      <div className="text-5xl text-center font-extrabold w-full p-3 items-center tracking-wide border-b mb">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-sky-700 font-primary">
          Marvel Heroes
        </h1>
      </div>

      <GetList publisher='Marvel Comics' />
      

    </>
  )
}


