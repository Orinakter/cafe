import { useEffect } from "react";
import { useState } from "react";
import CardSection from "./CardSection";

const AllData = () => {
    const [list,setList] = useState([])
    useEffect(()=>{
        fetch ('./data.json')
        .then(res=>res.json())
        .then(data=>setList(data))
    },[])

    return (
        <div>
            <h1 className="text-center text-3xl mt-5 font-bold">Recipies</h1>
            <CardSection list={list} ></CardSection>

            

            
        </div>
    );
};

export default AllData;