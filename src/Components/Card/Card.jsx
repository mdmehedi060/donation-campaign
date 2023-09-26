import { Link } from "react-router-dom";

const Card = ({card}) => {

    const {id,Picture,Title,Category,Category_bg,Card_bg, 
      Text_button_bg,Description,Price} = card || {};
    // console.log(card);
  

  
    return (
     <div>
       <Link to={`/donates/${id}`}>
        <div  className="mt-12" style={{background: Card_bg}}>
        
           <div className="card h-96   bg-shadow-xl"  >
  <figure><img className="w-full" src={Picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-xl "  style={{color: Category_bg}}>{Title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
    <div className="card-actions justify-end">
    <p>{Price}</p>
    </div>
    
  </div>
</div>

        </div>
       
       
        </Link>
     </div>
    );
};

export default Card;