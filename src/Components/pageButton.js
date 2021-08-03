import React, { useCallback, useEffect, useState } from 'react';
import Button from './button';

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
          Small
          onClick={() => {
            onPaging(currentPage - 1);
          }}
        >
          {'이전'}
        </Button>
      ) : (
        <></>
      )}
      {pageList.length < size
        ? pageList.map(v => (
            <>
              <Button
                key={v}
                Small
                onClick={() => {
                  onPaging(v);
                }}
              >
                {v}
              </Button>
            </>
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
              <>
                <Button
                  key={v}
                  Small
                  onClick={() => {
                    onPaging(v);
                  }}
                >
                  {v + 1}
                </Button>
              </>
            ))
        : pageList
            .slice(
              pageList.length - currentPage < size / 2 + 1 &&
                pageList.length - size,
            )
            .map(v => (
              <>
                <Button
                  key={v}
                  Small
                  onClick={() => {
                    onPaging(v);
                  }}
                >
                  {v + 1}
                </Button>
              </>
            ))}
      {currentPage === pageList.length - 1 ? (
        <></>
      ) : (
        <Button Small onClick={() => onPaging(currentPage + 1)}>
          {'다음'}
        </Button>
      )}
    </>
  );
}

export default PageButton;
