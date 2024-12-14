import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { notification, Popconfirm, Table } from "antd";
import { deleteProductAPI } from "../../services/api.service";
import ViewDeitailProd from "./view.prod.detail";
import { useState } from "react";

const ProdTable = (props) => {
    const { dataProd, loadProd, current, pageSize, total, setCurrent, setPageSize } = props
    const [isDetailDrawerOpen, setIsDetailDrawerOpen] = useState(false);
    const [dataDetails, setDataDetails] = useState(null);

    const handleDelete = async (id) => {
        const res = await deleteProductAPI(id)
        if (res.data) {
            notification.success({
                message: "Delete book",
                description: " Xóa book thành công"
            })
            await loadProd();

        } else {
            notification.error({
                message: "Error delete book",
                description: JSON.stringify(res.message)
            })
        }
    }
    const columns = [
        {
            title: "STT",
            render: (_, record, index) => {
                return (
                    <>{(index + 1) + (current - 1) * pageSize}</>
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
            title: 'Tiêu đề',
            dataIndex: 'mainText',
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
        },
        {
            title: 'Giá tiền',
            dataIndex: 'price',
        },
        {
            title: 'Tác giả',
            dataIndex: 'author',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        // onClick={() => {
                        //     setDataUpdate(record);
                        //     setIsModalUpdateOpen(true);
                        // }}
                        style={{ cursor: "pointer", color: "orange" }} />
                    <Popconfirm
                        title="Delete user"
                        placement="left"
                        description="Are you sure to delete book?"
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
    const onPageChange = (pagination, filters, sorter, extra) => {
        if (pagination && pagination.current) {
            if (+pagination.current !== +current) {
                setCurrent(+pagination.current) // them dau + de convert sang so nguyen

            }
        }
        if (pagination && pagination.pageSize) {
            if (+pagination.pageSize !== +pageSize) {
                setPageSize(+pagination.pageSize) // them dau + de convert sang so nguyen

            }
        }
    }

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataProd}
                rowKey={"_id"}
                pagination={
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => {
                            return (
                                <div>
                                    {range[0]} - {range[1]} trên {total} rows
                                </div>
                            )
                        }
                    }
                }
                onChange={onPageChange}
            />
            <ViewDeitailProd
                isDetailDrawerOpen={isDetailDrawerOpen}
                setIsDetailDrawerOpen={setIsDetailDrawerOpen}
                dataDetails={dataDetails}
                setDataDetails={setDataDetails}
                loadProd={loadProd}
            />
        </>
    )
}
export default ProdTable