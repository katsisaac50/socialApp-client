import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { SyncOutlined } from '@ant-design/icons';
import { UserContext } from '../../context';

function AdminRoute({ children }) {
  const [ok, setOk] = useState(false);
  const [state] = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if(state && state.token) fetchUser();
  }, [state, state.token]);

  // Fetch user data from server
  async function fetchUser() {
    try {
      const { data } = await axios.get(`/current-user`);

      if (data.success) setOk(true);
    } catch (err) {
      console.log(err);
      setOk(false);
      router.push('/login');
    }
  };

  typeof window !== 'undefined' && state === null && setTimeout(() => fetchUser(), 1000);

  return !ok ? (
    <SyncOutlined spin className="d-flex justify-content-center display-1 text-primary p-5" />
  ) : (
    <>{children}</>
  );
}

export default AdminRoute;