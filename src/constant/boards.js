export const BOARDS = [
  {
    id: 0,
    name: '일반게시판',
    category: [],
    access: '모든 사용자가'
  },
  {
    id: 10,
    name: '개발자게시판',
    path: '/developers',
    cName: 'dropdown-link',
    access: '개발자 직군이',
    category: [
      {
        id: 11,
        name: '프론트엔드 게시판',
        access: '프론트엔드 개발자가'
      },
      {
        id: 12,
        name: '백엔드 게시판',
        access: '백엔드 개발자가'
      },
      {
        id: 13,
        name: '서버 게시판',
        access: '서버 개발자가'
      },
    ],
  },
  {
    id: 20,
    name: '운영 게시판',
    path: '/administrators',
    cName: 'dropdown-link',
    access: '운영 팀이',
    category: [
      {
        id: 21,
        name: '고객 지원 게시판',
        access: '고객 지원팀이',
      },
      {
        id: 22,
        name: '인사관리 게시판',
        access: '인사 관리팀이',
      },
    ],
  },
];
