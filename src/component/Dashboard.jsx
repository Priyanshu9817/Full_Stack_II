import { Link,Outlet } from 'react-router-dom';
function Dashboard() {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <Link to="Profile"> Profile</Link>
            <br/>
            <Link to="Setting"> Setting</Link>
             <Outlet />
        </div>
      
    );
}

export default Dashboard;