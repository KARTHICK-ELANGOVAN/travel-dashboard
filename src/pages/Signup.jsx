import { useState } from "react";
import { account } from "../appwrite";
import { ID } from "appwrite";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import PasswordInput from "../components/PasswordInput";
import OAuthButtons from "../components/OAuthButtons";

export default function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {

    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      await account.create(
        ID.unique(),
        email,
        password
      );

      alert("Account created successfully!");

      navigate("/login");

    } catch (error) {

      console.log(error);
      alert(error.message);

    }

  };

  return (

    <AuthLayout>

      <form
        onSubmit={handleSignup}
        className="flex flex-col gap-2 max-w-sm w-full mx-auto"
      >

        <h2 className="text-white text-lg mb-1">
          Create Account
        </h2>

        <label className="text-white text-xs">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="rounded-md px-2 py-1.5 bg-white/80 outline-none text-sm"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="text-white text-xs">
          Password
        </label>

        <PasswordInput
          value={password}
          placeholder="Enter password" 
      
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="text-white text-xs">
          Confirm Password
        </label>

        <PasswordInput
          value={confirmPassword}
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded-md mt-1 text-sm"
        >
          SIGN UP
        </button>

      </form>

      <OAuthButtons
        loginRedirect="https://travel-curd-dashboard.netlify.app/dashboard"
        failureRedirect="https://travel-curd-dashboard.netlify.app/signup"
      />

      <p className="text-center text-white text-sm mt-4">

        Already have an account?

        <Link
          to="/login"
          className="underline ml-1"
        >
          Sign in
        </Link>

      </p>

    </AuthLayout>

  );
}

// import { useState } from "react";
// import { account } from "../appwrite";
// import { useNavigate, Link } from "react-router-dom";
// import { ID } from "appwrite";
// // import { Login } from "./Login";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import loginBG from "../assets/loginimage.jpg";

// export default function Signup() {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       await account.create(ID.unique(), email, password);
//       alert("Signup Successful!");
//       navigate("/login");
//     } catch (error) {
//       console.log(error);
//       alert("Signup Failed");
//     }
//   };

//   const signupWithGoogle = () => {
//     account.createOAuth2Session(
//       "google",
//       "http://localhost:5173/dashboard",
//       "http://localhost:5173/signup"
//     );
//   };

//   const signupWithGithub = () => {
//     account.createOAuth2Session(
//       "github",
//       "http://localhost:5173/dashboard",
//       "http://localhost:5173/signup"
//     );
//   };

//   return (

//     <div
//       className="min-h-screen bg-cover bg-center flex items-center justify-center"
//       style={{
//         backgroundImage:
//         //   "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')"
//         `url('${loginBG}')`
//       }}
//     >

//       <div className="w-[90%] max-w-6xl rounded-2xl overflow-hidden flex shadow-2xl backdrop-blur-0">


//         <div className="hidden md:flex w-1/2 text-white flex-col justify-center p-16 bg-black/15">

//           <h2 className="text-lg tracking-widest mb-4">
//             ✈ TRAVEL
//           </h2>

//           <h1 className="text-6xl font-bold leading-tight mb-6">
//             EXPLORE <br />
//             HORIZONS
//           </h1>

//           <p className="text-lg opacity-90">
//             Where Your Dream Destinations Become Reality.
//           </p>

//           <p className="text-sm mt-4 opacity-80 max-w-sm">
//             Embark on a journey where every corner of the world
//             is within your reach.
//           </p>

//         </div>

//         {/* SIGNUP FORM */}

//         <div className="w-full md:w-1/2 flex items-center justify-center p-10">

//           <div className="w-full max-w-md bg-white/5 backdrop-blur-0 p-8 rounded-2xl shadow-xl">

//             <h2 className="text-white text-2xl font-semibold mb-6">
//               Create Account
//             </h2>

//             <form onSubmit={handleSignup} className="flex flex-col gap-4">

//               <label className="text-white text-sm">Email</label>

//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="rounded-md px-4 py-2 bg-white/80 outline-none"
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <label className="text-white text-sm">Password</label>
//                 <div className="relative">
//                 <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="********"
//                     className="rounded-md px-4 py-2 bg-white/80 outline-none w-full"
//                     onChange={(e) => setPassword(e.target.value)}
//                     required/>
//                 <span
//                     className="absolute right-3 top-3 cursor-pointer text-gray-600"
//                     onClick={() => setShowPassword(!showPassword)}>
//                     {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </span>

