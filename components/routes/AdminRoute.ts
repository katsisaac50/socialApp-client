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
    if(state && state.token) getCurrentAdmin();
  }, [state, state.token]);

  // Fetch Admin data from server
  async function getCurrentAdmin() {
    try {
      const { data } = await axios.get(`/current-admin`);

      if (data.success) setOk(true);
    } catch (err) {
      console.log(err);
      setOk(false);
      router.push('/');
    }
  };

  typeof window !== 'undefined' && state === null && setTimeout(() => getCurrentAdmin(), 1000);
console.log("ok =>", ok)
  return !ok ? (
    <SyncOutlined spin className="d-flex justify-content-center display-1 text-primary p-5" />
  ) : (
    <>{children}</>
  );
}

export default AdminRoute;