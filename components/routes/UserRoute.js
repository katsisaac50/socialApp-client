import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { SyncOutlined } from '@ant-design/icons';
import { UserContext } from '../../context';

function UserRoute({ children }) {
  const [ok, setOk] = useState(false);
  const [state] = useContext(UserContext);
  const router = useRouter();
  console.log(state.token);

  useEffect(() => {
    fetchUser();
  }, [state, state.token]);

  async function fetchUser() {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/current-user`, {
            headers: {
                Authorization: `Bearer ${state.token}`,
            },
        });
      if (data.ok) setOk(true);
    } catch (err) {
      console.log(err);
      setOk(false);
      router.push('/login');
    }
  }

  return !ok ? (
    <SyncOutlined spin className="d-flex justify-content-center display-1 text-primary p-5" />
  ) : (
    <>{children}</>
  );
}

export default UserRoute;