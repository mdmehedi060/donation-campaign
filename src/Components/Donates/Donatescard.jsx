import swal from 'sweetalert';
const Donatescard = ({donate}) => {

    const {id, image, title, title_bg,title_text_color, card_bg,
      text_button_bg , description, description_text_color, price} = donate || {};


const handleDonate =()=>{
const addedDonationarray = [];
    const donationItems = JSON.parse(localStorage.getItem('donation'))
    console.log(donationItems);
if(!donationItems){
    addedDonationarray.push(donate)
localStorage.setItem('donation',JSON.stringify(addedDonationarray))
swal("Good job!", "You donation added!", "success");
}
else{
const isExists = donationItems.find(donate=> donate.id === id);


if(!isExists){

    addedDonationarray.push(...donationItems,donate)
    localStorage.setItem('donation',JSON.stringify(addedDonationarray))
    swal("Good job!", "You donation added!", "success");
}
else{
    swal("error!","Alrady donation added!","error");
    
}
}




    // localStorage.setItem('test',JSON.stringify([{name:'Mehedi'},{name:'ph'}]))
}


    return (
        <div>
        <div style={{background: card_bg}} className="relative rounded-md 
         w-[600px] h-96 flex-col shadow-md ">

  <div className=" ">
    <img className='w-full rounded-none h-[30vh]'
      src={image}
      alt=""
    />
  </div>
  <div className="p-6">
    <h4  style={{color: title_text_color}} className=" font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {title}
    </h4>
    <p style={{color: description_text_color}} className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
      {description}
    </p>
  </div>
  <div className="absolute p-3 top-48 ml-2  bg-[#FF444A] text-white">
   <button onClick={handleDonate}>Donate $290</button>
  </div>
</div>
        </div>
    );
};

export default Donatescard;