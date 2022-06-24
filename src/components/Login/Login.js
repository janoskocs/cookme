import React from 'react'
import logo from '../../img/cookmelogo500withtitle.png'

const Login = () => {
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
                            <input type="text" />
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password" />
                        </label>

                    </div>
                    <button type="submit">Log in</button>

                </form>
            </div>
        </div>
    )
}

export default Login