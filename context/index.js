import { useState, createContext, useEffect} from 'react';
import axios from 'axios';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [state, setState] = useState({
        user: {},
        token: '',
    });

    useEffect(() => {
        setState(JSON.parse(window.localStorage.getItem('auth')));
    }, []);

    axios.interceptors.response.use((response) => {

        // if (response.status === 401) {
        //     setState({ ...state, user: null, token: '' });
        //     window.localStorage.removeItem('auth');
        // }

        return response;
        
    }, (error) => {
        let res = error.response;
        if(res.status === 401 && res.config && !res.config.__isRetryRequest){
            setState(null);
            window.localStorage.removeItem('auth');
            Router.push('/login');
        }
    });

    return (
        <UserContext.Provider value={[ state, setState ]}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };