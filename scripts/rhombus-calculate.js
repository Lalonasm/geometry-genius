// function calculateRhombusArea(){
// const rhombusLongDiagonalInput = document.getElementById('rhombus-longDiagonal');
// const rhombusLongDiagonalText = rhombusLongDiagonalInput.value;
// const longDiagonal = parseFloat(rhombusLongDiagonalText);
// console.log(rhombusLongDiagonalText);
// const longDiagonal = getRhombusLongDiagonal();
// }


// function getRhombusLongDiagonal (){
//     const rhombusLongDiagonalInput = document.getElementById('rhombus-longDiagonal');
//     const rhombusLongDiagonalText = rhombusLongDiagonalInput.value;
//     const longDiagonal = parseFloat(rhombusLongDiagonalText);
//     return longDiagonal;
// }
function calculateRhombusArea() {


    const longDiagonal = getInputValueById('rhombus-longDiagonal');
    console.log('longDiagonal value :', longDiagonal);

    const shortDiagonal = getInputValueById('rhombus-shortDiagonal');
    console.log('shortDiagonal value :', shortDiagonal);

    const area = 0.5 * longDiagonal * shortDiagonal;
    console.log('area of rhombus:', area);

    getInnerTextById('rhombus-area',area)

}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;


}

function getInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;


}