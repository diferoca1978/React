

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen px-6 py-12 lg:px-8">
        <div className="border border-blueLight-400 rounded-lg shadow-xl bg-white-50">
          <h2 className="ml-3 mt-3 text-lg font-bold text-blueDark-800">{title}</h2>
          {children}
        </div>
      </div>
    </>
  )
}
