// import React from "react";
// import Typography from "@mui/material/Typography";
// import "./user.css";

// import banner from "../../image/seven-shooter-hPKTYwJ4FUo-unsplash.jpg";
// // import { Input } from "@mui/icons-material";
// // import banner from "../../image/hand-drawn-web-developers_23-2148819604.jpg";

// document.addEventListener('DOMContentLoaded', () => {
//   const button = document.querySelector('#sign_up');
//   const sign = document.querySelectorAll('#sign');

//   button.addEventListener('click', () => {
//     sign.style.display = 'none';
//   });
// });

// export default function Login() {
//   const myInlineStyle = {
//     textAlign: "center",
//     padding: "20px",
//     paddingBottom: "2px",
//   };
//   return (
//     <>
//       <div className="login">
//         <div>
//           <div className="image">
//             <img src={banner} alt=".." />
//           </div>
//         </div>

//         <div>
//           <div className="profile">
//             <div className="profile_main">
//               <div>
//                 <h2 style={myInlineStyle}> Login</h2>
//               </div>
//               <div id='sign' >
//                 <Typography variant="h6" display="block" className="h6"  >
//                   Full Name
//                 </Typography>
//                 <input type="email" />
//               </div>
//               <div>
//                 <Typography variant="h6" display="block" className="h6">
//                   Email
//                 </Typography>
//                 <input type="email" />
//               </div>
//               <div>
//                 <Typography variant="h6" display="block" className="h6">
//                   Password
//                 </Typography>
//                 <input type="email" />
//               </div>
//               <div id='sign' >
//                 <Typography variant="h6" display="block" className="h6" >
//                   Confirm Password
//                 </Typography>
//                 <input type="email" />
//               </div>
//               <div id='sign' >
//                 <Typography variant="h6" display="block" className="h6" >
//                   Phone Number
//                 </Typography>
//                 <input type="email" />
//               </div>
//               <div>
//               <input type="submit" value="Submit"  />
//               <input type="button" value="Button" id="sign_up" />

//                 {/* <input type="email" /> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
// import Typography from "@mui/material/Typography";
import banner from "../../image/seven-shooter-hPKTYwJ4FUo-unsplash.jpg";
import "./user.css";
import { Link } from "react-router-dom";
import Form from "../../util/form";
export default function Login() {
  // import { Outlet, Link } from "react-router-dom";

  const myInlineStyle = {
    textAlign: "center",
    padding: "20px",
    paddingBottom: "2px",
  };

  return (
    <>
      <div className="sign_up">
        <div>
          <div className="image">
            <img src={banner} alt=".." />
          </div>
        </div>

        <div>
          <div className="profile">
            <div className="profile_main">
              <div>
                <h2 style={myInlineStyle}> Login</h2>
              </div>

              <Form />
              <div className="link" >
              <Link to='/login'>login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
