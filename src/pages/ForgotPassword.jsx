import { useState } from "react";
import { account } from "../appwrite";
import AuthLayout from "../components/AuthLayout";

export default function ForgotPassword() {

  const [email, setEmail] = useState("");

  const handleRecovery = async (e) => {

    e.preventDefault();

    try {

      await account.createRecovery(
        email,
        "http://localhost:5173/reset-password"
      );

      alert("Reset email sent");

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <AuthLayout>

      <form onSubmit={handleRecovery} className="flex flex-col gap-4">

        <h2 className="text-white text-xl mb-2">Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="rounded-md px-4 py-2 bg-white/80 outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="bg-blue-500 text-white py-2 rounded-md">

          Send Reset Link

        </button>

      </form>

    </AuthLayout>

  );
}


// import { useState } from "react";
// import { account } from "../appwrite";

// export default function ForgotPassword() {

//   const [email, setEmail] = useState("");

//   const handleRecovery = async (e) => {
//     e.preventDefault();

//     try {

//       await account.createRecovery(
//         email,
//         "http://localhost:5173/reset-password"
//       );

//       alert("Password reset email sent!");

//     } catch (error) {
//       console.log(error);
//       alert(error.message);
//     }
//   };

//   return (

//     <div>

//       <h2>Forgot Password</h2>

//       <form onSubmit={handleRecovery}>

//         <input
//           type="email"
//           placeholder="Enter your email"
//           onChange={(e)=>setEmail(e.target.value)}
//           required
//         />

//         <button type="submit">
//           Send Reset Link
//         </button>

//       </form>

//     </div>
//   );
// }