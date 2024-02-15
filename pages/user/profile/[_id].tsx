import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface User {
  _id: string;
  name: string;
  email: string;
  user: any;
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
          const {data}= await axios.get<User>(`/api/users/${_id}`); // Assuming the backend API endpoint for fetching user details
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

  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <p>Email: {user.email}</p>
      {/* Add more user details as needed */}
      <Image
      src={user.photo.data}
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </div>
  );
};

export default Profile;