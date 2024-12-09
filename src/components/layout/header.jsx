import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import { useState } from 'react';
import { UsergroupAddOutlined, HomeOutlined, ProductOutlined } from '@ant-design/icons';
const Header = () => {
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const items = [
        {
            label: <Link to ={"/"}>Home</Link> ,
            key: 'home',
            
            icon: <HomeOutlined />,
        },
        {
            label:<Link to ={"/users"}>Users</Link> ,
            key: 'users',
            icon: <UsergroupAddOutlined />,
        },
        {
            label:<Link to ={"/products"}>Products</Link> ,
            key: 'products',
            icon: <ProductOutlined />,   
        }
    ];
    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal" items={items} />
    )
}

export default Header