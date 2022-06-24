import React from 'react'
import { useState } from 'react'

const Login = ({ users }) => {

    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const [loggedInUser, setloggedInUser] = useState(null)

    const logIn = (e) => {
        e.preventDefault();
        const capitalizedUserName = userName.charAt(0).toUpperCase() + userName.slice(1)//Capitalize user's input as they are saved capitalized in DB
        const activeUser = users.find((user) => (capitalizedUserName === user.firstName))
        setloggedInUser(activeUser)
    }

    return (
        <div id="login">
            <div className="login-wrapper">
                <div className="login-side">
                </div>
                <form>
                    <h1>Welcome to CookMe</h1>
                    <p>The best social media for food pictures!</p>
                    <div className="login-inputs">
                        <label>
                            <p>Username</p>
                            <input type="text" onChange={(e) => setUserName(e.target.value)} />
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} />
                        </label>

                    </div>
                    <button onClick={(e) => { logIn(e) }}>Log in</button>

                </form>
            </div>
        </div>
    )
}

export default Login