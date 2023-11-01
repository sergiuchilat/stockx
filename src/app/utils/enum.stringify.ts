export const enumStringify = (EnumObject) => {
  const result = (Object.keys(EnumObject) as (keyof typeof EnumObject)[]).map(
    (key) => {
      return EnumObject[key];
    },
  );
  return result;
};
