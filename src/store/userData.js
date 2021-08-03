import LocalStorage from 'utils/localStorage';
import KEYNAME from 'constant/keyName';

const userData = new LocalStorage(KEYNAME.USERDATA);

// userdata 비었을 때, 임의의 admin 계정 추가
if (userData.load() === null) {
  const admin = {
    id: 1,
    userName: 'eric',
    address: '104동 101 호',
    cardNumber: '1234123412341234',
    password: 'a',
    accessMenus: [0, 1, 2],
    isAdmin: 1,
  };

  userData.push(admin);
}

export default userData;
