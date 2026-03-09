import { useRef } from "react";
import DestinationCard from "./DestinationCard";

export default function DestinationCarousel({ destinations, fetchData }){

const scrollRef = useRef();

const scrollLeft = ()=>{
scrollRef.current.scrollBy({
left:-400,
behavior:"smooth"
});
};

const scrollRight = ()=>{
scrollRef.current.scrollBy({
left:400,
behavior:"smooth"
});
};

return(

<div className="relative">

<button
onClick={scrollLeft}
className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-3 rounded-full"
>
◀
</button>

<div
ref={scrollRef}
className="flex gap-6 overflow-x-auto scrollbar-hide pb-6"
>

{destinations.map((d)=>(
<DestinationCard
key={d.$id}
destination={d}
fetchData={fetchData}
/>
))}

</div>

<button
onClick={scrollRight}
className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-3 rounded-full"
>
▶
</button>

</div>

);
}