import { Avatar, Button, Card, Drawer } from "antd"
import Meta from "antd/es/card/Meta"
import { useState } from "react"

const ViewDeitailProd = (props) => {
    const { isDetailDrawerOpen, setIsDetailDrawerOpen, dataDetails, setDataDetails, loadProd } = props
    const [preview, setPreview] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null)

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

    const handleUpdateThumnail = async () => {
        // 1. upload file
        const resUpload = await handleUploadFile(selectedFile, "book")
        if (resUpload.data) {
            const thumbnail = resUpload.data.fileUploaded;
            console.log(">>> check thumbnail", thumbnail)

            const res = await CreateProductAPI(thumbnail, ["def"], mainText, author, price, 0, quantity, category)
            if (res.data) {
                setIsModalOpen(false);
                setPreview(null);
                await loadProd();

                notification.success({
                    message: "Create book",
                    description: "Thêm mới sách thành công"
                })
            } else {
                notification.error({
                    message: "Error Create book",
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
        <Drawer title="Chi tiết"

            width={640}
            onClose={() => {
                setDataDetails(null)
                setIsDetailDrawerOpen(false)
            }}
            open={isDetailDrawerOpen}>
            {
                dataDetails ?
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                    }}>
                        <Card
                            style={{
                                width: "60%",
                                width: "60%",
                                border: "1px solid #FFFFFF",
                                borderRadius: "8px",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                            }}

                            cover={
                                <img
                                    alt="thumbnail"
                                    src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${dataDetails.thumbnail}`}
                                    
                                />
                            }
                            actions={[
                                <p style={{ color: "black" }}>{new Intl.NumberFormat('vi-VN').format(dataDetails.price)} VND</p>,
                                
                                <p style={{ color: "black" }}>Số lượng: {dataDetails.quantity} </p>,


                            ]}

                        >

                            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                                <Meta
                                    title={
                                        <span
                                            style={{
                                                whiteSpace: "normal", 
                                                wordWrap: "break-word", 
                                                display: "block", 
                                            }}
                                        >
                                            {dataDetails.mainText}
                                        </span>
                                    }
                                />
                                <p>Tác giả: {dataDetails.author} </p>
                                <p>Thể loại: {dataDetails.category} </p>
                                <p>Đã bán: {dataDetails.sold}</p>
                            </div>

                        </Card>
                    </div>
                    // <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                    //     <div style={{
                    //         marginTop: "10px",
                    //         height: "100px",
                    //         width: "150px",
                    //         border: "1px solid #ccc"
                    //     }}>
                    //         <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${dataDetails.thumbnail}`} />
                    //     </div>

                    //     <p>Id: {dataDetails._id}</p>
                    //     <p>Tiêu đề: {dataDetails.mainText} </p>
                    //     <p>Tác giả: {dataDetails.author} </p>
                    //     <p>Gía tiền: {dataDetails.price} </p>
                    //     <p>Số lượng: {dataDetails.quantity} </p>
                    //     <p>Thể loại: {dataDetails.category} </p>
                    //     <div>
                    //         <label htmlFor="btnUpload" style={
                    //             {
                    //                 display: "block",
                    //                 width: "fit-content",
                    //                 marginTop: "15px",
                    //                 padding: "5px 10px",
                    //                 background: "blue",
                    //                 borderRadius: "5px",
                    //                 color: "white"
                    //             }
                    //         }>Upload Avatar</label>
                    //         <input type="file" hidden id="btnUpload"
                    //             onChange={(event) => handleOnChangeFile(event)} />
                    //     </div>

                    //     {preview &&
                    //         <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                    //             <div style={{
                    //                 marginTop: "10px",
                    //                 marginBottom: "15px",
                    //                 height: "100px",
                    //                 width: "150px",
                    //             }}>
                    //                 <img style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    //                     src={preview} />
                    //             </div>
                    //             <Button
                    //                 onClick={() => { handleUpdateUserAvatar() }}
                    //                 style={{ width: "50px", padding: "5px 10px", background: "blue" }} type="primary">Save</Button>
                    //         </div>}

                    // </div>
                    :
                    <>
                        <p>Không có dữ liệu</p>
                    </>
            }
        </Drawer >
    )
}
export default ViewDeitailProd