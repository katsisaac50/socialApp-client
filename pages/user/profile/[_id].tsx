// Profile.tsx

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { RollbackOutlined } from '@ant-design/icons';
// import { Avatar, Card } from 'antd';
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const { Meta } = Card;
interface User {
  _id: string;
  name: string;
  email: string;
  user: any;
  photo: any;
  about: string;
  createdAt: string;
  following: Array<string>;
  followers: Array<string>;
  // Add more properties as needed
}

const Profile = () => {
  const router = useRouter();
  const { _id } = router.query;

  const [user, setUser] = useState<User | null>(null);

  console.log('user', user)
  useEffect(() => {
    const fetchUserDetails = async () => {
      if (_id) {
        try {
          console.log('showing user details for id:', _id);
          const { data } = await axios.get<User>(`/api/users/${_id}`); // Assuming the backend API endpoint for fetching user details
          setUser(data.user);
        } catch (error) {

          console.error('Error fetching user details:', error);

        }
      }
    };

    fetchUserDetails();
  }, [_id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const imageSource = ({photo}) => {
    if(!photo || !photo.data){
      return "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    } else {
      return user.photo.data
    }
  }

  return (
    <div className="row col-md-6 offset-md-4 mt-5">
      <div className="pt-5 pb-5">
        
      <Col>
      <Card hoverable style={{ width: 500 }} cover={<Image src={imageSource(user)} width={500} height={500} alt="Picture of the author" className="img-fluid" />}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* <Meta
          avatar={<Avatar src={imageSource(user)} />}
          title={user.name}
          description={user.about}
        />
        <p className="text-muted pt-2">
          Joined {moment(user.createdAt).fromNow()}
        </p>
        <div className="d-flex justify-content-center">
          <span className='btn btn-sm'>
            {user.followers && user.followers.length} Followers
          </span>
        </div>
        <div className="d-flex justify-content-center">
          <span className='btn btn-sm'>
            {user.following && user.following.length} Followering
          </span>
        </div> */}
      <Link href="/user/dashboard" className='d-flex justify-content-center pt-3'>
        <RollbackOutlined />
      </Link>
      </div>
    </div>
  );
};

export default Profile;
