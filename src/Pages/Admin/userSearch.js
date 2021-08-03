import React from 'react';
import styled from 'styled-components';

const UserSearch = ({ handleInput, value }) => {
  const Search = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    input {
      position: relative;
      padding-left: 75px;
      margin-right: 25px;
      font-size: 17px;
      width: 595px;
      height: 60px;
      border-radius: 5px;
      background-color: white;
      background-image: url('images/search.svg');
      background-position: 30px 50%;
      background-repeat: no-repeat;
    }

    input::placeholder {
      font-size: 17px;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 30px;
      height: 60px;
      font-size: 18px;
      font-weight: 500;
      background-color: #1685fd;
      color: white;
      border-radius: 5px;
      border: none;
      cursor: pointer;
    }

    img {
      margin-right: 10px;
    }
  `;

  return (
    <>
      <Search>
        <input
          placeholder="전체 사용자 검색"
          onChange={handleInput}
          value={value}
        />
        <button>
          <img src="images/user-add.svg" alt="추가"></img>
          사용자 추가
        </button>
      </Search>
    </>
  );
};

export default UserSearch;
