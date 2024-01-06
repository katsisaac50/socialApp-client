import React from "react";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import moment from "moment";
import { Avatar } from "antd";

interface Person {
  id: string;
  avatar: string;
  name: string;
  createdAt: string; // You may want to use Date or another appropriate type
}

interface PeopleProps {
  people: Person[];
}

const People: React.FC<PeopleProps> = ({ people }) => {
  const router = useRouter();
  const [state, setState] = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  return (
    <UserRoute>
      <div>
        <h1>People</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {people.map((person) => (
              <li key={person.id}>
                <Avatar size={50} src={person.avatar} />
                <p>{person.name}</p>
                <p>{moment(person.createdAt).fromNow()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </UserRoute>
  );
};

export default People;
