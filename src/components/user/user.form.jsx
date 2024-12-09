import { Button, Input, notification } from "antd"
import { useState } from "react"
import { CreateUserAPI } from "../../services/api.service"


const UserForm = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")


    const handleClickBtn = async () => {  
       const res= await CreateUserAPI(fullName,password,email,phone)
       if(res.data ){
        notification.success({
            message: "Create user",
            description: " tạo mới user thành công"
           })
       } else {
        notification.error({
            message: "Error create user",
            description: JSON.stringify(res.message)
        })
       }
       
        console.log(">> check res", res.data);
        
       
    }
    return (
        <div className="User-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }} />
                </div>
                <div>
                    <span>Phone Number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }} />
                </div>
                <div>
                    <Button type="primary"
                        onClick={() => handleClickBtn()}>Create User</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm