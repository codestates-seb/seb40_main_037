export const ENG_REGEX = /^[a-zA-Z-+]*$/;
export const EMAIL_REGEX = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/;
export const PW_REGEX =
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&amp;\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&amp;\\(\\)\-_=+]).{8,20}$/; // 최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
