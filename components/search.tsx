import React, { useContext, useState, FormEvent, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../context";
import People from "../components/cards/People";

interface Person {
  _id: string;
  name: string;
  email: string;
  people: string[];
  message: string;
  photo: string;
  createdAt: string;
  followers: string[];
  // Add more properties as needed
}

const Search: React.FC = () => {
  const [state, setState] = useContext(UserContext);
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<Person[]>([]);

  useEffect(() => {
    if (state.token && query.trim() !== "") {
      searchUser();
    }
  }, [query, state.token]);

  const searchUser = async () => {
    try {
      const { data }: AxiosResponse<{ users: Person[] }> = await axios.get("/user/search", {
        params: {
          query: query
        },
        headers: {
          Authorization: `Bearer ${state.token}`
        }
      });
      setResult(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFollow = async (person: Person) => {
    try {
      const { data }: AxiosResponse<Person> = await axios.put("/follow-user", { _id: person._id }, {
        headers: {
          Authorization: `Bearer ${state.token}`
        }
      });

      setState((prevState) => ({
        ...prevState,
        people: data.people
      }));

      const filtered = result.filter((p) => p._id !== person._id);
      setResult(filtered);

      toast.success(data.message, { theme: "colored" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnfollow = async (person: Person) => {
    try {
      await axios.put(
        "/unfollow-user",
        { personId: person._id },
        {
          headers: {
            Authorization: `Bearer ${state.token}`
          }
        }
      );
  
      setState((prevState) => ({
        ...prevState,
        people: prevState.people.filter((p) => p._id !== person._id)
      }));
  
      const filtered = result.filter((p) => p._id !== person._id);
      setResult(filtered);
  
      toast.error(`Unfollowed ${person.name}`, { theme: "colored" });
    } catch (error) {
      console.log(error);
    }
  };
  
  

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); searchUser(); }} className="form-inline row">
        <input
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="form-control"
          value={query}
          type="search"
        />
        <button type="submit" className="btn btn-outline-primary col-12">
          Search
        </button>
      </form>
      {result && <People handleUnfollow={handleUnfollow} handleFollow={handleFollow} people={result} followers={[]}/>
}
    </div>
  );
};

export default Search;
