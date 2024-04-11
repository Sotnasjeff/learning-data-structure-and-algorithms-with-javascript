//reverse a string

function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return str
    }

    const helper = [];

    for(let i = str.length -1 ; i >= 0; i--) {
        helper.push(str[i]);
    }

    return helper.join('')
}

console.log(reverse("Hello World"))