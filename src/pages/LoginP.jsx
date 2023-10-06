import "./LoginP.css";

const LoginP = () => {
  const login = (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (emailInput.value === "" || passwordInput.value === "") {
      alert("Email va parolni to'ldiring");
      return;
    }

    localStorage.setItem("isAuth", "1");
    window.location = "/";
  };

  return (
    <div className="form-box">
      <form className="form" onSubmit={login}>
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input type="email" placeholder="Enter email" id="email" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Enter password" id="password" />
        </div>
        <button type="submit" className="submit">
          Sign in
        </button>
        <p className="signup-link">No account?</p>
      </form>
    </div>
  );
};

export default LoginP;
