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
            <form onSubmit={searchUser} >
                <input
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="form-control mr-sm-2 col"
                value={query}
                type="search"
                />
                <button type="submit" className="btn btn-outline-primary my-2 my-sm-0 mr-2" >Search</button>
            </form>
        </div>
    )
}

export default Search