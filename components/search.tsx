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
            setResult(data.users);
        } catch (error) {
            console.log(error);
        }
    };

    const handleFollow = async (person) => {
        console.log(person);
        try {
            const { data } = await axios.put(
                "/follow-user",
                {
                    _id: person._id
                },
                {
                    headers: {
                        Authorization: `Bearer ${state.token}`
                    }
                }
            );
            // console.log(data);
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
            const { data } = await axios.put(
                "/unfollow-user",
                {
                    headers: {
                        Authorization: `Bearer ${state.token}`
                    },
                    data: { 
                        personId: person._id 
                    }
                }
            );
            // console.log(data);
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
                    Searchable
                </button>
            </form>
            {result && <People handleUnfollow = {handleUnfollow} handleFollow={handleFollow} people={result} />}
        </div>
    )
}

export default Search