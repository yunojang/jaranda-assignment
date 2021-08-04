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
  margin-bottom: 50px;
`

const BoardItemWrap = styled.div`
  border: 1px solid gray;
  margin : 10px;
  padding: 20px;
`

const BoardItem = ({board,idx}) => {
  return (
    <BoardItemWrap>{board} {idx+1} 번째 게시글 </BoardItemWrap>
  )
}
function Main({location}) {
  const [board,setBoard] = useState('')
  useEffect(()=>{
    setBoard('')
  },[location])
  return (
    <>
      <Navigation setBoard={setBoard}/>
      <MainContainer>
        <BoardTitle>
          {board}
        </BoardTitle>
        {board && Array(6).fill(0).map((_,idx) => (
          <BoardItem key={idx} idx={idx} board={board}/>
        ))}
      </MainContainer>
    </>
  );
}

export default Main;
