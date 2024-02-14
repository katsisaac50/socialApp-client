import React from "react";
import { useState, useContext} from "react";
import UserRoute from "../../components/routes/UserRoute";
import moment from "moment";
import { Avatar, List } from "antd";
import {imageSource} from "../../functions/index";
import { UserContext } from "../../context";
import { useRouter } from "next/router";

interface Person {
  _id: string;
  photo: string;
  name: string;
  createdAt: string; // You may want to use Date or another appropriate type
}

interface PeopleProps {
  people: Person[];
  handleFollow: (user: Person) => Promise<void>;
}

const People: React.FC<PeopleProps> = ({ people, handleFollow, handleUnfollow }) => {
  const [loading, setLoading] = useState(false);
  const [state] = useContext(UserContext);
  const router = useRouter();

  return (
    <UserRoute>
      <div>
        <List
          loading={loading}
          itemLayout="horizontal"
          dataSource={people}
          renderItem={(person) => (
            <List.Item key={person._id}>
              <List.Item.Meta
                avatar={<Avatar src={imageSource(person)} />}
                title={
                <div className="d-flex justify-content-between align-items-center">
                    <a onClick={() => router.push(`/user/profile/${person._id}`)}>
                        {person.name}
                    </a>
                    {console.log("hello=>",state.user, "greatness=>", person)}
                    {state.user.following.includes(person._id)?(
                      <span className="text-primary pointer" onClick={() => handleUnfollow(person)}>
                          unfollow
                      </span>
                    ):(
                      <span className="text-primary pointer" onClick={() => handleFollow(person)}>
                          follow
                      </span>
                    )}
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
