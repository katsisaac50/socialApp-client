import React from "react";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import moment from "moment";
import { Avatar, List } from "antd";
import axios from "axios";
import { toast } from "react-toastify";


interface Person {
  id: string;
  photo: string;
  name: string;
  createdAt: string; // You may want to use Date or another appropriate type
}

interface PeopleProps {
  people: Person[];
  handleFollow: (person: Person) => void;
  handleUnfollow: (person: Person) => void;
}

const Following: React.FC<PeopleProps> = ({ handleFollow}) => {
  const router = useRouter();
  const [state, setState] = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (state && state.token) fetchFollowing();
  }, [state && state.token]);

  const fetchFollowing = async () => {
    try {

      setLoading(true);
      const {data} = await axios.get(`/user-following`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`
        }
      });
      console.log(data);
      setPeople(data.followingUsers);
      setLoading(false);
      
    } catch (error) {
      console.log(error);
    }
  };

  const imageSource = (person: Person) => {
    if (person.photo) {
      return person.photo.data;
    } else {
      return "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";
    }
  };

  const handleUnfollow = async (person: Person) => {
  try {
  setLoading(true);

  const {data} = await axios.put(`/unfollow-user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${state.token}`
    },
    data: { personId: person._id }
  });

  let auth = JSON.parse(localStorage.getItem("auth") || "");
  auth.user = data;
  localStorage.setItem("auth", JSON.stringify(auth));
  setState({...state, user: data });
  let filtered = people.filter((p) => p._id!== person._id);
  console.log(data);
  setPeople(filtered);
  
  setLoading(false);
  //  fetchFollowing();
   toast.success(data.message, { theme: "colored" });
  // console.log(data);
} catch (error) {
  console.log(error);
  }
  };

  return (
    <UserRoute>
      <div>
        <h1>People You Are Following</h1>
        <List
          loading={loading}
          itemLayout="horizontal"
          dataSource={people}
          renderItem={(person) => (
            <List.Item key={person.id}>
              <List.Item.Meta
                avatar={<Avatar src={imageSource(person)} />}
                title={
                  <div className="d-flex justify-content-between align-items-center">
                    <a href="#">
                      {person.name}
                    </a>
                    <span className="text-primary pointer" onClick={() => handleUnfollow(person)}>
                      unfollow
                    </span>
                  </div>
                }
                description={moment(person.createdAt).fromNow()}
              />
            </List.Item>
          )}
        />
      </div>
    </UserRoute>
  );
};

export default Following;