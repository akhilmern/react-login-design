import headerBackground from "./header-background.png";
import "./App.css";
import { useState } from "react";
import { AppToaster } from "./components/toaster";
import { Icon } from "@blueprintjs/core";

function App() {
  const [user, setUser] = useState({ userName: "", password: "" });

  const handleLogin = () => {
    console.log(user);
    if (!user.userName && !user.password) {
      AppToaster.show({
        message: "User name and password are mandatory fields",
      });
    } else {
      !user.userName &&
        AppToaster.show({ message: "User name is a mandatory field" });
      !user.password &&
        AppToaster.show({ message: "Password is a mandatory field" });
    }
  };

  const handleInput = (evt, key) => {
    console.log(evt.target.value);
    setUser({ ...user, [key]: evt.target.value });
  };

  return (
    <div className="container flex-center">
      <div className="card">
        <div className="login-header">
          <span className="header-left-section box-height">
            <span className="welcome-text">
              <p>Welcome Back!</p>
            </span>
            <span className="sign-up-text flex-center">
              <p className="box-height">Sign in to continue</p>
            </span>
          </span>
          <span className="header-right-section">
            <img src={headerBackground} alt="fireSpot" />
          </span>
        </div>

        <div className="login-profile-image">
          <span className="profile-pic">
            <span></span>
          </span>
        </div>

        <div className="content">
          <div className="flex-start">
            <div className="form-group flex-start">
              <span className="label flex-center">
                <p>Username</p>
              </span>

              <input
                onChange={(evt) => handleInput(evt, "userName")}
                placeholder="Enter username"
                value={user.userName}
              />
            </div>

            <div className="form-group flex-start">
              <span className="label">
                <p>Password</p>
              </span>

              <input
                onChange={(evt) => handleInput(evt, "password")}
                placeholder="Enter password"
                value={user.password}
                type="password"
              />
            </div>

            <span className="remember-me flex-row-center">
              <input type="checkbox" />
              <p className="label-remember-me flex-center">Remember me</p>
            </span>
            <button
              onClick={handleLogin}
              className="login flex-center"
              type="button"
            >
              <span>Log In</span>
            </button>
          </div>

          <span className="forgot-password flex-center">
            <p className="forget-text">
              {" "}
              <Icon icon={"lock"} size={11} /> Forgot your password?{" "}
            </p>
          </span>
        </div>
      </div>

      <div className="sign-up flex-center">
        <span>
          <p className="box-height">Don't have an account? Sign up now</p>
        </span>
      </div>
    </div>
  );
}

export default App;
