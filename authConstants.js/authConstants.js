export const emailRegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;
export const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$/; // At least 1 Uppercase; //At least 1 Lowercase; //At least 1 Number; //At least 1 Symbol, symbol allowed --> !@#$%^&*_=+-; //Min 8 chars
