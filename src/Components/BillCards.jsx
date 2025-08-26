import React, { useEffect, useState } from 'react';

import { useLoaderData, useParams } from 'react-router';

import OnebillCard from './OnebillCard';


const BillCards = ({allBillsData}) => {
    
      const { id } = useParams();
  

  // console.log(allBillsData)

  const [billsData, setBillsData] = useState([]);

  useEffect(() => {

     if (!allBillsData || allBillsData.length === 0) return;

    if (!id || id === "0") {
      // if id is undefined or "0", show all
      setBillsData(allBillsData);
    } else {
      // otherwise, filter by id
      const filteredBill = allBillsData.filter(
        (billData) => billData.Billid == id
      );
      setBillsData(filteredBill);
    }
}, [id, allBillsData]);

    
    
    return (
        <div className='flex flex-col gap-5'>
            {billsData.map(data => <OnebillCard data={data}></OnebillCard>)}
        </div>
    );
};

export default BillCards;