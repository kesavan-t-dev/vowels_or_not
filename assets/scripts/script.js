function search() {
    const input = document.getElementById('user_input').value.trim();

    const err = document.getElementById('alertText');
    const result = document.getElementById('result_msg');

    const vowels = ['a', 'i', 'e', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    err.classList.add('d-none');
    result.classList.add('d-none');

    let errmsg = "";
    let resultmsg = "";

    
    if (input.length === 0) {   
        errmsg = 'Please enter a sentence';
    } else if (/[^a-zA-Z0-9\s]/.test(input)) {
        errmsg = 'Special characters are not allowed';
    } else if (/\d/.test(input)) {
            errmsg = 'Numbers are not allowed';
    } else if (input.length > 1) {
            errmsg = 'Please enter only one word';
    } else if (vowels.includes(input)) {
            resultmsg = `Vowels are: ${input}`;
    } else {
        errmsg = 'No Vowels Found';
    }
       
    
    err.innerText = errmsg;
    result.innerHTML = resultmsg;

    
    if (errmsg) {
        err.classList.remove('d-none');
    } else {
        result.classList.remove('d-none');
    }
}
