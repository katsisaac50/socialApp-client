// Profile.tsx

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { RollbackOutlined } from '@ant-design/icons';
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

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
  userName: string;
  // Add more properties as needed
}

const cardStyle = {
  width: '500px',
  transition: 'transform 0.2s, box-shadow 0.2s', // Include box-shadow in transition
  boxShadow: 'none', // Initially no shadow
};

const hoverStyle = {
  transform: 'scale(1.05)',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', // Add shadow effect on hover
};

const Profile = () => {
  const router = useRouter();
  const { _id } = router.query;
  const [isHovered, setIsHovered] = useState(false);

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
      console.log('photo1', photo)
      return "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    } else {
      console.log('photo', photo.data)
      return user.photo.data
    }
  }

  return (
    <div className="row col-md-6 offset-md-4 mt-5">
      <div className="pt-5 pb-5">
        
      <Col>
      <Card
      style={{ ...cardStyle, ...(isHovered ? hoverStyle : null) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
            <Card.Img src={imageSource(user)} alt="Picture of the author" className="img-fluid" />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                {user.about}
              </Card.Text>
              <Card.Text>
                {user.email}
              </Card.Text>
              <Card.Text>
                {user.userName}
              </Card.Text>
              <Card.Text>
                {user.following && user.following.length} Following
              </Card.Text>
              <Card.Text>
                {user.followers && user.followers.length} Followers
              </Card.Text>
              <Card.Text>
                Created {user.createdAt && moment(user.createdAt).fromNow()}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      <Link href="/user/dashboard" className='d-flex justify-content-center pt-3'>
        <RollbackOutlined />
      </Link>
      </div>
    </div>
  );
};

export default Profile;
