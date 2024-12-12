import { ArrowRightOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row, Col, Divider, notification, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { loginUserAPI } from '../services/api.service';
import { useContext, useState } from 'react';
import { AuthContext } from '../components/context/auth.comtext';

const LoginPage = () => {
    const [form] = Form.useForm()
    const [isLogin, setIsLogin] = useState(false)
    const navigate = useNavigate();
    const {setUser} = useContext(AuthContext)


    const onFinish = async (values) => {
        setIsLogin(true)
        console.log(">> check data: ", values);
        const res = await loginUserAPI(values.email, values.password)
        if (res.data) {
            message.success("Đăng nhập thành công")
            localStorage.setItem("access_token", res.data.access_token)
            setUser(res.data.user)
            navigate("/")
        } else {
            notification.error({
                message: "Error login",
                description: JSON.stringify(res.message)
            })
        }
        setIsLogin(false)
    }
    return (
        <Row justify={"center"}  >
            <Col xs={24} md={6}>
                <fieldset style={{
                    padding: "15px",
                    margin: "5px",
                    border: "1 solid black",
                    borderRadius: "5px"
                }}>
                    <legend>Đăng nhập</legend>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                                {
                                    type: "email",
                                    message: 'Please enter a valid Email!',
                                }
                            ]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input.Password onKeyDown={(event) => {
                                if(event.key === "Enter"){
                                    form.submit()
                                }
                                
                            }} prefix={<LockOutlined />} placeholder="Password" />
                        </Form.Item>


                        <Form.Item>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <Button loading={isLogin} type="primary" htmlType="submit">
                                    Log in
                                </Button>
                                <Link to={"/"}> Go to home page <ArrowRightOutlined /> </Link>
                            </div>

                        </Form.Item>

                    </Form>
                    <Divider />
                    <div style={{ textAlign: "center" }}>Chưa có tài khoản? <Link to={"/register"}>Đăng ký tại đây</Link> </div>
                </fieldset>
            </Col>
        </Row>
    )
}
export default LoginPage;