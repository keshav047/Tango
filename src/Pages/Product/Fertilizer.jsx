import React from 'react'
import Fert1 from '../.././assets/Fert1.png';
import Fert2 from '../.././assets/Fert2.png';
import Fert3 from '../.././assets/Fert3.png';
import Fert4 from '../.././assets/Fert4.png';

function Fertilizer() {

    const data3 = [
        {
          Image: Fert1,
          title: "Fertilizier",
          description:
            "Grow Naturally, Choose Organic Seeds for a Healthier Future!",
          buttonText: "View More",
        },
        {
            Image: Fert2,
          title: "Fertilizier",
            description:
              "Feed Your Soil Naturally with Organic Fertilizer..",
            buttonText: "View More",
          },
          {
            Image: Fert3,
          title: "Fertilizier",
            description:
              "Equip Your Farm Naturally for Sustainable Growth",
            buttonText: "View More",
          },
          {
            Image: Fert4,
            title: "Fertilizier",
            description:
              "Heal Your Crops with Nature's Remedies.",
            buttonText: "View More",
          }
    ]

  return (
    <>
       <div className="container-fluid" style={{backgroundColor:'linear-gradient(to right, rgba(217, 217, 217, 0.2), #D9D9D9)'}}>
    <h2 style={{paddingLeft:"150px"}}>Fertilizer</h2>
    
      <div className="row justify-content-center py-4" style={{gap:'70px'}}>
      
        {data3.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-2 px-2" key={index}>
            <img
              src={item.Image}
              alt="loading..."
              style={{ width: "100%",height:'100%' }}
            />
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

export default Fertilizer
