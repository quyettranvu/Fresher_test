export const calculateSum = (values: string[]) => {
  if (values.some((value) => value === "")) {
    return NaN;
  }
  return values.reduce((acc, curr) => acc + Number(curr), 0);
};

export const isTenExist = (values: string[]) => {
  return values.some((value) => Number(value) === 10);
};

export const findDivisibleBy3 = (values: string[]) => {
  return values.filter((value) => value !== "" && Number(value) % 3 === 0)
    .length;
};

export const findDivisibleBy7 = (values: string[]) => {
  return values.filter((value) => value !== "" && Number(value) % 7 === 0);
};
