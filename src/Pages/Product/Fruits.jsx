import React from 'react'
import Fruits1 from '../.././assets/Fruits1.png';
import Fruits3 from '../.././assets/Fruits3.png';
import Fruits4 from '../.././assets/Fruits3.png';

function Fruits() {
    const data = [
        {
          Image: Fruits1,
          title: "Fruits",
          description:
            "Grow Naturally, Choose Organic Seeds for a Future!",
          buttonText: "View More",
        },
        {
            Image: Fruits1,
            title: "Fruits",
            description:
              "Feed Your Soil Naturally with Organic Fertilizer..",
            buttonText: "View More",
          },
          {
            Image: Fruits3,
            title: "Fruits",
            description:
              "Equip Your Farm Naturally for Sustainable Growth",
            buttonText: "View More",
          },
          {
            Image: Fruits4,
            title: "Fruits",
            description:
              "Heal Your Crops with Nature's Remedies.",
            buttonText: "View More",
          }
    ]
  return (
    <>
       
       <div className="container-fluid" style={{backgroundColor:'linear-gradient(to right, rgba(217, 217, 217, 0.2), #D9D9D9)'}}>
      <h2 style={{paddingLeft:"150px"}}>Fruits</h2>
      
    
      <div className="row justify-content-center py-4" style={{gap:'70px'}}>
     
        {data.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-2 px-2" key={index}>
            <img
              src={item.Image}
              alt="loading..."
              style={{ width: "100%",height:'100%' }}
            />
            <br /> <br/>
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

export default Fruits
