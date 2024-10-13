/* eslint-disable react/prop-types */
const Table = ({ data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Ind</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(user => (
                            <tr key={user.id}>
                                <th>{user.id}</th>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;