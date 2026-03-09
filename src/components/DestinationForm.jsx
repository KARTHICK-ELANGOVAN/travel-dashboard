import { useState } from "react";
import { databases, storage, ID, DATABASE_ID, COLLECTION_ID_DESTINATIONS, BUCKET_ID } from "../appwrite";

export default function DestinationForm({ fetchData }) {

    const [form, setForm] = useState({
    place_name:"",
    country:"",
    description:"",
    budget:"",
    best_season:"",
    rating:""
    });

    const [image,setImage] = useState(null);

    // const handleChange = (e)=>{
    // setForm({...form,[e.target.name]:e.target.value});
    // };

    const handleChange = (e) => {

    const { name, value } = e.target;

    setForm({
    ...form,
    [name]: name === "budget" || name === "rating"
    ? Number(value)
    : value
    });

    };

    const handleSubmit = async(e)=>{
    e.preventDefault();

    let imageUrl = "";

    if(image){
    const file = await storage.createFile(
    BUCKET_ID,
    ID.unique(),
    image
    );

    imageUrl = file.$id;
    }

    await databases.createDocument(
    DATABASE_ID,
    COLLECTION_ID_DESTINATIONS,
    ID.unique(),
    {
    ...form,
    image:imageUrl,
    $createdAt:new Date()
    }
    );

    fetchData();
    };

    return(

    <form
    onSubmit={handleSubmit}
    className="bg-white/20 backdrop-blur-xl p-6 rounded-xl shadow-lg text-white"
    >

    <h2 className="text-2xl font-bold mb-4">
    Add Destination
    </h2>

    <input
    name="place_name"
    placeholder="Place Name"
    onChange={handleChange}
    className="border border-white/30 bg-transparent p-2 w-full mb-3 rounded"
    />

    <input
    name="country"
    placeholder="Country"
    onChange={handleChange}
    className="border border-white/30 bg-transparent p-2 w-full mb-3 rounded"
    />

    <textarea
    name="description"
    placeholder="Description"
    onChange={handleChange}
    className="border border-white/30 bg-transparent p-2 w-full mb-3 rounded"
    />

    <input
    name="budget"
    type="number"
    placeholder="Budget"
    onChange={handleChange}
    className="border border-white/30 bg-transparent p-2 w-full mb-3 rounded"
    />

    <input
    name="best_season"
    placeholder="Best Season"
    onChange={handleChange}
    className="border border-white/30 bg-transparent p-2 w-full mb-3 rounded"
    />

    <input
    name="rating"
    type="number"
    placeholder="Rating"
    onChange={handleChange}
    className="border border-white/30 bg-transparent p-2 w-full mb-3 rounded"
    />

    <input
    type="file"
    onChange={(e)=>setImage(e.target.files[0])}
    className="mb-4"
    />

    <button className="bg-blue-600 px-6 py-2 rounded-lg">
    Add Destination
    </button>

    </form>
    );
    }
    {/* <form
onSubmit={handleSubmit}
className="bg-white p-6 rounded shadow mb-6"
>

<h2 className="text-xl font-bold mb-4">Add Destination</h2>

<input
name="place_name"
placeholder="Place Name"
onChange={handleChange}
className="border p-2 w-full mb-2"
/>

<input
name="country"
placeholder="Country"
onChange={handleChange}
className="border p-2 w-full mb-2"
/>

<textarea
name="description"
placeholder="Description"
onChange={handleChange}
className="border p-2 w-full mb-2"
/>

<input
name="budget"
placeholder="Budget"
type="number"
onChange={handleChange}
className="border p-2 w-full mb-2"
/>

<input
name="best_season"
placeholder="Best Season"
onChange={handleChange}
className="border p-2 w-full mb-2"
/>

<input
name="rating"
placeholder="Rating"
type="number"
onChange={handleChange}
className="border p-2 w-full mb-2"
/>

<input
type="file"
onChange={(e)=>setImage(e.target.files[0])}
className="mb-4"
/>

<button className="bg-blue-600 text-white px-4 py-2 rounded">
Add Destination
</button>

</form> */}


