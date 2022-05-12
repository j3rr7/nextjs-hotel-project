import Head from 'next/head'
import { useState } from 'react';

function Dashboard() {
  const [data, setData] = useState([
    {
      id : 1,
      product: "Ekor Ayam Goreng",
      price: "80.000",
      quantity: 2,
      total: "160.000"
    },
    {
      id : 2,
      product: "Potongan Ayam Goreng",
      price: "20.000",
      quantity: 3,
      total: "60.000"
    }
  ]);

  const HandleOnChange = (e, index) =>{
    let tempDt = [...data];
    tempDt[index].quantity = e.target.value;
    setData(tempDt);
  }

  return (
    <div>
    <Head>
      <title>Dashboard</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <ul>
      {/* data.map((dt, index) => ( <li key={index} style={{ backgroundColor:"yellow"}}>
        <h1>{dt.product} - {value[index]["quantity"]}</h1>
        <input type="number" placeholder={dt.quantity} onChange={(e) => HandleOnChange(e, index)} />
        </li> )) */}
        { data.map((dt, index) => ( <li key={index} style={{ backgroundColor:"yellow"}}>
          <h1>{dt.product} - {dt.quantity}</h1>
          <input type="number" placeholder={dt.quantity} onChange={(e) => HandleOnChange(e, index)} />
          </li> )) }
      </ul>
    </main>
    </div>
  );
}

export default Dashboard;
