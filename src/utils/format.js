export const cardNumberFormat = string => {
  return `${sliceFourString(string, 0)}-${sliceFourString(
    string,
    1,
  )}-${sliceFourString(string, 2)}-${sliceFourString(string, 3)}`;
};
const sliceFourString = (string, n) => {
  return string.slice(n * 4, n * 4 + 4);
};
