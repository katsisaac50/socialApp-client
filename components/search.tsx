import {useContext, useState} from "react";
import {UserContext} from "../context";
import axios from "axios";
import People from "../components/cards/People"

const Search = () => {
    const [state, setState] = useContext(UserContext);
    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);


    const searchUser = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.get("/user/search", {
                params: {
                    query: query
                }
            });
            console.log(data);
            setResult(data.users);
            // setState({
            //    ...state,
            //     people: data.people
            // });
        } catch (error) {
            console.log(error);
        }
    };

    const handleFollow = async (person) => {
        try {
            const { data } = await axios.post(
                "/user/follow",
                {
                    username: person.username
                },
                {
                    headers: {
                        Authorization: `Bearer ${state.token}`
                    }
                }
            );
            console.log(data);
            setState({
               ...state,
                people: data.people
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleUnfollow = async (person) => {
        try {
            const { data } = await axios.post(
                "/user/unfollow",
                {
                    username: person.username
                },
                {
                    headers: {
                        Authorization: `Bearer ${state.token}`
                    }
                }
            );
            console.log(data);
            setState({
               ...state,
                people: data.people
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <form onSubmit={searchUser} className="form-inline row">
                <input
                onChange={(e) => {
                    setQuery(e.target.value);
                    setResult([]);
                }}
                placeholder="Search"
                className="form-control"
                value={query}
                type="search"
                />
                <button type="submit" className="btn btn-outline-primary col-12" >
                    Search
                </button>
            </form>
            {result && <People handleUnfollow = {handleUnfollow} handleFollow={handleFollow} people={result} />}
        </div>
    )
}

export default Search