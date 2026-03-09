import { useState } from "react";
import { databases, storage, DATABASE_ID, COLLECTION_ID_DESTINATIONS, BUCKET_ID, ID } from "../appwrite";

export default function DestinationCard({ destination, fetchData }) {

const [editMode, setEditMode] = useState(false);

const [formData, setFormData] = useState({
place_name: destination.place_name,
country: destination.country,
description: destination.description,
budget: destination.budget,
rating: destination.rating
});

const [newImage, setNewImage] = useState(null);


// DELETE
const deleteDestination = async () => {

await databases.deleteDocument(
DATABASE_ID,
COLLECTION_ID_DESTINATIONS,
destination.$id
);

fetchData();
};


// HANDLE INPUT CHANGE
const handleChange = (e) => {

setFormData({
...formData,
[e.target.name]: e.target.value
});

};


// UPDATE DESTINATION
const editDestination = async () => {

let imageId = destination.image;

if (newImage) {

const file = await storage.createFile(
BUCKET_ID,
ID.unique(),
newImage
);

imageId = file.$id;
}

await databases.updateDocument(
DATABASE_ID,
COLLECTION_ID_DESTINATIONS,
destination.$id,
{
place_name: formData.place_name,
country: formData.country,
description: formData.description,
budget: Number(formData.budget),
rating: Number(formData.rating),
image: imageId
}
);

setEditMode(false);
fetchData();
};


return (

<div className="min-w-[300px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">

<img
src={destination.image ? storage.getFileView(BUCKET_ID, destination.image) : ""}
alt={destination.place_name}
className="h-44 w-full object-cover"
/>

<div className="p-4">

{/* NORMAL VIEW */}

{!editMode && (

<>

<h2 className="text-lg font-bold">
{destination.place_name}
</h2>

<p className="text-gray-600 text-sm">
{destination.country}
</p>

<div className="flex justify-between items-center mt-2">

<span className="text-blue-600 font-bold">
${destination.budget}
</span>

<span className="text-yellow-500 font-semibold">
⭐ {destination.rating}
</span>

</div>

<div className="flex gap-3 mt-4">

<button
onClick={() => setEditMode(true)}
className="text-blue-600 text-sm"
>
✏ Edit
</button>

<button
onClick={deleteDestination}
className="text-red-500 text-sm"
>
🗑 Delete
</button>

</div>

</>

)}



{editMode && (

<div className="space-y-2">

<input
name="place_name"
value={formData.place_name}
onChange={handleChange}
className="border p-2 w-full rounded"
/>

<input
name="country"
value={formData.country}
onChange={handleChange}
className="border p-2 w-full rounded"
/>

<textarea
name="description"
value={formData.description}
onChange={handleChange}
className="border p-2 w-full rounded"
/>

<input
name="budget"
type="number"
value={formData.budget}
onChange={handleChange}
className="border p-2 w-full rounded"
/>

<input
name="rating"
type="number"
value={formData.rating}
onChange={handleChange}
className="border p-2 w-full rounded"
/>

<input
type="file"
onChange={(e) => setNewImage(e.target.files[0])}
/>

<div className="flex gap-2 mt-2">

<button
onClick={editDestination}
className="bg-green-600 text-white px-3 py-1 rounded"
>
Update
</button>

<button
onClick={() => setEditMode(false)}
className="bg-gray-400 text-white px-3 py-1 rounded"
>
Cancel
</button>

</div>

</div>

)}

</div>

</div>

);
}

// import { useState } from "react";
// import { databases, storage, DATABASE_ID, BUCKET_ID, COLLECTION_ID_DESTINATIONS } from "../appwrite";

// export default function DestinationCard({ dest, fetchData }) {

//     const [editMode, setEditMode] = useState(false);

//     const [formData, setFormData] = useState({
//     place_name: dest.place_name,
//     country: dest.country,
//     description: dest.description,
//     budget: dest.budget,
//     rating: dest.rating
//     });

