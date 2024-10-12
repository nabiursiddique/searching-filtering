import { useState } from 'react'
import { Users } from './users'

const App = () => {
  const [query, setQuery] = useState('');
  // console.log(Users.filter(user => user.first_name.toLowerCase().includes('fe')));
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10">Searching And Filtering</h1>

      <div className="w-1/3 mx-auto">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
        </label>
      </div>
      <div className="text-center text-2xl mt-3">
        <ul className="list">
          {Users.filter(user => user.first_name.toLowerCase().includes(query)).map((user) => <li key={user.id}>{user.first_name}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App
