function calculateRectangleArea() {
  //get length
  const rectangleLengthInput = document.getElementById('rectangle-length');
  const rectangleLengthText = rectangleLengthInput.value;
  const length = parseFloat(rectangleLengthText);
  // console.log(length)
  // get width
  const rectangleWidthInput = document.getElementById('rectangle-width');
  const rectangleWidthText = rectangleWidthInput.value;
  const width = parseFloat(rectangleWidthText);
  // console.log(width);
  // calculate rectangle value
  const area = length*width;
  console.log('area of rectangle:',area);
  //rectangle area display
  const rectangleAreaSpan = document.getElementById('rectangle-area');
  rectangleAreaSpan.innerText=area;
  // console.log(rectangleAreaSpan);
}