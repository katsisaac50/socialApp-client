
import {useContext} from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";


const Dashboard = () => {

    const [state, setState] = useContext(UserContext);
    const router = useRouter();
console.log(state);
    if (state === null) {
        router.push('/login');
        return null;
      }
    const { existingUser, token } = state;
    
    return (
        <UserRoute> 
        <div>
            <h1>Dashboard</h1>
            <h2>Hello {existingUser && existingUser.name}</h2>
            <h3>Your token is {token}</h3>
        </div>
        </UserRoute>
    );
};

export default Dashboard;
