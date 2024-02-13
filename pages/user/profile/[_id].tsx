import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;

  const [friend, setFriend] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch friend details from the backend when the component mounts
      const fetchFriendDetails = async () => {
        try {
          const response = await axios.get(`/api/friends/${id}`); // Assuming the backend API endpoint for fetching friend details

          setFriend(response.data);
        } catch (error) {
          console.error('Error fetching friend details:', error);
        }
      };

      fetchFriendDetails();
    }
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