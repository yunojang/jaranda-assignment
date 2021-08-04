// import React, { useState } from 'react';
// import { Boards } from '../../asset/boards.js';
// import { Link } from 'react-router-dom';

// function Dropdown() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);

//   return (
//     <>
//       <ul
//         onClick={handleClick}
//         className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
//       >
//         {Boards.map((item, index) => {
//           return (
//             <li key={index}>
//               <Link
//                 className={item.cName}
//                 to={item.path}
//                 onClick={() => setClick(false)}
//               >
//                 {item.id}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// export default Dropdown;
