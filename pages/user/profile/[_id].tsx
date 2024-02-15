import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: string;
  username: string;
  email: string;
  // Add more properties as needed
}

const Profile = () => {
  const router = useRouter();
  const { _id } = router.query;

  const [user, setUser] = useState<User | null>(null);
  console.log(router.query);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (_id) {
        try {
            console.log('showing user details for id:', _id);
        //   const response = await axios.get<User>(`/api/users/${id}`); // Assuming the backend API endpoint for fetching user details
        //   setUser(response.data);
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
      <h2>{user.username}'s Profile</h2>
      <p>Email: {user.email}</p>
      {/* Add more user details as needed */}
    </div>
  );
};

export default Profile;