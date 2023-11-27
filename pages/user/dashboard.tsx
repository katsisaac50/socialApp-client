
import {useContext} from "react";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";


const Dashboard = () => {

    const [state, setState] = useContext(UserContext);
    const { existingUser, token } = state;
    console.log(state);
    return (
        <UserRoute> 
        <div>
            <h1>Dashboard</h1>
            <h2>Hello {existingUser && existingUser.username}</h2>
            <h3>Your token is {token}</h3>
        </div>
        </UserRoute>
    );
};

export default Dashboard;
