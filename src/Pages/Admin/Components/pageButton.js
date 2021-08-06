import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  text-align: center;

  color: ${props => (props.select ? '#1685fd' : 'black')};
  padding-bottom: 2px;

  &:hover {
    border-bottom: 1px solid gray;
  }
`;
const Prev = ({onClick})=> (
  <Button onClick={onClick}>
    {'이전'}
  </Button>
)

const Next = ({onClick}) => (
  <Button onClick={onClick}>
    {'다음'}
  </Button>
)
function PageButton({ size, page, setPage, userCount ,limit}) {
  const [pageList, setPageList] = useState([]);
  const maxPage = Math.ceil(userCount / limit)
  const onPaging = page => {
    setPage(page);
  };
  useEffect(() => {
    setPageList(Array.from({ length: maxPage }, (_, i) => i));
  }, [maxPage]);

  return (
    <>
      {page !== 0 && <Prev onClick={()=>onPaging(page-1)}></Prev>}
      {maxPage < size
        ? pageList.map(v => (
            <Button
              key={v}
              select={page === v}
              onClick={() => {
                onPaging(v);
              }}
            >
              {v + 1}
            </Button>
          ))
        : !(maxPage - page < size / 2 + 1)
        ? pageList
            .slice(
              page - size / 2 > 0 ? page - parseInt(size / 2) : 0,
              (page - size / 2 > 0 ? page - parseInt(size / 2) : 0) + size,
            )
            .map(v => (
              <Button
                select={page === v}
                key={v}
                onClick={() => {
                  onPaging(v);
                }}
              >
                {v + 1}
              </Button>
            ))
        : pageList
            .slice(maxPage - page < size / 2 + 1 && maxPage - size)
            .map(v => (
              <Button
                key={v}
                select={page === v}
                onClick={() => {
                  onPaging(v);
                }}
              >
                {v + 1}
              </Button>
            ))}
      {page < maxPage-1 && <Next onClick={()=>onPaging(page+1)}/>}
    </>
  );
}

export default PageButton;
