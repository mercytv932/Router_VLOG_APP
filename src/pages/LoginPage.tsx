import { useAuth } from "../contexts/AuthContext";

function LoginPage() {
  const { login } = useAuth();
  return (
    <div className="login-page">
      <h2>Login Page</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default LoginPage;
