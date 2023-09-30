import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loggin } from '../features/details';

const Admin = () => {
  const isAuthenticated = useSelector(loggin);
  const navigate = useNavigate();

  // Check if the user is not authenticated and redirect them to the login page
  if (!isAuthenticated) {
    navigate('/login');
    return null; // Return null or loading indicator while redirecting
  }

  // If the user is authenticated, render the admin component
  return (
    <div>
      {/* Your admin component content here */}
    </div>
  );
};

export default Admin;
