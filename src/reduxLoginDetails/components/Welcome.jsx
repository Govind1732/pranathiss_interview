import React from 'react';
import { useSelector, connect } from 'react-redux';
import { logout } from '../actions';
import LoginForm from './LoginForm';

const Welcome = ({ logout }) => {
    const { username, isLoggedIn } = useSelector((state) => state);

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <p>Welcome, {username}!</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <LoginForm />
            )}
        </div>
    );
};

const mapDispatchToProps = {
    logout,
};

export default connect(null, mapDispatchToProps)(Welcome);
