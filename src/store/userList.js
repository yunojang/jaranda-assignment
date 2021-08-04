import LocalStorage from 'utils/localStorage';
import KEYNAME from 'constant/keyName';
import USERS from 'asset/users.json'

const userList = new LocalStorage(KEYNAME.USERLIST , USERS);

export default userList;
