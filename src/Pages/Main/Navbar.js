import React, { useState } from 'react';
import { BOARDS } from 'constant/boards';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { userStorage } from 'store';
import { ROUTES_PATH } from 'constant/routesPath'
const accessStyle = `
  color : black;
  &:hover {
    cursor: pointer
  }
  & div {
    cursor: initial
  }
`;

const NavigationWrap = styled.div`
  padding-top: 30px;
  display: inline-block;
  position: fixed;
  background-color: #e3e3e3;
  width: 200px;
  height: 100vh;
`;

const MainBoard = styled.div`
  font-size: 20px;
  padding: 12px;
  color: #939393;
  ${props => props.access && accessStyle}
`;

const SubBoardWrap = styled.div`
  padding-top: 12px;
`;
const SubBoard = styled.div`
  margin-left: 20px;
  padding: 8px;
  font-size: 14px;
  color: #939393;
  ${props => props.access && accessStyle}
`;

const Board = ({ board, user, setBoard }) => {
  const [showSubBoard, setShowSubBoard] = useState(false);
  const trueSubBoard = () => {
    if (board.category.length) {
      setShowSubBoard(true);
    }
  };
  const falseSubBoard = () => {
    setShowSubBoard(false);
  };
  const isLogin = user ? true : false;
  const { role, isAdmin } = user;
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
  const setBoardName = (e, board) => {
    e.stopPropagation()
    if (accessBoard(board.id)) {
      setBoard(board);
    }
  };
  return (
    <>
      <MainBoard
        onMouseEnter={trueSubBoard}
        onMouseLeave={falseSubBoard}
        access={accessBoard(board.id)}
        onClick={(e) => setBoardName(e, board)}
      >
        {board.name}
        {showSubBoard && (
          <SubBoardWrap>
            {board.category.map((sub, idx) => (
              <SubBoard 
                onClick={(e) => setBoardName(e, sub)}
                access={accessBoard(sub.id)} key={idx}>
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
  const user = userStorage.load() || {};
  const isLogin = userStorage.exist();
  return (
    <NavigationWrap>
      {BOARDS.map((board, idx) => (
        <Board
          key={idx}
          board={board}
          user={user}
          setBoard={setBoard}
        ></Board>
      ))}
      {isLogin && user.isAdmin && (
        <Link to={ROUTES_PATH.ADMIN}>
          <MainBoard access={user.isAdmin}>관리자 게시판</MainBoard>
        </Link>
      )}
    </NavigationWrap>
  );
};
export default Navigation;
