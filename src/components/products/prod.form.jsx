import { Button, Flex, Input, InputNumber, Modal, Select } from "antd"
import { useState } from "react"
import { CreateProductAPI, handleUploadFile } from "../../services/api.service"


const ProdFrom = (props) => {
    const { loadProd } = props
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [mainText, setmainText] = useState("")
    const [author, setauthor] = useState("")
    const [quantity, setquantity] = useState("")
    const [category, setcategory] = useState("")
    const [price, setprice] = useState("")
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
    const handleClickCreateBook = async () => {
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


    const resetAndCloseModal = () => {
        setIsModalOpen(false);
        setmainText("");
        setauthor("");
        setcategory("");
        setquantity("");
        setprice("");
        setSelectedFile(null)
        setPreview(null)
    }
    return (
        <div style={{ margin: "10px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Products Table</h3>
                <Button type="primary" onClick={() => setIsModalOpen(true)}>Create</Button>
            </div>
            <Modal
                title="Create Books"
                open={isModalOpen}
                onCancel={() => resetAndCloseModal()}
                maskClosable={false}
                onOk={() => handleClickCreateBook()}
                okText="Create"
            >
                <div>
                    <span>Tiêu đề</span>
                    <Input
                        value={mainText}
                        onChange={(event) => { setmainText(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Tác giả</span>
                    <Input
                        value={author}
                        onChange={(event) => { setauthor(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Giá tiền</span>
                    <InputNumber
                        addonAfter={"VND"}
                        min="0"
                        step="1"
                        value={price}
                        onChange={(event) => {
                            setprice(event)
                        }}

                    />
                </div>
                <div>
                    <span>Số lượng</span> <br></br>
                    <InputNumber
                        style={{
                            width: "100%"
                        }}
                        min="1"
                        value={quantity}
                        onChange={(event) => { setquantity(event) }}
                    />
                </div>
                <div>
                    <span>Thể loại</span> <br></br>
                    <Select
                        value={category}
                        onChange={(value) => { setcategory(value) }}
                        style={{
                            width: "100%",
                        }}
                        options={[
                            { value: 'Arts', label: 'Arts' },
                            { value: 'Business', label: 'Business' },
                            { value: 'Comics', label: 'Comics' },
                            { value: 'Cooking', label: 'Cooking' },
                            { value: 'Entertainment', label: 'Entertainment' },
                            { value: 'History', label: 'History' },
                            { value: 'Music', label: 'Music' },
                            { value: 'Sports', label: 'Sports' },
                            { value: 'Teen', label: 'Teen' },
                            { value: 'Travel', label: 'Travel' },
                        ]}
                    />
                </div>
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
                    }>Upload Thumbnail</label>
                    <input type="file" hidden id="btnUpload"
                        onClick={(event) => {
                            event.target.value = null
                        }}
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

                    </div>}

            </Modal>
        </div>
    )

}

export default ProdFrom