import { Button, Input, Form, notification, Row, Col, Divider } from "antd";
import { registerUserAPI } from "../services/api.service";
import { useNavigate, Link } from "react-router-dom";


const RegisterPage = () => {

    const [form] = Form.useForm()
    const navigate = useNavigate()
    const onFinish = async (values) => {
        console.log(">>> check values: ", values);
        const res = await registerUserAPI(
            values.fullname,
            values.password,
            values.email,
            values.phone);
        if (res.data) {
            notification.success({
                message: "Register user",
                description: "Đăng ký thành công"
            })
            navigate("/users")
        }
        else {
            notification.error({
                message: "Error Register user",
                description: JSON.stringify(res.message)
            })
        }

    }
    return (
        <>

            <Form
                form={form}
                name="basic"
                layout="vertical"
                style={{ margin: "10px" }}

                onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >
                <h3 style={{ textAlign: "center" }}>REGISTER USER</h3>
                <Row justify={"center"}>
                    <Col xs={24} md={6}>
                        <Form.Item
                            label="Full Name"
                            name="fullname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Full Name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                </Row>

                <Row justify={"center"}>
                    <Col xs={24} md={6}>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                                {
                                    // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    // message: 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character!',

                                }
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Col>

                </Row>

                <Row justify={"center"}>
                    <Col xs={24} md={6}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email!',
                                },
                                {
                                    type: "email",
                                    message: 'Please enter a valid Email!',

                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                </Row>

                <Row justify={"center"}>
                    <Col xs={24} md={6}>
                        <Form.Item
                            label="Phone Number"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Phone Number!',
                                },
                                {
                                    pattern: new RegExp(/\d+/g),
                                    message: "Wrong phone format"
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                </Row>

                <Row justify={"center"}>
                    <Col xs={24} md={6}>
                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                            <Divider/>
                            <div>Đã có tài khoản? <Link to={"/login"}>Đăng nhập tại đây</Link> </div>
                        </Form.Item>
                    </Col>

                </Row>


            </Form>
        </>
    )
}
export default RegisterPage;