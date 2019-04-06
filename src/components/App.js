import { React } from "react";
import UserList from '../container/UserList';
import UserDetails from '../container/UserDetails';

const App = () => (
    <div>
        <h1>User List</h1>
        <UserList />
        <hr />
        <h1>User Details</h1>
        <UserDetails />
    </div>
)

export default App;