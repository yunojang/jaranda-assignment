import React from 'react';
import Input from 'Components/input';

function Adress() {
  return (
    <>
      <div>
        <Input
          type='text'
          placeholder='주소'
          readOnly
        />
        <button>주소 찾기</button>
      </div>
      
      <Input 
        type='text'
        placeholder='상세 주소'
      />
    </>
  )
}

export default Adress;
