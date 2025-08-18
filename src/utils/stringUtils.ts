const animateString = async (_string: string, callback: (value: string) => void, delay = 100) => {
  let animated = '';
  for (let i = 0; i < _string.length; i++) {
    animated += _string[i];
    callback(animated);
    await new Promise(resolve => setTimeout(resolve, delay));
  }
};

export default animateString