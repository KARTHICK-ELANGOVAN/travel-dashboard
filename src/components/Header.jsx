import { Link } from "react-router-dom";
import { account } from "../appwrite";

export default function Header(){

const logout = async()=>{
await account.deleteSession("current");
window.location.href="/login";
};

return(

<header className="fixed w-full top-0 z-50">
    <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3
     bg-white/10 backdrop-blur-lg rounded-xl mt-4 shadow-lg text-white">

    <h1 className="text-xl font-bold">
        ✈ Travalle
    </h1>
    <nav className="flex gap-6">
        <Link to="/dashboard" className="hover:scale-102 transition hover:underline">
            Dashboard
        </Link>
        <Link to="/destinations" className="hover:scale-102 transition hover:underline">
            Destinations
        </Link>
        <button
            onClick={logout}
            className="bg-white text-black px-4 py-1 rounded-full hover:bg-white/70 transition hover:scale-105">
            Logout
        </button>
    </nav>
    </div>
</header>

);
}

// import { Link } from "react-router-dom";
// import { account } from "../appwrite";

// export default function Header(){

// const logout = async()=>{
// await account.deleteSession("current");
// window.location.href="/login";
// };

// return(

// <header className="bg-blue-600 text-white flex justify-between p-4 shadow">

// <h1 className="text-xl font-bold">✈ Travel Explorer</h1>

// <div className="flex gap-4">

// <Link to="/dashboard" className="hover:underline">
// Dashboard
// </Link>

// <Link to="/destinations" className="hover:underline">
// Destinations
// </Link>

// <button
// onClick={logout}
// className="bg-red-500 px-4 py-1 rounded"
// >
// Logout
// </button>

// </div>

// </header>

// );
// }