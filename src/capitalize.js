const capitalize = (text) => {
  if (text === '') {
    return '';
  }
  const firstChar = text[0].toUpperCase();
  const restSubstring = text.slice(1);
  return `${firstChar}${restSubstring}`;
};

console.log(capitalize('day'));
console.log(capitalize('how are you'));
console.log(capitalize(''));
console.log(capitalize('Come'));

export default capitalize;