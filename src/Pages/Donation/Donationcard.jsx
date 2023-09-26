

const Donationcard = ({donate}) => {
    const {id, image, title, title_bg,title_text_color, card_bg,
      text_button_bg , description, description_text_color, price} = donate || {};


    return (
        <div >
       <div  style={{background: card_bg}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6  style={{color: title_text_color}} className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
     {title}
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {description}
    </h4>
   
    <a className="inline-block" href="#">
      <button 
        className="flex bg-[#FF444A] select-none items-center gap-2 rounded-lg py-3 
        px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 
        transition-all text-white hover:bg-pink-500/10 active:bg-pink-500/30
         disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        View Details
      
      </button>
    </a>
  </div>
</div> 
        </div>
    );
};

export default Donationcard;