

const Donationcard = ({donate}) => {
    const {id,Picture,Title,Category,Category_bg,Card_bg, 
        Text_button_bg,Description,Price} = donate || {};


    return (
        <div >
       <div  style={{background: Card_bg}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={Picture}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6  style={{color: Category_bg}} className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
     {Title}
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {Description}
    </h4>
   
    <a className="inline-block" href="#">
      <button style={{color: Text_button_bg}}
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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