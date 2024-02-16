// Profile.tsx

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface User {
  _id: string;
  name: string;
  email: string;
  user: any;
  photo: any;
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

  const image = () => {
    if(!user.photo || !user.photo.data){
      return "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    } else {
      return user.photo.data
    }
  }

  return (
    <div className="container">
      <h2 className="mt-3">{user.name}'s Profile</h2>
      <div className="card mt-3">
        <div className="card-body">
          <p className="card-text">Email: {user.email}</p>
        </div>
      </div>
      {/* Add more user details as needed */}
      <div className="mt-3">
        <Image
          src={image()}
          width={500}
          height={500}
          alt="Picture of the author"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default Profile;
