import { useState } from 'react'
import { Users } from '../users'
import Table from '../Table';

const ClientFiltering = () => {
    const [query, setQuery] = useState('');
    // console.log(Users.filter(user => user.first_name.toLowerCase().includes('fe')));

    //* Smart way 
    const keys = ["first_name", "last_name", "email"];

    // console.log(Users[0]["first_name"]);
    const search = (data) => {
        return data.filter(item =>
            // with the help of some we can iterate the keys array
            keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase())))
    }

    //! Repetitive way
    // const search = (data) => {
    //   return data.filter(item =>
    //     item.first_name.toLowerCase().includes(query.toLowerCase()) ||
    //     item.last_name.toLowerCase().includes(query.toLowerCase()) ||
    //     item.email.toLowerCase().includes(query.toLowerCase()))
    // }
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-10">Searching And Filtering</h1>

            <div className="lg:w-1/2 w-full mx-auto">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
                </label>

                <Table data={search(Users)} />

            </div>
        </div>
    );
};

export default ClientFiltering;