import { Link } from "react-router-dom";

const Card = ({card}) => {

    const {id, image, title, title_bg,title_text_color, card_bg,
       text_button_bg , description, description_text_color, price} = card || {};
    // console.log(card);
  

  
    return (
     <div>
       <Link to={`/donates/${id}`}>
        <div  className="mt-12" style={{background: card_bg}}>
        
           <div className="card h-96   bg-shadow-xl"  >
  <figure><img className="w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <div className="w-28 text-center rounded-md " style={{background: title_bg}}>
    <h2 className="text-xl "  
     style={{color: title_text_color}}>{title}</h2>
    </div>
    <p style={{color: description_text_color}}>{description}</p>
    
    <div className="card-actions justify-end">
    <p>{price}</p>
    </div>
    
  </div>
</div>

        </div>
       
       
        </Link>
     </div>
    );
};

export default Card;