const capitalize = (text) => {
  if (text === '') {
    return '';
  }
  return `${text[0].toUpperCase()}${text.slice(1)}`;
};


export default capitalize;
