import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, message } from 'antd'
import { Children, useContext, useState } from 'react';
import { UsergroupAddOutlined, HomeOutlined, ProductOutlined, SettingOutlined, LoginOutlined, AliwangwangOutlined } from '@ant-design/icons';
import { AuthContext } from '../context/auth.comtext';
import { logoutAPI } from '../../services/api.service';
const Header = () => {
    const [current, setCurrent] = useState('');

    const navigate = useNavigate()

    const { user, setUser } = useContext(AuthContext)
    console.log(">>> check dataUser", user);

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const handleLogout = async () => {
        const res = await logoutAPI();
        if (res.data) {
            localStorage.removeItem("access_token");
            setUser({
                email: "",
                phone: "",
                fullName: "",
                role: "",
                avatar: "",
                id: ""
            })
            message.success("Đăng xuất thành công")
            navigate("/")

        }
    }
    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',

            icon: <HomeOutlined />,
        },
        ...(user.role == "ADMIN" ? [{
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined />,
        }] : []),

        {
            label: <Link to={"/products"}>Products</Link>,
            key: 'products',
            icon: <ProductOutlined />,
        },

        ...(!user.id ? [{
            label: <Link to={"/login"}>Đăng nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />,
        }] : []),
        ...(user.id ? [{
            label: `Wellcome ${user.fullName}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: <span onClick={() => handleLogout()}>Đăng xuất</span>,
                    key: "logout"
                }
            ]
        }] : []),

    ];
    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal" items={items} />
    )
}

export default Header