import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Table from "../Table";


const ServerFiltering = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get(`http://localhost:5000?q=${query}`);
            setData(res.data)
        };
        fetchUsers();
    }, [query])

    return (
        <div>
            <div className="lg:w-1/2 w-full mx-auto">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
                </label>

                <Table data={data} />

            </div>
        </div>
    );
};

export default ServerFiltering;