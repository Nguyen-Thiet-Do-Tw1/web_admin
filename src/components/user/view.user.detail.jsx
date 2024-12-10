import { Button, Drawer, notification } from "antd"
import { useState } from "react"
import { handleUploadFile, UpdateUserAvataAPI } from "../../services/api.service"


const DetailsUserDrawer = (props) => {

    const { isDetailDrawerOpen, setIsDetailDrawerOpen, dataDetails, setDataDetails, loadUser } = props
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return;
        }
        const file = event.target.files[0]
        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }
    }
    const handleUpdateUserAvatar = async () => {
        // 1. upload file
        const resUpload = await handleUploadFile(selectedFile, "avatar")
        if (resUpload.data) {
            const newavatar = resUpload.data.fileUploaded;
            console.log(">>> check newAvatar", newavatar)
            // 2. update avatar 
            const resUpdateAvatar = await UpdateUserAvataAPI(newavatar, dataDetails._id, dataDetails.fullName, dataDetails.phone)
            if (resUpdateAvatar.data) {
                setIsDetailDrawerOpen(false);
                setPreview(null);
                await loadUser();

                notification.success({
                    message: "Update user avatar",
                    description: "Cập nhật avatar thành công"
                })
            } else {
                notification.error({
                    message: "Error update avatar",
                    description: JSON.stringify(resUpdateAvatar.message)
                })

            }
        } else {
            notification.error({
                message: "Error upload file",
                description: JSON.stringify(resUpload.message)
            })

        }
        console.log(">>> check", resUpload);

    }

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
                        <div style={{
                            marginTop: "10px",
                            height: "100px",
                            width: "150px",
                            border: "1px solid #ccc"
                        }}>
                            <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetails.avatar}`} />
                        </div>
                        <p>Id: {dataDetails._id}</p>
                        <p>Full Name: {dataDetails.fullName} </p>
                        <p>Email: {dataDetails.email} </p>
                        <p>Phone: {dataDetails.phone} </p>
                        <div>
                            <label htmlFor="btnUpload" style={
                                {
                                    display: "block",
                                    width: "fit-content",
                                    marginTop: "15px",
                                    padding: "5px 10px",
                                    background: "blue",
                                    borderRadius: "5px",
                                    color: "white"
                                }
                            }>Upload Avatar</label>
                            <input type="file" hidden id="btnUpload"
                                onChange={(event) => handleOnChangeFile(event)} />
                        </div>

                        {preview &&
                            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                                <div style={{
                                    marginTop: "10px",
                                    marginBottom: "15px",
                                    height: "100px",
                                    width: "150px",
                                }}>
                                    <img style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                        src={preview} />
                                </div>
                                <Button
                                    onClick={() => { handleUpdateUserAvatar() }}
                                    style={{ width: "50px", padding: "5px 10px", background: "blue" }} type="primary">Save</Button>
                            </div>}

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