import DestinationCard from "./DestinationCard";

export default function DestinationList({destinations,fetchData}){

return(

<div className="grid grid-cols-3 gap-4">

{destinations.map((dest)=>(
<DestinationCard
key={dest.$id}
dest={dest}
fetchData={fetchData}
/>
))}

</div>

);
}