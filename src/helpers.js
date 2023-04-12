// email & password validation
export const checkEmailValidation = str => {
  // const regex = /^\w+@\w+$/;
  // return regex.test(str);
  return str.includes("@");
};
export const checkPasswordValidation = str => {
  const regex = /^\w{8,}$/;
  return regex.test(str);
};

// login check
export const isLogin = () => window.localStorage.getItem("access_token");
