import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { fetchALLUserAPI } from '../services/api.service';
import { useEffect, useState } from 'react';
const UserPage = () => {

    const [dataUsers, setDataUser] = useState([])
    useEffect(() => {
        loadUser();
    }, []);

    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(12);
    const [total, setTotal] = useState(0);


    const loadUser = async () => {
        const res = await fetchALLUserAPI(current, pageSize)
        if(res.data){
            setDataUser(res.data.result)
            setCurrent(res.data.meta.current)
            setPageSize(res.data.meta.pageSize)
            setTotal(res.data.meta.total)
        }

    }
    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable
                loadUser={loadUser}
                dataUsers={dataUsers}
                current={current}
                pageSize={pageSize}
                total={total}
            />
        </div>
    )
}
export default UserPage;