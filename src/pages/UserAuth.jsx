import React from 'react';

const UserAuth = () => {
    return (
        <>
            <div className="user-container">
                <div className="auth-button">
                    <button>Sign Up</button>
                    <button>Log In</button>
                </div>

                <div className="signUp-form">
                    <h1>Sign UP</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label for="username">User Name</label>
                        <input type="text" id="username" name="username" placeholder="Username" />

                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="Email Address" />

                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password" />

                        <label for="confirm">Confirm Password</label>
                        <input type="password" id="confirm" placeholder="Confirm Password" />
                        <button type="submit">Sign In</button>
                    </form>
                </div>

                <div className="login-form">
                    <h1>Log In</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="Email Address"/>

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password"/>
                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UserAuth;