function calculatePentagonArea() {
    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem = getInputValueById('pentagon-apothem');
    console.log(perimeter, apothem);

    const area = 0.5 * perimeter * apothem;

    setInnerTextId('pentagon-area',area);

}
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextId(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;

}