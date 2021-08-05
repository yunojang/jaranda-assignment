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

function PageButton({ size, maxPage, page, setPage, next, prev }) {
  const [pageList, setPageList] = useState([]);

  const onPaging = page => {
    setPage(page);
  };

  useEffect(() => {
    setPageList(Array.from({ length: maxPage }, (_, i) => i));
  }, [maxPage]);

  return (
    <>
      {prev ? (
        <Button
          onClick={() => {
            onPaging(page - 1);
          }}
        >
          {'이전'}
        </Button>
      ) : (
        <div style={{ width: '36px', display: 'inline-block' }} />
      )}
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
      {next ? (
        <Button onClick={() => onPaging(page + 1)}>{'다음'}</Button>
      ) : (
        <></>
      )}
    </>
  );
}

export default PageButton;
