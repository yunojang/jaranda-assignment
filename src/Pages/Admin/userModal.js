import React , { useState,useEffect } from 'react'
import styled from 'styled-components'
import {ROLE} from 'asset/role'
import userImage from 'asset/user.png' 
import Modal from 'Components/modal'
import Button from 'Components/button'
import SelectRole from 'Components/selectRole'
import {cardNumberFormat} from 'utils/format'

const ImageWrapper = styled.div`
  margin-bottom: 40px;
`
const Container = styled.div`
  padding:30px 10%;
`
const UserAvatar = styled.img`
  height: 130px;
`
const UserInfo = styled.div`
  font-size: 20px;
  margin-bottom: 25px;
`
const UserName = styled.div`
  font-size: 40px;
  text-align:center;
  margin-bottom: 40px;
`
const Label = styled.div`
  display:inline-block;
  width: 20%;
  font-size: 14px;
  font-weight:600;
`
const Footer = styled.div`
  position:absolute;
  bottom:30px;
  right: 50px;
`
const CloseButton =styled(Button)`
  margin-left: 16px;
`
const UserModal = ({show,toggleModal,user}) => {
  const [userState,setUserState] = useState(user)
  useEffect(()=>{
    setUserState(user)
    console.log(user)
  },[user])
  const toggleIsAdmin = () =>{
    setUserState({...userState,isAdmin:!userState.isAdmin})
  }
  const setRoleId = (value) =>{
    setUserState({...userState,role:value})
  }
  const changeUserData = () => {
    let changeData = ''
    if (userState.role !== user.role) {
      changeData += `권한이 ${ROLE[userState.role]}로 바뀌었습니다.`
    }
    if (userState.isAdmin !== user.isAdmin) {
      changeData += `${changeData ? '\n' : ''}`
      changeData += `관리자${userState.isAdmin ? '로 설정' : '에서 해제'}되었습니다`
    }
    const noChangeMsg = '변경사항이 없습니다.'
    const alertCheck = alert(changeData || noChangeMsg)
    console.log(alertCheck,userState)
  }
  
  return (
    <Modal
      show={show}
      height="80%"
      width="80%"
      toggle={toggleModal}
    >
      <Container>
        <UserName>
          {userState.userName}
        </UserName>
        <ImageWrapper>
          <UserAvatar src={userImage} alt="user" />
        </ImageWrapper>
        <UserInfo>
          <Label>ID</Label>
          {userState.id}
        </UserInfo>
        <UserInfo>
          <Label>Address</Label>
          {userState.address}
        </UserInfo>
        <UserInfo>
          <Label>Card No.</Label>
          {cardNumberFormat(userState.cardNumber)}
        </UserInfo>
        <UserInfo>
          <Label>Role</Label>
          <SelectRole
            currentRoleId={userState.role}
            callback={(role) => setRoleId(role)}
          />
        </UserInfo>    
        <UserInfo>
          <Label>Admin</Label>
          관리자
          <input type="checkbox" checked={userState.isAdmin} onChange={toggleIsAdmin}/>
        </UserInfo>
      </Container>
      <Footer>
        <Button Small onClick={changeUserData}>수정</Button>
        <CloseButton Small onClick={toggleModal}>닫기</CloseButton>
      </Footer>
    </Modal>
  )
}

export default React.memo(UserModal)