import {useContext, useState} from "react";
import {UserContext} from "../context";
import axios from "axios";

const Search = () => {
    const [state, setState] = useContext(UserContext);
    const [query, setQuery] = useState("");
    const searchUser = async () => {
        try {
            const {data} = await axios.get("/user/search", {
                params: {
                    query: query
                }
            });
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
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="form-control"
                value={query}
                type="search"
                />
                <button type="submit" className="btn btn-outline-primary col-12" >
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search