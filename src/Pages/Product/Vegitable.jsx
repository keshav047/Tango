import React from 'react'
import Veg1 from '../.././assets/veg1.png';
import Veg2 from '../.././assets/veg2.png';
import Veg3 from '../.././assets/veg3.png';
import Veg4 from '../.././assets/veg4.png';

function Vegitable() {
    const data2 = [
        {
          Image: Veg1,
          title: "Vegitable",
          description:
            "Grow Naturally, Choose Organic Seeds for a Healthier Future!",
          buttonText: "View More",
        },
        {
            Image: Veg2,
            title: "Vegitable",
            description:
              "Feed Your Soil Naturally with Organic Fertilizer..",
            buttonText: "View More",
          },
          {
            Image: Veg3,
            title: "Vegitable",
            description:
              "Equip Your Farm Naturally for Sustainable Growth",
            buttonText: "View More",
          },
          {
            Image: Veg4,
            title: "Vegitable",
            description:
              "Heal Your Crops with Nature's Remedies.",
            buttonText: "View More",
          }
    ]
  return (
    <>
        <div className="container-fluid" style={{backgroundColor:'linear-gradient(to right, rgba(217, 217, 217, 0.2), #D9D9D9)'}}>
    <h2 style={{paddingLeft:"150px"}}>VEGITABLES</h2>
    
      <div className="row justify-content-center py-4" style={{gap:'70px'}}>
      
        {data2.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-2 px-2" key={index}>
            <img
              src={item.Image}
              alt="loading..."
              style={{ width: "100%",height:'100%' }}
            />

            <br/><br/>
            <h2>{item.title}</h2>
            <p className="text-dark">{item.description}</p>
            <button
              className="btn"
              style={{ background: "#2FC822", color: "white" }}
            >
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Vegitable
