import "./login.css";

function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button class="btn-hover color-9">Login</button>
      </form>
      <p>create an account <a href="./register"> Sign Up</a></p>
        
    </div>
  );
}

export default Login