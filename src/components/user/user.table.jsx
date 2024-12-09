
import { Table } from 'antd';
import { fetchALLUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';

const UserTable = () => {

  const [dataUser, setDataUser] = useState([])

  useEffect(() => {
    loadUser();
  }, []);

  const columns = [
    {
      title: 'Id',
      dataIndex: '_id',
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    }
  ];

  const loadUser = async () => {
    const res = await fetchALLUserAPI()
    setDataUser(res.data)

  }

  return (
    <Table
      columns={columns}
      dataSource={dataUser}
      rowKey={"_id"}
    />
  )
}
export default UserTable