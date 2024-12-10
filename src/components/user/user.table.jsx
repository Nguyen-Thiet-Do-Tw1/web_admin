
import { Table, Popconfirm, notification } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import DetailsUserDrawer from './view.user.detail';
import { deleteUserAPI } from "../../services/api.service"



const UserTable = (props) => {
  const { dataUsers, loadUser, current, pageSize, total } = props
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);

  const [isDetailDrawerOpen, setIsDetailDrawerOpen] = useState(false);
  const [dataDetails, setDataDetails] = useState(null);

  const handleDelete = async (id) => {
    const res = await deleteUserAPI(id)
    if (res.data) {
      notification.success({
        message: "Delete user",
        description: " Xóa user thành công"
      })
      await loadUser();
    } else {
      notification.error({
        message: "Error delete user",
        description: JSON.stringify(res.message)
      })
    }
  }

  const columns = [
    {
      title: "STT",
      render: (_, record, index) => {
        return (
          <>{index + 1}</>
        )
      }
    },
    {
      title: 'Id',
      dataIndex: '_id',
      render: (_, record) => {
        return (
          <a href='#'
            onClick={() => {
              setDataDetails(record)
              setIsDetailDrawerOpen(true)
            }}
          >{record._id}</a>
        )
      }
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            onClick={() => {
              setDataUpdate(record);
              setIsModalUpdateOpen(true);
            }}
            style={{ cursor: "pointer", color: "orange" }} />
          <Popconfirm
            title="Delete user"
            placement="left"
            description="Are you sure to delete user?"
            onConfirm={() => { handleDelete(record._id) }}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined
              style={{ cursor: "pointer", color: "red" }} />
          </Popconfirm>

        </div>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataUsers}
        rowKey={"_id"}
        pagination={
          {
            current: current,
            pageSize: pageSize,
            showSizeChanger: true,
            total: total,
            showTotal: (total, range) => {
              return(
                <div>
                  {range[0]} - {range[1]} trên {total} rows
                </div>
              )
            }
          }
        }
      />
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
      <DetailsUserDrawer
        isDetailDrawerOpen={isDetailDrawerOpen}
        setIsDetailDrawerOpen={setIsDetailDrawerOpen}
        dataDetails={dataDetails}
        setDataDetails={setDataDetails}
        loadUser={loadUser}
      />
    </>

  )
}
export default UserTable