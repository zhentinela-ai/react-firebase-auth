import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Alert from "./Alert";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signin, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signin(user.email, user.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/user-not-found") setError("User not Found");
      if (error.code === "auth/wrong-password") setError("Wrong Password");
    }
  };

  const handleGoolgeSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) return setError("Please nter your email");

    try {
      await resetPassword(user.email);
      setError("We sent you an email with a link to reset your password");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@compay.ltd"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*******"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
            Signin
          </button>

          <a
            href="#!"
            className="inline-block align-baseline font-bold text-sm text-blue-600 focus:outline-none focus:shadow-outline"
            onClick={handleResetPassword}
          >
            Forgot Password?
          </a>
        </div>
      </form>

      <p className="my-4 text-sm flex justify-between px-3">
        Don't have a Account <Link to="/register">Register</Link>
      </p>

      <button
        onClick={handleGoolgeSignin}
        className="bg-slate-50 hover:bg-slate-200 text-back shadow-lg rounded-lg border-2 border-gray-300 py-2 px-4 w-full"
      >
        Login with Google
      </button>
    </div>
  );
}
