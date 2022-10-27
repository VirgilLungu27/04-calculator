const inputs = Array.from(document.getElementsByTagName('input'))
const textArea = Array.from(document.getElementsByTagName('textarea'))

for (let input in inputs) {
    inputs[input].addEventListener('click', () => {
        textArea[0].value = inputs[input].value;
    })
}