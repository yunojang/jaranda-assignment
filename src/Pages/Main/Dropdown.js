import React, { useState } from 'react';
import { Boards } from '../../constant/boards';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  // const SubBoardWrap = styled.div``;
  // const SubBoard = styled.div`
  //   margin-left: 20px;
  //   padding: 8px;
  //   font-size: 14px;
  //   color: ${props => (props.access ? 'black' : '#939393')};
  // `;

  return (
    <>
      {/* <SubBoardWrap>
        {board.category.map((sub, idx) => (
          <SubBoard access={accessBoard(sub.id)} key={idx}>
            {sub.name}
          </SubBoard>
        ))}
      </SubBoardWrap> */}
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
