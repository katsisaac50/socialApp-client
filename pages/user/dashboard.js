import {useContext} from "react";
import { UserContext } from "../../context";

const Dashboard = () => {

    const [state, setState] = useContext(UserContext);
    const { existingUser, token } = state;
    console.log(existingUser.username);
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Hello {existingUser.username}</h2>
            <h3>Your token is {token}</h3>
        </div>
    );
};

export default Dashboard;
