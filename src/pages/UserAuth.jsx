import React, { useState } from 'react';

const UserAuth = () => {

    const [showLogin, setShowLogin] = useState(false);

    const handleToggle = (isLogin) => {
        setShowLogin(isLogin)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            user: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data)
    }
    return (
        <>
            <div className="user-container">
                <div className="auth-button">
                    <button onClick={() => handleToggle(false)}>Sign Up</button>
                    <button onClick={() => handleToggle(true)}>Log In</button>
                </div>

                {showLogin ? (
                        <div className="login-form">
                            <h1>Log In</h1>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="Email Address"/>

                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="Password"/>
                                <button type="submit">Log In</button>
                            </form>
                        </div>
                    ) : (
                    <div className="signUp-form">
                        <h1>Sign UP</h1>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username">User Name</label>
                            <input type="text" id="username" name="username" placeholder="Username"/>

                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="Email Address"/>

                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Password" />

                            <label htmlFor="confirm">Confirm Password</label>
                            <input type="password" id="confirm" name="confirm" placeholder="Confirm Password" />
                            <button type="submit">Sign In</button>
                        </form>
                    </div>
                    )
                }
            </div>
        </>
    );
};

export default UserAuth;