//                 </div>

//               <label className="text-white text-sm">Confirm Password</label>

//               <input
//                 type="password"
//                 placeholder="********"
//                 className="rounded-md px-4 py-2 bg-white/80 outline-none"
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />

//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md mt-2"
//               >
//                 SIGN UP
//               </button>

//             </form>

//             {/* Divider */}

//             <div className="flex items-center gap-4 my-6 text-white">

//               <hr className="flex-grow border-white/40" />
//               <span>or</span>
//               <hr className="flex-grow border-white/40" />

//             </div>

//             {/* Google Signup */}

//             <button
//               onClick={signupWithGoogle}
//               className="flex items-center justify-center gap-2 w-full bg-white py-2 rounded-md hover:bg-gray-100"
//             >

//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
//                 className="w-5"
//               />

//               Sign up with Google

//             </button>

//             <button
//               onClick={signupWithGithub}
//               className="flex items-center justify-center gap-2 w-full bg-white py-2 rounded-md hover:bg-gray-100 mt-4"
//             >   
//             <img
//                 src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
//                 className="w-5"
//               />
//                 Sign up with Github
//             </button>

//             <p className="text-center text-white text-sm mt-6">

//               Already have an account?

//               <Link
//                 to="/login"
//                 className="underline ml-1"
//               >
//                 Sign In
//               </Link>

//             </p>

//           </div>

//         </div>

//       </div>

//     </div>

//   );
// }

// export default function Login() {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await account.createEmailPasswordSession(email, password);
//       alert("Login Successful!");
//       navigate("/dashboard");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const loginWithGoogle = () => {
//     account.createOAuth2Session(
//       "google",
//       "http://localhost:5173/dashboard",
//       "http://localhost:5173/login"
//     );
//   };

//   return (

//     <div
//       className="min-h-screen bg-cover bg-center flex items-center justify-center"
//       style={{
//         backgroundImage:
//           `url('${loginBG}')`
//         // "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb2luJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60')"
//       }}
//     >

//       <div className="w-[90%] max-w-6xl rounded-2xl overflow-hidden flex shadow-2xl ">

//         {/* LEFT CONTENT */}

//         <div className="hidden md:flex w-1/2 text-white flex-col justify-center p-16 bg-black/15">

//           <h2 className="text-lg tracking-widest mb-4">
//             ✈ TRAVEL
//           </h2>

//           <h1 className="text-6xl font-bold leading-tight mb-6 overflow-hidden">
//             EXPLORE <br />
//             HORIZONS
//           </h1>

//           <p className="text-lg opacity-90">
//             Where Your Dream Destinations Become Reality.
//           </p>

//           <p className="text-sm mt-4 opacity-80 max-w-sm">
//             Embark on a journey where every corner of the world
//             is within your reach.
//           </p>

//         </div>


//         {/* RIGHT LOGIN FORM */}

//         <div className="w-full md:w-1/2 flex items-center justify-center p-10">

//           <div className="w-full max-w-md bg-white/5 backdrop-blur-0 p-8 rounded-2xl shadow-xl">

//             <form onSubmit={handleLogin} className="flex flex-col gap-4">

//               <label className="text-white text-sm">Email</label>

//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="rounded-md px-4 py-2 bg-white/80 outline-none"
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />

//               <label className="text-white text-sm">Password</label>

//               <input
//                 type="password"
//                 placeholder="********"
//                 className="rounded-md px-4 py-2 bg-white/80 outline-none"
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />

//               <div className="text-right text-sm text-white/80">
//                 <a href="#">Forgot password?</a>
//               </div>

//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md mt-2"
//               >
//                 SIGN IN
//               </button>

//             </form>


//             {/* Divider */}

//             <div className="flex items-center gap-4 my-6 text-white">

//               <hr className="flex-grow border-white/40" />
//               <span>or</span>
//               <hr className="flex-grow border-white/40" />

//             </div>


//             {/* Google Login */}

//             <button
//               onClick={loginWithGoogle}
//               className="flex items-center justify-center gap-2 w-full bg-white py-2 rounded-md hover:bg-gray-100"
//             >

//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
//                 className="w-5"
//               />

//               Sign in with Google

//             </button>


//             <p className="text-center text-white text-sm mt-6">

//               Are you new?

//               <Link
//                 to="/signup"
//                 className="underline ml-1"
//               >
//                 Create an Account
//               </Link>

//             </p>

//           </div>

//         </div>

//       </div>

//     </div>

//   );
// }