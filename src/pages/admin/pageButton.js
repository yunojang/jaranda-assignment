import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  text-align: center;

  color: ${props => (props.select ? '#1685fd' : 'black')};
  padding-bottom: 2px;

  &:hover {
    border-bottom: 1px solid gray;
  }
`;

function PageButton({ items, setItems, limit, size }) {
  const [pageList, setPageList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const onPaging = useCallback(
    page => {
      setCurrentPage(page);
      setItems(items.slice(page * limit, page * limit + limit));
    },
    [items, limit],
  );

  useEffect(() => {
    setPageList(
      Array.from(
        {
          length:
            items.length % limit
              ? parseInt(items.length / limit + 1)
              : parseInt(items.length / limit),
        },
        (_, i) => i,
      ),
    );
  }, []);

  return (
    <>
      {currentPage ? (
        <Button
          onClick={() => {
            onPaging(currentPage - 1);
          }}
        >
          {'이전'}
        </Button>
      ) : (
        <div style={{ width: '36px', display: 'inline-block' }} />
      )}
      {pageList.length < size
        ? pageList.map(v => (
            <Button
              select={currentPage === v}
              key={v}
              onClick={() => {
                onPaging(v);
              }}
            >
              {v + 1}
            </Button>
          ))
        : !(pageList.length - currentPage < size / 2 + 1)
        ? pageList
            .slice(
              currentPage - size / 2 > 0 ? currentPage - parseInt(size / 2) : 0,
              (currentPage - size / 2 > 0
                ? currentPage - parseInt(size / 2)
                : 0) + size,
            )
            .map(v => (
              <Button
                select={currentPage === v}
                key={v}
                onClick={() => {
                  onPaging(v);
                }}
              >
                {v + 1}
              </Button>
            ))
        : pageList
            .slice(
              pageList.length - currentPage < size / 2 + 1 &&
                pageList.length - size,
            )
            .map(v => (
              <Button
                select={currentPage === v}
                key={v}
                onClick={() => {
                  onPaging(v);
                }}
              >
                {v + 1}
              </Button>
            ))}
      {currentPage === pageList.length - 1 ? (
        <></>
      ) : (
        <Button onClick={() => onPaging(currentPage + 1)}>{'다음'}</Button>
      )}
    </>
  );
}

export default PageButton;
