import { useState } from "react";
import { useEffect } from "react";
import Donationcard from "./Donationcard";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [noFound, setNoFound] = useState(false);
const [isShow,setIsShow]= useState(false)
  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));
    if (donationItems) {
      setDonations(donationItems);
    } else {
      // console.log('no data found');
      setNoFound("no data found");
    }
  }, []);
  // console.log(dotations);

  const handleRemove = () => {
    localStorage.clear();
    setDonations([]);
    setNoFound("no data found");
  };

  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
          {donations.length > 0 && (
            <button
              onClick={handleRemove}
              className="px-5 bg-green-200 block mx-auto mb-5"
            >
              All button delate
            </button>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                isShow ? donations.map((donate) => (
                    <Donationcard key={donate.id} donate={donate}></Donationcard>
                  )) : donations.slice(0, 4).map((donate) => (
                    <Donationcard key={donate.id} donate={donate}></Donationcard>
                  ))
            }
          </div>
         {
            donations.length > 2 &&  <button onClick={()=> setIsShow(!isShow)}
            className="px-5 mt-5 bg-green-200 block mx-auto mb-5">
             See More
           </button>
         }
        </div>
      )}
    </div>
  );
};

export default Donation;
