function getBigONotation(code) {
  const loops = code.match(/for|while|do-while|forEach|map|filter/g);
  const loopCount = loops ? loops.length : 0;

  if (loopCount === 0) {
    return "O(1)";
  } else if (loopCount === 1) {
    return "O(n)";
  } else {
    return `O(n^${loopCount})`;
  }
}