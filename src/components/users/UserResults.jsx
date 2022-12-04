import { useEffect } from 'react';

function UserResults() {
  useEffect(() => {}, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: { Authorization: `token $process.env.REACT_APP_GITHUB_TOKEN` },
    });
  };
  return <div>UserResults</div>;
}

export default UserResults;
