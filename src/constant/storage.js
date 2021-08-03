import { USERDATA_KEYNAME } from './storageKey';
import LocalStorage from 'utils/localStorage';

const STORAGE = {
  userdata: new LocalStorage(USERDATA_KEYNAME),
}

// userdata 비어있다면, 첫 계정으로 `임의의 admin` 추가
const { userdata } = STORAGE;

if (userdata.load() === null) {
  const admin = {"id":1,"userName":"admin","address":"908667","cardNumber":"1234123412341234","password":"1234","role":1,"isAdmin":1};
  userdata.push(admin);
}

export default STORAGE;