import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <h1>loading</h1>;

  return (
    <div className="w-full max-w-xl m-auto text-black">
      <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl mb-4">Welcome {user.displayName || user.email}</h1>

        <img src={"" || user.photoURl} alt="not fount" />
        
        <button onClick={handleLogout} className="bg-slate-200 hover:bg-slate-600 rounded-2xl py-2 px-4 text-black hover:text-white font-bold">logout</button>
      </div>
    </div>
  );
}
