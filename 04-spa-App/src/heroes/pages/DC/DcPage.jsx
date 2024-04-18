import { GetList } from "../../components"


export const DcPage = () => {
  return (
    <>
      <div className="text-5xl text-center font-extrabold w-full p-3 items-center tracking-wide border-b mb">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-slate-400 font-primary">
          DC heroes
        </h1>
      </div>

      <GetList publisher='DC Comics' />
      

    </>
  )
}
