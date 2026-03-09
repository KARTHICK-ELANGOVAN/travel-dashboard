export default function DashboardStats({ destinations }) {

const total = destinations.length;

const countries = new Set(destinations.map(d => d.country)).size;

const topRated = destinations.filter(d => d.rating >= 4).length;

return(

<div className="grid md:grid-cols-3 gap-6 mb-8">

<div className="bg-white/1 backdrop-blur-sm p-6 rounded-xl shadow-lg text-white font-bold 
    justify-center items-center flex flex-col
 hover:bg-white/5 transition duration-300 hover:scale-105">

<h3 className="text-lg opacity-70">
📍 Total Destinations
</h3>

<h2 className="text-3xl font-bold">
{total}
</h2>

</div>

<div className="bg-white/1 backdrop-blur-sm p-6 rounded-xl shadow-lg text-white font-bold 
justify-center items-center flex flex-col
 hover:bg-white/5 transition duration-300 hover:scale-105">

<h3 className="text-lg opacity-70">
🌎 Countries Covered
</h3>

<h2 className="text-3xl font-bold">
{countries}
</h2>

</div>

<div className="bg-white/1 backdrop-blur-sm p-6 rounded-xl shadow-lg text-white  font-bold 
justify-center items-center flex flex-col
 hover:bg-white/5 transition duration-300 hover:scale-105">

<h3 className="text-lg opacity-70">
⭐ Top Rated
</h3>

<h2 className="text-3xl font-bold">
{topRated}
</h2>

</div>

</div>

);
}



// export default function DashboardStats({ destinations }) {

// const total = destinations.length;

// const countries = new Set(destinations.map(d => d.country)).size;

// const topRated = destinations.filter(d => d.rating >= 4).length;

// return (

// <div className="grid grid-cols-3 gap-4 mb-6">

// <div className="bg-white p-4 shadow rounded">
// 📍 Total Destinations
// <h2 className="text-2xl font-bold">{total}</h2>
// </div>

// <div className="bg-white p-4 shadow rounded">
// 🌎 Countries Covered
// <h2 className="text-2xl font-bold">{countries}</h2>
// </div>

// <div className="bg-white p-4 shadow rounded">
// ⭐ Top Rated
// <h2 className="text-2xl font-bold">{topRated}</h2>
// </div>

// {/* <div className="bg-white p-4 shadow rounded">
// 🧳 Upcoming Trips
// <h2 className="text-2xl font-bold">3</h2>
// </div> */}

// </div>

// );
// }