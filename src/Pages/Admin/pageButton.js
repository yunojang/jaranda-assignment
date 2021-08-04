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

function PageButton({ page, setPage, items, setItems, limit, size }) {
  const [pageList, setPageList] = useState([]);

  const onPaging = useCallback(
    page => {
      setPage(page);
      setItems(items.slice(page * limit, page * limit + limit));
    },
    [items, limit, page],
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
  }, [items]);

  return (
    <>
      {page ? (
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
      {pageList.length < size
        ? pageList.map(v => (
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
        : !(pageList.length - page < size / 2 + 1)
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
            .slice(
              pageList.length - page < size / 2 + 1 && pageList.length - size,
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
            ))}
      {page >= pageList.length - 1 ? (
        <></>
      ) : (
        <Button onClick={() => onPaging(page + 1)}>{'다음'}</Button>
      )}
    </>
  );
}

export default PageButton;
