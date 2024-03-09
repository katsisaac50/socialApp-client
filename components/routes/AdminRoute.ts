import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { UserContext } from '../../context';
import { SyncOutlined as SyncOutlinedType } from '@ant-design/icons';

function AdminRoute({ children }) {
  const [ok, setOk] = useState(false);
  const [state] = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (state && state.token) getCurrentAdmin();
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
  }

  typeof window !== 'undefined' && state === null && setTimeout(() => getCurrentAdmin(), 1000);

  return !ok ? (
    <SyncOutlinedType spin className="d-flex justify-content-center display-1 text-primary p-5" />
  ) : (
    <>{children}</>
  );
}

export default AdminRoute;
