import ServerFiltering from "./FromServer/ServerFiltering"



const App = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10">Searching And Filtering</h1>
      {/* <ClientFiltering /> */}
      <ServerFiltering />
    </div>
  )
}

export default App
