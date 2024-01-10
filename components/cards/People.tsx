import React from "react";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import moment from "moment";
import { Avatar, List } from "antd";

interface Person {
  id: string;
  photo: string;
  name: string;
  createdAt: string; // You may want to use Date or another appropriate type
}

interface PeopleProps {
  people: Person[];
}

const People: React.FC<PeopleProps> = ({ people, handlefollow }) => {
  const router = useRouter();
  const [state, setState] = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const imageSource = (person: Person) => {
    if (person.photo) {
      return person.photo.data;
    } else {
      return "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";
    }
  };

  return (
    <UserRoute>
      <div>
        <h1>People</h1>
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
                    <span className="text-primary pointer" onClick={() => handlefollow(person)}>
                        follow
                    </span>
                </div>}
                description={moment(person.createdAt).fromNow()}
              />
            </List.Item>
          )}
        />
      </div>
    </UserRoute>
  );
};

export default People;
