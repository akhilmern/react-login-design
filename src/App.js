import headerBackground from './header-background.png';
import './App.css';

function App() {
  return (
    
<div class="container flex-center">
  <div class="card">
    <div class="login-header">
      <span class="header-left-section box-height">
 
        <span class="welcome-text">
          <p>Welcome Back!</p>
        </span>
        <span class="sign-up-text flex-center">
            <p class="box-height">Sign in to continue</p>
        </span>
      </span>

      <span class="header-right-section">
        <img  src={headerBackground} alt="fireSpot"/>

      </span>
    </div>

    <div class="login-profile-image">
      <span class="profile-pic">
        <span></span>
      </span>
    </div>

    <div class="content">
      <div class="flex-start">
        <div class="form-group flex-start">
          <span class="label flex-center">
            <p>Username</p>
          </span>

          <input placeholder="Enter username" />
        </div>

        <div class="form-group flex-start">
          <span class="label">
            <p>Password</p>
          </span>

          <input placeholder="Enter password" type="password" />
        </div>

        <span class="remember-me flex-row-center">
          <input type="checkbox" />
          <p class="label-remember-me flex-center">Remember me</p>
        </span>
        <button class="login flex-center" type="button">
          <span>Log In</span>
        </button>
      </div>

      <span class="forgot-password flex-center">
        <span class="flex-center"> Forgot your password? </span>
      </span>
    </div>
  </div>

  <div class="sign-up flex-center">
    <span>
      <p class="box-height">
        Don't have an account? Sign up now
      </p>
    </span>
  </div>
</div>

  );
}

export default App;
