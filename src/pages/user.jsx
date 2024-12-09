import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchALLUserAPI } from '../services/api.service';
import { useEffect, useState } from 'react';
const UserPage = () => {

    const [dataUsers, setDataUser] = useState([])
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchALLUserAPI()
        setDataUser(res.data)

    }
    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable
                loadUser={loadUser}
                dataUsers={dataUsers} />
        </div>
    )
}
export default UserPage;