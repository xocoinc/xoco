import logo from './xoco blue (2).png'

const Login = () =>{
    return (
        <div className="login">
            <div className='logo'>
                <img src={logo} alt='' />
            </div>
            <h3>Login</h3>
             <form className='input__fields'>
                <h4>Username/email</h4>
                <input type='text' placeholder='Username/email' />
                <h4>Password</h4>
                <input type='password' placeholder='password' />
                <div className='checkbox'>
                    <input type='checkbox' />
                    <h4>stay signed in</h4>
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;
