export const BOARDS = [
  {
    id: 0,
    name: '일반게시판',
    category: [],
  },
  {
    id: 10,
    name: '개발자게시판',
    path: '/developers',
    cName: 'dropdown-link',
    category: [
      {
        id: 11,
        name: '프론트엔드 게시판',
      },
      {
        id: 12,
        name: '백엔드 게시판',
      },
      {
        id: 13,
        name: '서버 게시판',
      },
    ],
  },
  {
    id: 20,
    name: '운영 게시판',
    path: '/administrators',
    cName: 'dropdown-link',
    category: [
      {
        id: 21,
        name: '고객 지원 게시판',
      },
      {
        id: 22,
        name: '인사관리 게시판',
      },
    ],
  },
];
