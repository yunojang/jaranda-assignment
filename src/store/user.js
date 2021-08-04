import LocalStorage from 'utils/localStorage';
import KEYNAME from 'constant/keyName';

const userStorage = new LocalStorage(KEYNAME.USER);

export default userStorage;
