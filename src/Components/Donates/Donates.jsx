import { useParams,useLoaderData } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import Donatescard from "./Donatescard";


const Donates = () => {
  const [donate,setDonate] = useState({});
  const donates = useLoaderData();
  // console.log(donates);
    const {id} =useParams();
    // console.log(id);
useEffect(()=>{
const findDonate = donates?.find(donate=> donate.id === id);


setDonate(findDonate);
},[id,donates])
// console.log(donates);

    return (
        <div>
        <Donatescard donate={donate}></Donatescard>
        </div>
    );
};

export default Donates;