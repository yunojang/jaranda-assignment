import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    console.log(page);
    setPage(page);
  };

  useEffect(() => {
    setPageList(Array.from({ length: maxPage }, (_, i) => i));
  }, [maxPage]);

  return (
    <>
      {prev ? (
        <Link to={`/admin/${page - 1}`}>
          <Button
            onClick={() => {
              onPaging(page - 1);
            }}
          >
            {'이전'}
          </Button>
        </Link>
      ) : (
        <div style={{ width: '36px', display: 'inline-block' }} />
      )}
      {maxPage < size
        ? pageList.map(v => (
            <Link key={v} to={`/admin/${v}`}>
              <Button
                select={page === v}
                onClick={() => {
                  onPaging(v);
                }}
              >
                {v + 1}
              </Button>
            </Link>
          ))
        : !(maxPage - page < size / 2 + 1)
        ? pageList
            .slice(
              page - size / 2 > 0 ? page - parseInt(size / 2) : 0,
              (page - size / 2 > 0 ? page - parseInt(size / 2) : 0) + size,
            )
            .map(v => (
              <Link key={v} to={`/admin/${v}`}>
                <Button
                  select={page === v}
                  key={v}
                  onClick={() => {
                    onPaging(v);
                  }}
                >
                  {v + 1}
                </Button>
              </Link>
            ))
        : pageList
            .slice(maxPage - page < size / 2 + 1 && maxPage - size)
            .map(v => (
              <Link key={v} to={`/admin/${v}`}>
                <Button
                  select={page === v}
                  onClick={() => {
                    onPaging(v);
                  }}
                >
                  {v + 1}
                </Button>
              </Link>
            ))}
      {next ? (
        <Link to={`/admin/${page + 1}`}>
          <Button onClick={() => onPaging(page + 1)}>{'다음'}</Button>
        </Link>
      ) : (
        <></>
      )}
    </>
  );
}

export default PageButton;
