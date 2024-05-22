// import React from 'react'

// export default function Navbar() {
//   return (
//     <div  style={{
//       backgroundColor: "black",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       padding: "10px 20px",
//     color:"white",
//     width:"1000px"
//     }}>
//       <h4>Logo</h4>
  
//         <a href="#">Home</a>
//         <a href="#">Team</a>
      
//     </div>
//   )
// }



import React from 'react';
import { Anchor } from 'antd';
const Navbar = () => (
  <>
    <div
      style={{
        
        padding: '20px',
   border:'2px solid black',
  //  backgroundColor:"black",
      }}
    >
      <Anchor style={{color:"white"}}
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Home',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'About',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Team',
          },
        ]}
      />
    </div>
    {/* <div>
      <div
        id="part-1"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,255,0,0.02)',
        }}
      />
      <div
        id="part-2"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,0,255,0.02)',
        }}
      />
      <div
        id="part-3"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: '#FFFBE9',
        }}
      />
    </div> */}
  </>
);
export default Navbar;