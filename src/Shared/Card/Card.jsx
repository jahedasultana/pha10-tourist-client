
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const Card = ({tourist}) => {
    const { 
        _id,
        name,     
        cost,
        seasonality,
        travel,  
        totalVisitorsPerYear,
        photo} = tourist;

    return (
        <div>

<div className="card card-side bg-base-100 shadow-xl flex">

<div>
<figure><img className="rounded-2xl w-[300px]" src={photo} alt="Movie"/></figure>
</div>
<div className="card-body">
<h2 className="card-title"> {name}</h2>
<p>average_cost: {cost}</p>
<p>totalVisitorsPerYear: {totalVisitorsPerYear}</p>
<p>travel_time: {travel}</p>
<p>seasonality: {seasonality}</p>
<div className="">
<Link to={`/details/${_id}`}>
           <button className="btn w-full bg-[#c0cece] font-extrabold text-[#195e5e]">View Details</button>
  </Link>

</div>
</div>
</div>
    </div>
    );
};

Card.propTypes = {
  name: PropTypes.node
};
export default Card;