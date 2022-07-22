import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Alert from "./Alert";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/invalid-email") setError("Invalid email");
      if (error.code === "auth/weak-password")
        setError("Password should be at least 6 characters");
      if (error.code === "auth/email-already-in-use")
        setError("Email already in use");
      setError(error.message);
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
            placeholder="youremail@compay.ltd"
            name="email"
            id="email"
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

        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
          Register
        </button>
      </form>

      <p className="my-4 text-sm flex justify-between px-3">
        Alredy have a Account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
