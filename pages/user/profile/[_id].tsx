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
  const { id } = router.query;

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (id) {
        try {
            console.log('showing user details for id:', id);
        //   const response = await axios.get<User>(`/api/users/${id}`); // Assuming the backend API endpoint for fetching user details
        //   setUser(response.data);
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      }
    };

    fetchUserDetails();
  }, [id]);

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