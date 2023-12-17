import React from "react";

const StarRating=()=>{
const [rating, SetRating]= React.useState(0);
  const[hover, SetHover]= React.useState(0);
  return (
<div className='star-rating'>
  {[...Array(5)].map((star, index)=>{
    index += 1;
<button
type="button"
key={index}
classname={index <=(hover|| rating)?"on":"off"}
onclick={()=> SetRating(index)}
onMouseEnter={()=>SetHover(index)}
onMouseLeave={()=> SetHover(rating)}
>
  <span className='star'>&#9733;</span>
</button>
  
})}
</div>
  );
}
export default StarRating;