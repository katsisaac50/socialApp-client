import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { SyncOutlined } from '@ant-design/icons';

function UserRoute({ children }) {
  const [ok, setOk] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/current-user`
      );
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