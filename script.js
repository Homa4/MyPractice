const input = document.querySelector('.enter');
const output = document.querySelector('.answer');
const button = document.querySelector('.action');

button.addEventListener('click', () => {
    const str = input.value.toLowerCase();
    const codes = [];

    for (let i = 0; i < str.length; i++) {
        const code = str.codePointAt(i);
        if (code > 65535) i++
        codes.push(code)
    }
    codes



    output.value = String.fromCodePoint(...codes.reverse()) == str;
    // answer.value = enter.value.toLowerCase() == enter.value.toLowerCase().split('').reverse().join('');
    // console.log(answer.value);
})


