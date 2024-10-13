import React, { useEffect, useState } from 'react'
import Carousel from '../Carousel'
import Content from '../Content'
import axios from "axios";
import { Link } from 'react-router-dom';
import CPU from '../CPU.png'
export default function Home() {
  const [data, setData] = useState([]);

  function temp() {
    axios
      .get("https://65a7b4b294c2c5762da7596a.mockapi.io/crud")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
  useEffect(() => {
    temp();
  }, []);
  
  return (
    <div>
      <Carousel />
      <br />
      
      <h2 style={{textAlign:'center'}}>CATEGORIES</h2>
      <br /><br />
      

      <div className='container-fluid'>
            <div className='row'>

            &ensp; &ensp; 
      <div className="col-lg-1">
      <Link to='../Content'>
      <div class="card bg-dark text-white">
  <img src={CPU} class="card-img" alt="..."/>
  <div class="card-img-overlay">  
    {/* <h5 class="card-title">Card title</h5>
  </Link>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p class="card-text">Last updated 3 mins ago</p> */}
  </div>
</div>
  </Link>
</div>
&ensp; &ensp; 

<div className="col-lg-1">
<Link to='../Content2'>
      <div class="card bg-dark text-white">
  <img src="https://www.vedantcomputers.com/image/cache/catalog/assets/icon/motherboard-120x120.jpg" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    {/* <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p class="card-text">Last updated 3 mins ago</p> */}
  </div>
</div>
</Link>
</div>

&ensp; &ensp; 

<div className="col-lg-1">
  <Link to='../Content3'>
      <div class="card bg-dark text-white">
  <img src="https://www.vedantcomputers.com/image/cache/catalog/assets/icon/gpu-120x120.jpg" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    {/* <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p class="card-text">Last updated 3 mins ago</p> */}
  </div>
</div>
  </Link>
</div>

&ensp; &ensp; 

<div className="col-lg-1">
<Link to='../Content4'>
      <div class="card bg-dark text-white">
  <img src="https://www.vedantcomputers.com/image/cache/catalog/assets/icon/memory-ram-120x120.jpg" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    {/* <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p class="card-text">Last updated 3 mins ago</p> */}
  </div>
</div>
</Link>
</div>

&ensp; &ensp; 

<div className="col-lg-1">
<Link to='../Content5'>
      <div class="card bg-dark text-white">
  <img src="https://www.vedantcomputers.com/image/cache/catalog/assets/icon/psu-120x120.jpg" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    {/* <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p class="card-text">Last updated 3 mins ago</p> */}
  </div>
</div>
</Link>
</div>

&ensp; &ensp; 

<div className="col-lg-1">
<Link to='../Content6'>
      <div class="card bg-dark text-white">
  <img src="https://www.vedantcomputers.com/image/cache/catalog/assets/icon/fans-cooling-120x120.jpg" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    {/* <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p class="card-text">Last updated 3 mins ago</p> */}
  </div>
</div>
</Link>
</div>

&ensp; &ensp; 

<div className="col-lg-1">
<Link to='../Content7'>
      <div class="card bg-dark text-white">
  <img src="https://www.vedantcomputers.com/image/cache/catalog/assets/icon/storage-3-120x120.jpg" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    {/* <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p class="card-text">Last updated 3 mins ago</p> */}
  </div>
</div>
</Link>
</div>

&ensp; &ensp; 

<div className="col-lg-1">
<Link to='../Content8'>
      <div class="card bg-dark text-white">
  <img src="https://www.vedantcomputers.com/image/cache/catalog/assets/icon/cabinet-case-120x120.jpg" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    {/* <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p class="card-text">Last updated 3 mins ago</p> */}
  </div>
</div>
</Link>
</div>

&ensp; &ensp; 

<div className="col-lg-1">
<Link to='../Content9'>
      <div class="card bg-dark text-white">
  <img src="https://www.vedantcomputers.com/image/cache/catalog/assets/icon/gaming-accesories-1-120x120.jpg" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    {/* <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p class="card-text">Last updated 3 mins ago</p> */}
  </div>
</div>
</Link>
</div>

&ensp; &ensp; 

<div className="col-lg-1">
<Link to='../Content10'>
      <div class="card bg-dark text-white">
  <img src="https://www.vedantcomputers.com/image/cache/catalog/assets/icon/gaming-laptop-3-120x120.jpg" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    {/* <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p class="card-text">Last updated 3 mins ago</p> */}
  </div>
</div>
</Link>
</div>



</div>
</div>
<br />
<h2 style={{textAlign:'center'}}>ALL PRODUCTS</h2>


      {/* <Content /> */}



      <div>
      <div className='container-fluid'>
        <div className='row'>
            {data.map((eachItem) => {
              return (
                // <tr key={index}>
                //   <th scope="row">{index + 1}</th>
                //   <th scope="row">
                //     <img style={{width:'10%'}} src={eachItem.image} alt="" />
                //   </th>

                  <div className="col-lg-3">
      <div class="card" style={{width: "50px;"}}>
  <div class="bg-image hover-overlay" data-lgb-ripple-init data-lgb-ripple-color="light">
    <img src={eachItem.image} class="img-fluid" style={{width: "50px;"}} />
    <a href="#!">
      <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15);"}}></div>
    </a>
  </div>
  <div class="card-body">
    <h5 class="card-title">{eachItem.title}</h5>
    <p class="card-text">{eachItem.price}</p>
    <a href="#!" class="btn btn-primary" data-lgb-ripple-init>Add To Cart</a>
  </div>
</div>
</div>



//   <td style={{ textAlign: "left" }}>{eachItem.title}</td>
//   <td>{eachItem.catagory}</td>
//   <td>{eachItem.price}</td>
//   <td>{eachItem.rating}</td>

// </tr>
);
})}</div>
</div>
          </div>







    </div>
  );
       
}


