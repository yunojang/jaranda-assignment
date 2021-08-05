import React, { useState } from 'react';
import { BOARDS } from 'constant/boards';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationWrap = styled.div`
  //padding-top: 30px;
  display: inline-block;
  //background-color: #e3e3e3;
  display: flex;
  // width: 200px;
  line-height: 3;
`;
const MainBoard = styled.div`
  font-size: 20px;
  padding: 12px;

  color: ${props => (props.access ? 'black' : '#939393')};
`;
const SubBoardWrap = styled.div``;
const SubBoard = styled.div`
  margin-left: 20px;
  padding: 8px;
  font-size: 14px;
  color: ${props => (props.access ? 'black' : '#939393')};
`;

const Board = ({ board, isLogin, isAdmin, role }) => {
  const [showSubBoard, setShowSubBoard] = useState(false); //처음에 보이지 말아야하니까 기본값을 false로줌
  // showsubboard가 하나만 있는걸로 보이지만 사실은 보드 4개 에 대해 각각 하나씩 있는 것이고 따라서 보드 4개의 showsubboard state가 있는 것이다.
  const trueSubBoard = () => {
    setShowSubBoard(true);
    // 그렇게 떄문에 얘는 내가 갖고있는 subboard만 보여줫다 감췃다를 하지 남의 서브보드의 렌더에 관여하지 않는다. 관여할수없다.
  };
  const falseSubBoard = () => {
    setShowSubBoard(false);
  };

  console.log(setShowSubBoard);
  const accessBoard = boardId => {
    if (!isLogin) {
      return false;
    }
    // 관리자 이거나 10번 이하의 게시판은 접근가능
    if (isAdmin || boardId < 10) {
      return true;
    }
    // Sub게시판은 id 와 role 이 같아야 입장가능
    if (boardId % 10 && boardId === role) {
      return true;
    }
    if (parseInt(role / 10) * 10 === boardId) {
      return true;
    }
    return false;
  };
  return (
    <>
      {/* <MainBoard access={accessBoard(board.id)}>{board.name}</MainBoard>
      <SubBoardWrap>
        {board.category.map((sub, idx) => (
          <SubBoard access={accessBoard(sub.id)} key={idx}>
            {sub.name}
          </SubBoard>
        ))}
      </SubBoardWrap> */}

      <MainBoard
        onMouseEnter={trueSubBoard}
        onMouseLeave={falseSubBoard}
        access={accessBoard(board.id)}
      >
        {board.name}
        {showSubBoard && (
          <SubBoardWrap>
            {board.category.map((sub, idx) => (
              <SubBoard access={accessBoard(sub.id)} key={idx}>
                {sub.name}
              </SubBoard>
            ))}
          </SubBoardWrap>
        )}
      </MainBoard>
    </>
  );
};
const Navigation = ({ setBoard }) => {
  // 예시 데이터 - 프론트엔드
  const [isLogin, isAdmin, role] = [true, true, 11];
  return (
    <NavigationWrap>
      {BOARDS.map((board, idx) => (
        <Board
          key={idx}
          board={board}
          isLogin={isLogin}
          isAdmin={isAdmin}
          role={role}
          setBoard={setBoard}
        ></Board>
      ))}
      {/*보드 컴포넌트가 총 네번 그려진다. 즉 각각의 보드 컴포넌트들은 서로 자기만의 영역을 갖고잇고 남을 침범하지 않는다*/}
      {isAdmin && (
        <Link to="/admin">
          <MainBoard access={isAdmin}>관리자 게시판</MainBoard>
        </Link>
      )}
    </NavigationWrap>
  );
};
export default Navigation;
