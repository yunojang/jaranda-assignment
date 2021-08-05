import React, { useState,useEffect } from 'react';
import Navigation from './Navbar'
import styled from 'styled-components'

const MainContainer = styled.div`
  margin-left: 200px;
  padding: 50px 20px;
  text-align:center;
`
const BoardTitle = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`

const BoardContainer = styled.div``

const BoardItemWrap = styled.div`
  border: 1px solid gray;
  margin : 10px;
  padding: 20px;
  `

const BoardDescription = styled.div`
  color: gray;
  font-size: 12px;
  font-weight: 500;
  text-align: start;
  margin-bottom: 50px;
`

const BoardItem = ({board,idx}) => {
  return (
    <BoardItemWrap> {board.name} {idx+1} 번째 게시글 </BoardItemWrap>
  )
}
function Main({location}) {
  const [board,setBoard] = useState(null)
  useEffect(()=>{
    setBoard(null)
  },[location])
  return (
    <>
      <Navigation setBoard={setBoard}/>
      <MainContainer>
        {board && 
          <BoardContainer>
            <BoardTitle>
              {board.name}
            </BoardTitle>
            <BoardDescription>
              {board.access} 사용하는 게시판입니다
            </BoardDescription>
            {Array(6).fill(0).map((_,idx) => (
              <BoardItem key={idx} idx={idx} board={board}/>
            ))}
          </BoardContainer>
        }
      </MainContainer>
    </>
  );
}

export default Main;
