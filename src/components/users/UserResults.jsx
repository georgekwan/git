import { useEffect } from 'react';

function UserResults() {
  useEffect(() => {}, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`);
  };
  return <div>UserResults</div>;
}

export default UserResults;
