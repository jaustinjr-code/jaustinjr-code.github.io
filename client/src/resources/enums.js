// https://masteringjs.io/tutorials/fundamentals/enum
function createEnum(values) {
  const enumObject = {};
  for (const val of values) {
    enumObject[val] = val;
  }
  return Object.freeze(enumObject);
}

export const BlogStatus = createEnum(["loading", "success", "error"]);

export default { BlogStatus };
