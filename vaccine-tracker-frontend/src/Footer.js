import React from "react";
import "./Footer.css";

// function Footer() {
//   return (
//     <div className="main-footer">
//       <div className="container">
//         <div className="row">
//           {/* Column1 */}
//           <div className="col">
//             <h4><i>Beanpot Baddies</i></h4>
//             <h6 className="list-unstyled">
//               <li className="foot-link">COVID-19 Vaccine Waste Tracker     &nbsp;      <a href="https://hackbeanpot.com/" target="_blank">HackBeanpot 2021</a>    &nbsp;    <a href="https://www.khoury.northeastern.edu/" target="_blank">Khoury College of Computer Science</a></li>
//             </h6>
//           </div>
//         </div>
//         <div className="row">
//           <p className="col-lg">
//             &copy;{new Date().getFullYear()} Beanpot Baddies | All rights reserved |
//             Terms Of Service | Privacy
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

function Footer() {
  return (

      <div className="main-footer">
      <h4><i>Beanpot Baddies</i></h4>
      <h6 className="list-unstyled">
        <li className="foot-link">COVID-19 Vaccine Waste Tracker     &nbsp;      <a href="https://hackbeanpot.com/" target="_blank">HackBeanpot 2021</a>    &nbsp;    <a href="https://www.khoury.northeastern.edu/" target="_blank">Khoury College of Computer Science</a></li>
      </h6>
      <p className="col-xl">
        &copy;{new Date().getFullYear()} Beanpot Baddies | All rights reserved |
            Terms Of Service | Privacy
          </p>
    </div>

  )
}

export default Footer;