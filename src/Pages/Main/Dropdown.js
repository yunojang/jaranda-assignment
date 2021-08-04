import React, { useState } from 'react';
import { Boards } from '../../constant/boards';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul onClick={handleClick}>
        {Boards.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path} onClick={() => setClick(false)}>
                {item.id}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
