import {useContext, useState} from "react";
import {UserContext} from "../context";
import axios from "axios";

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
            {result && result.map((person) => {
                return (
                    <div key={person._id} className="container">
                        <div className="row">
                            {/* <div className="col-2">
                                <img src={person.profilePicture} className="img-fluid rounded-circle" />
                            </div> */}
                            <div className="col-10">
                                <h1>{person.name}</h1>
                                <p>{person.email}</p>
                                <p>{person.userName}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Search