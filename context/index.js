import { useState, createContext, useEffect} from 'react';
import axios from 'axios';
import {useRouter} from 'next/router';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [state, setState] = useState({
        existingUser: {},
        token: '',
    });

    const router = useRouter();

    useEffect(() => {
        setState(prevState => ({ ...prevState, ...JSON.parse(window.localStorage.getItem('auth')) }));

        // Cleanup interceptors
    return () => {
        // Remove the interceptor when the component is unmounted
        axios.interceptors.response.eject(myInterceptor);

    };
    
    }, []);

    const token = state && state.token ? state.token : '';

    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

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
            router.push('/login');
        }

        // Handle errors here
        console.error('Axios error:', error);

        // Throw the error again to propagate it
        return Promise.reject(error);
    });

    return (
        <UserContext.Provider value={[ state, setState ]}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };