export function isUserName(asValue) {
  var regExp = /[A-Za-z0-9]{4,}/;
  return regExp.test(asValue) ? true : false; //형식에 맞는 경우 true 리턴
}
//숫자,영문,특수문자 포함 8~16자리
export function isPassword(asValue) {
  var regExp =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  return regExp.test(asValue) ? true : false; //형식에 맞는 경우 true 리턴
}
