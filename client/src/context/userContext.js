import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom'

const UserContext = createContext();

const DEFAULT_VALUES = {
    username: '',
    authenticated: false,
    id: ''
}


const privatePage = ['/profile'];

export function UserProvider({ children }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState({...DEFAULT_VALUES})
    const [checkStatus, setCheckStatus] = useState(false);
    const updateUser = (name, value) => {
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    
    const logoutUser = () => {
        setUser({
            ...DEFAULT_VALUES
        })
        localStorage.removeItem("token")
    }
    const createSession  = (session) => {
        localStorage.setItem('token', JSON.stringify(session))
        setUser({...session});
    }

    const checkUserLogin = () => {
        let data = localStorage.getItem("token");
        if(data) {
            return true;
        } else {
            return false;
        }
    }

    useEffect(() => {
        let data = localStorage.getItem("token");
        if(data) {
            data = JSON.parse(data);
            setUser({...data});
        } else {
            setUser({...DEFAULT_VALUES});
        }
        setCheckStatus(true);
    }, [])
 
    useEffect(() => {
        let redirectRoute = '';
        const isLogin = checkUserLogin();
        if(location.pathname === '/') {
            redirectRoute = isLogin ? '/profile' : '/login';
        } else {
            if(isLogin  && privatePage.indexOf(location.pathname) === -1) {
                redirectRoute = '/profile'
            } else if (!isLogin && privatePage.indexOf(location.pathname) !== -1) {
                redirectRoute = '/login'
            }
        }
        if(redirectRoute !== '') {
            navigate(redirectRoute);
        }
    }, [location])

    return (
        <UserContext.Provider value={{ user, updateUser, logoutUser, createSession }}>
            {checkStatus ? children : null}
        </UserContext.Provider>
    )
}

export default UserContext;
