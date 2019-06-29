export default function swapColorsController() {
    const swapButton = document.getElementsByClassName('main__workspace__colors__swap-button')[0];
    document.getElementById('curr-color').style.backgroundColor = getComputedStyle(document.getElementById('curr-color')).backgroundColor;

    function swapColorsHandler() {
        const currentColor = document.getElementById('curr-color');
        const prevColor = document.getElementById('prev-color');
        const temp = getComputedStyle(prevColor).backgroundColor;
        prevColor.style.backgroundColor = getComputedStyle(currentColor).backgroundColor;
        currentColor.style.backgroundColor = temp;

    }
    return swapButton.addEventListener('mouseup', swapColorsHandler);
}
