import React from 'react';
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
// const SubBoardWrap = styled.div``;
// const SubBoard = styled.div`
//   margin-left: 20px;
//   padding: 8px;
//   font-size: 14px;
//   color: ${props => (props.access ? 'black' : '#939393')};
// `;

const Board = ({ board, isLogin, isAdmin, role }) => {
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
      <MainBoard access={accessBoard(board.id)}>{board.name}</MainBoard>
      {/* <SubBoardWrap>
        {board.category.map((sub, idx) => (
          <SubBoard access={accessBoard(sub.id)} key={idx}>
            {sub.name}
          </SubBoard>
        ))}
      </SubBoardWrap> */}
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
      {isAdmin && (
        <Link to="/admin">
          <MainBoard access={isAdmin}>관리자 게시판</MainBoard>
        </Link>
      )}
    </NavigationWrap>
  );
};
export default Navigation;