//     const handleChange = (e) => {
//     setFormData({
//     ...formData,
//     [e.target.name]: e.target.value
//     });
//     };

//     const deleteDestination = async () => {
//     await databases.deleteDocument(
//     DATABASE_ID,
//     COLLECTION_ID_DESTINATIONS,
//     dest.$id
//     );
//     fetchData();
//     };

//     const updateDestination = async () => {

//     await databases.updateDocument(
//     DATABASE_ID,
//     COLLECTION_ID_DESTINATIONS,
//     dest.$id,
//     {
//     place_name: formData.place_name,
//     country: formData.country,
//     description: formData.description,
//     budget: Number(formData.budget),
//     rating: Number(formData.rating)
//     }
//     );

//     setEditMode(false);
//     fetchData();
//     };

//     return (

//     <div className="bg-white shadow rounded p-4">

//     {editMode ? (

//     <>
//     <div className="flex items-center gap-0 mb-2">
//         <label className="text-sm font-medium text-gray-700 w-25">
//             Place Name:
//         </label>

//         <input
//             name="place_name"
//             value={formData.place_name}
//             onChange={handleChange}
//             className="border p-2 flex-1 rounded"/>
//     </div>

//     <div className="flex items-center gap-0 mb-2">
//         <label className="text-sm font-medium text-gray-700 w-25">
//             Country:
//         </label>

//         <input
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//             className="border p-2 flex-1 rounded"
//         />
//     </div>

//     <div className="flex items-center gap-0 mb-2">
//         <label className="text-sm font-medium text-gray-700 w-25">
//             Description:
//         </label>    
//         <textarea
//         name="description"
//         placeholder="Description"
//         value={formData.description}
//         onChange={handleChange}
//         className="border p-2 flex-1 mb-2 rounded"
//         />
//     </div>
//     <div className="flex items-center gap-0 mb-2">
//         <label className="text-sm font-medium text-gray-700 w-25">
//             Budget:
//         </label>    
//         <input
//         name="budget"
//         type="number"
//         placeholder="Budget"
//         value={formData.budget}
//         onChange={handleChange}
//         className="border p-2 flex-1 mb-2 rounded"
//         />
//     </div>

//     <div className="flex items-center gap-0 mb-2">
//         <label className="text-sm font-medium text-gray-700 w-25">
//             Rating:
//         </label>    
//         <input
//         name="rating"
//         type="number"
//         placeholder="Rating"
//         value={formData.rating}
//         onChange={handleChange}
//         className="border p-2 flex-1 mb-2 rounded"
//         />
//     </div>


//     <div className="flex gap-2">

//     <button
//     onClick={updateDestination}
//     className="bg-green-500 text-white px-3 py-1 rounded"
//     >
//     Save
//     </button>

//     <button
//     onClick={() => setEditMode(false)}
//     className="bg-gray-400 text-white px-3 py-1 rounded"
//     >
//     Cancel
//     </button>

//     </div>
//     </>

//     ) : (

//     <>
//     <h2 className="font-bold text-lg">{dest.place_name}</h2>

//     <p>{dest.country}</p>

//     <img
//     src={dest.image ? storage.getFileView(BUCKET_ID, dest.image) : ""}
//     alt={dest.place_name}
//     className="w-full h-48 object-cover rounded mb-4"
//     />

//     <p className="text-sm">{dest.description}</p>

//     <p>💰 Budget: {dest.budget}</p>

//     <p>⭐ Rating: {dest.rating}</p>

//     <div className="flex gap-2 mt-3">

//     <button
//     onClick={() => setEditMode(true)}
//     className="bg-blue-500 text-white px-3 py-1 rounded"
//     >
//     Edit
//     </button>

//     <button
//     onClick={deleteDestination}
//     className="bg-red-500 text-white px-3 py-1 rounded"
//     >
//     Delete
//     </button>

//     </div>
//     </>

//     )}

//     </div>

//     );
//     }