// console.log('connected')
function calculateTriangleArea() {
    // get base value;
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base)
//get height value;
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeight.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);
// calculate triangle area value
    const area = .5*base*height;
    console.log( 'area of the triangle: ' ,area);

    // triangle area display
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}