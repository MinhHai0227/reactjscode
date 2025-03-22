import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { deleteUser, getAllUser } from "../custom/service/UserService";

function UserAdminPage(){

    const [users, setUsers] = useState([]);
    const [role, setRole] = useState('user');
    const fetchUsers = async() => {
        const usersData = await getAllUser(role)
        setUsers(usersData)
    };

    useEffect(() => {
        fetchUsers()
    },[role])

    const hanlonDelete = async (id) => {
        await deleteUser(id)
        fetchUsers()
    }


    return(
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <div className="p-3">
                <button
                onClick={() => setRole('user')}
                className={`px-4 py-2 mr-2 ${role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                >
                User
                </button>
                <button
                onClick={() => setRole('admin')}
                className={`px-4 py-2 ${role === 'admin' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                >
                Admin
                </button>
            </div>
            <table className="min-w-full text-sm text-left text-gray-500">
                <thead className="bg-gray-100">
                <tr>
                    <th scope="col" className="px-6 py-3 font-medium text-gray-900">Name</th>
                    <th scope="col" className="px-6 py-3 font-medium text-gray-900">Email</th>
                    <th scope="col" className="px-6 py-3 font-medium text-gray-900">Total</th>
                    <th scope="col" className="px-6 py-3 font-medium text-gray-900 text-center">Actions</th>
                </tr>
                </thead>
                <tbody>
                    {users && users.data ? (
                        users.data.map((user) => (
                        <tr key={user.user_id} className="border-b hover:bg-gray-50">
                            <td className="px-6 py-4">{user.username}</td>
                            <td className="px-6 py-4">{user.email}</td>
                            <td className="px-6 py-4">{user.total_coins}</td>
                            <td className="px-6 py-4 flex justify-center items-center gap-2">
                            <Link className="text-sky-600 hover:text-sky-800">Edit</Link>
                            <button onClick={() => hanlonDelete(user.user_id)} className="text-red-600  hover:text-red-800 cursor-pointer">Delete</button>
                            </td>
                        </tr>   
                        ))
                    ):(
                        <tr>
                            <td colSpan="4" className="text-center px-6 py-4">No data available</td>
                        </tr>
                    )}
                             
                </tbody>
            </table>
        </div>

    )
}
export default UserAdminPage