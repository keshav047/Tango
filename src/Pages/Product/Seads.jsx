import React from 'react';
import Seed1 from '../.././assets/Seed1.png';
import Seed2 from '../.././assets/Seed2.png';
import Seed3 from '../.././assets/Seed3.png';
import Seed4 from '../.././assets/Seed4.png';

function Seads() {

    const data4 = [
        {
          Image: Seed1,
          title: "SEADS",
          description:
            "Grow Naturally, Choose Organic Seeds for a Healthier Future!",
          buttonText: "View More",
        },
        {
            Image: Seed2,
            title: "SEADS",
            description:
              "Feed Your Soil Naturally with Organic Fertilizer..",
            buttonText: "View More",
          },
          {
            Image: Seed3,
          title: "SEADS",
            description:
              "Equip Your Farm Naturally for Sustainable Growth",
            buttonText: "View More",
          },
          {
            Image: Seed4,
            title: "SEADS",
            description:
              "Heal Your Crops with Nature's Remedies.",
            buttonText: "View More",
          }
    ]
  return (
    <>
      
    <div className="container-fluid" style={{backgroundColor:'linear-gradient(to right, rgba(217, 217, 217, 0.2), #D9D9D9)'}}>
    <h2 style={{paddingLeft:"150px"}}>SEADS</h2>
    
      <div className="row justify-content-center py-4" style={{gap:'70px'}}>
      
        {data4.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-2 px-2" key={index}>
            <img
              src={item.Image}
              alt="loading..."
              style={{ width: "100%",height:'100%' }}
            />
            <br /><br />
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

export default Seads
