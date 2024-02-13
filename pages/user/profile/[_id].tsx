import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Friend {
  id: string;
  name: string;
  email: string;
  location: string;
  // Add more properties as needed
}

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;

  const [friend, setFriend] = useState<Friend | null>(null);

  useEffect(() => {
    const fetchFriendDetails = async () => {
      if (id) {
        try {
          const response = await axios.get<Friend>(`/api/friends/${id}`); // Assuming the backend API endpoint for fetching friend details
          setFriend(response.data);
        } catch (error) {
          console.error('Error fetching friend details:', error);
        }
      }
    };

    fetchFriendDetails();
  }, [id]);

  if (!friend) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{friend.name}'s Profile</h2>
      <p>Email: {friend.email}</p>
      <p>Location: {friend.location}</p>
      {/* Add more friend details as needed */}
    </div>
  );
};

export default Profile;