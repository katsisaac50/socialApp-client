import { useContext, useState, FormEvent } from "react";
import { UserContext } from "../context";
import axios, { AxiosResponse } from "axios";
import People from "../components/cards/People";
import { toast } from "react-toastify";

interface Person {
  _id: string;
  name: string;
  email: string;
  // Add more properties as needed
}

const Search = () => {
  const [state, setState] = useContext(UserContext);
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<Person[]>([]); // Update to Person[]

  const searchUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data }: AxiosResponse<{ users: Person[] }> = await axios.get("/user/search", {
        params: {
          query: query
        }
      });
      setResult(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFollow = async (person: Person) => { // Update parameter to Person
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

  const handleUnfollow = async (person: Person) => { // Update parameter to Person
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
        <button type="submit" className="btn btn-outline-primary col-12">
          Search
        </button>
      </form>
      {result && <People handleUnfollow={handleUnfollow} handleFollow={handleFollow} people={result} />}
    </div>
  );
};

export default Search;
