import { Drawer } from "antd"


const DetailsUserDrawer = (props) => {

    const { isDetailDrawerOpen, setIsDetailDrawerOpen, dataDetails, setDataDetails } = props


    return (
        <Drawer title="Chi tiết người dùng"
            onClose={() => {
                setDataDetails(null)
                setIsDetailDrawerOpen(false)
            }}
            open={isDetailDrawerOpen}>
            {
                dataDetails ?
                    <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                        <p>Id: {dataDetails._id}</p>
                        <p>Full Name: {dataDetails.fullName} </p>
                        <p>Email: {dataDetails.email} </p>
                        <p>Phone: {dataDetails.phone} </p>

                    </div>
                    :
                    <>
                        <p>Không có dữ liệu</p>
                    </>
            }
        </Drawer>
    )
}

export default DetailsUserDrawer;