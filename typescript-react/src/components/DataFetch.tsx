
type data = {
  status:"success"| "loading" | "error"
}

const DataFetch = ({status}:data) => {

  if (status === "loading") {
    return <h2>Loading...</h2>
  }
  if (status === "error") {
    return <h2>Error, Date could not fetch</h2>
  }

  return (
    <div className="bg-blue-500">
      <h2>Date fetch successfully</h2>
    </div>
  )
}

export default DataFetch