import { useEffect, useState } from "react";
import Header from "../components/Header";
import DestinationCarousel from "../components/DestinationCarousel";
import { databases, DATABASE_ID, COLLECTION_ID_DESTINATIONS } from "../appwrite";
import DestinationImage from "../assets/dashboard2.jpg";

export default function Destinations(){

const [destinations,setDestinations] = useState([]);

const fetchData = async()=>{

const res = await databases.listDocuments(
DATABASE_ID,
COLLECTION_ID_DESTINATIONS
);

setDestinations(res.documents);
};

useEffect(()=>{
fetchData();
},[]);

return(

<div
className="min-h-screen bg-cover bg-center"
style={{
backgroundImage:
// "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')"
`url("${DestinationImage}")`
}}
>

<Header/>

<div className="pt-24 px-8">

<h1 className="text-3xl font-bold text-white mb-6">
Explore Destinations
</h1>

<DestinationCarousel
destinations={destinations}
fetchData={fetchData}
/>

</div>

</div>

);
}



// import { useEffect, useState } from "react";
// import Header from "../components/Header";
// import DestinationForm from "../components/DestinationForm";
// import DestinationList from "../components/DestinationList";
// import DashboardStats from "../components/DashboardStats";
// import { databases, DATABASE_ID, COLLECTION_ID_DESTINATIONS } from "../appwrite";

// export default function Destinations(){

// const [destinations,setDestinations] = useState([]);

// const fetchData = async()=>{

// const res = await databases.listDocuments(
// DATABASE_ID,
// COLLECTION_ID_DESTINATIONS
// );

// setDestinations(res.documents);
// };

// useEffect(()=>{
// fetchData();
// },[]);

// return(

// <div className="bg-gray-100 min-h-screen">

// <Header/>

// <div className="p-6">

// <DestinationList
// destinations={destinations}
// fetchData={fetchData}
// />

// </div>

// </div>

// );
// }

// import { useEffect, useState } from "react";
// import { databases, DATABASE_ID, COLLECTION_ID, functions, FUNCTION_ID } from "../appwrite";
// import { ID } from "appwrite";

// export default function Dashboard() {

//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");


//   const fetchTasks = async () => {
//     try {
//       const response = await databases.listDocuments(
//         DATABASE_ID,
//         COLLECTION_ID
//       );
//       setTasks(response.documents);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);


// const createTask = async (e) => {

//   e.preventDefault();

//   try {

//     const response = await databases.createDocument(
//       DATABASE_ID,
//       COLLECTION_ID,
//       ID.unique(),
//       {
//         title,
//         description
//       }
//     );

    
//     await functions.createExecution(
//       FUNCTION_ID,
//       JSON.stringify({
//         action: "create",
//         title: title,
//         description: description
//       })
//     );

//     setTitle("");
//     setDescription("");

//     fetchTasks();

//   } catch (error) {
//     console.log(error);
//   }
// };
// const deleteTask = async ($id) => {

//   const confirmDelete = window.confirm("Are you sure?");

//   if (!confirmDelete) return;

//   try {

//     await databases.deleteDocument(
//       DATABASE_ID,
//       COLLECTION_ID,
//       $id
//     );

//     await functions.createExecution(
//       FUNCTION_ID,
//       JSON.stringify({
//         action: "delete",
//         taskId: $id
//       })
//     );

//     fetchTasks();

//   } catch (error) {
//     console.log(error);
//   }
// };
// const updateTask = async ($id) => {

//   const newTitle = prompt("Enter new title");
//   const newDescription = prompt("Enter new Description");

//   if (!newTitle || !newDescription) return;

//   try {

//     await databases.updateDocument(
//       DATABASE_ID,
//       COLLECTION_ID,
//       $id,
//       {
//         title: newTitle,
//         description: newDescription
//       }
//     );

   
//     await functions.createExecution(
//       FUNCTION_ID,
//       JSON.stringify({
//         action: "update",
//         taskId: $id,
//         title: newTitle,
//         description: newDescription
//       })
//     );

//     fetchTasks();

//   } catch (error) {
//     console.log(error);
//   }
// };
//   return (
//     <div style={{padding:"20px"}}>

//       <h2>Dashboard CRUD</h2>


//       <form onSubmit={createTask}>

//         <input
//           placeholder="Task title"
//           value={title} className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           onChange={(e)=>setTitle(e.target.value)}
//           required
//         />

//         <input
//           placeholder="Description"
//           value={description} className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           onChange={(e)=>setDescription(e.target.value)}
//           required
//         />

//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
//           Add Task
//         </button>

//       </form>

//       <hr/>

      

//       {tasks.map((task)=>(
//         <div key={task.$id} style={{border:"1px solid gray",margin:"10px",padding:"10px"}}>

//           <h3>{task.title}</h3>
//           <p>{task.description}</p>

//           <button onClick={()=>updateTask(task.$id)}>
//             Edit
//           </button>

//           <button onClick={()=>deleteTask(task.$id)}>
//             Delete
//           </button>

//         </div>
//       ))}

//     </div>
//   );
// }