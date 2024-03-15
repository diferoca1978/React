interface props {
  name: string,
  profession: string
}

export const FirstApp = ( {name, profession}: props ) => {
  return (
    <>
      <h1>User:</h1>
      <h3>{name}</h3>
      <p>{profession}</p>
    </>
    
  )
}