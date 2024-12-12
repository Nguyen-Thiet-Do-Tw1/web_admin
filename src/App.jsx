
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'
import { getAccountAPI } from './services/api.service'
import { useContext, useEffect } from 'react'
import { AuthContext } from './components/context/auth.comtext'
import { Spin } from 'antd'


const App = () => {
  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext)


  useEffect(() => {
    fetchUserInfo();
  }, [])

  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    if (res.data) {
      // succsess
      setUser(res.data.user)
      console.log(">>> check user data", res.data);

    }
    setIsAppLoading(false)
  }
  return (
    <>
      {isAppLoading === true ?
        <Spin />
        :
        <>
          < Header />
          <Outlet />
          <Footer />
        </>

      }

    </>
  )
}

export default App
