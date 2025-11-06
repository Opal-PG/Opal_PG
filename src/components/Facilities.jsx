import React from 'react'
import "../style/Facilities.css"
import facilitiesData from "../Data/Facilities.json";
import * as FaIcons from "react-icons/fa";

export default function Facilities() {
  return (
    <section id="facilities" className="facilities-section py-5">
      <div className="container text-center">
        {/* Heading */}
        <h2 className="facilities-heading mb-3">Facilities That Feel Like Home</h2>
        <p className="facilities-subheading mb-5">
          Every corner designed for your comfort — <br></br>from cozy beds to healthy meals and high-speed Wi-Fi.
        </p>

        <div className="row">
          {facilitiesData.map((item) => {
            const IconComponent = FaIcons[item.icon]; // dynamically load icon
            return (
              <div key={item.id} className="col-6 col-md-3 mb-5">
                <div className="p-3 shadow-sm rounded-3 bg-white h-100 d-flex flex-column align-items-center">
                  {IconComponent && <IconComponent size={40} color="#007bff" />}
                  <h5 className="mt-3">{item.title}</h5>
                  <p className="text-muted small">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
