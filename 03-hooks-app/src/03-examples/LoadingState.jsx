

export const LoadingState = () => {
  return (
    <>
      <div className="d-flex align-items-center">
          <strong role="status">Loading...</strong>
          <div className="spinner-border text-primary ms-auto" aria-hidden="true"></div>
      </div>
    </>
  )
}
