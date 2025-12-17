function search() {
    const input = document.getElementById('user_input').value.trim();

    const err = document.getElementById('alertText');
    const result = document.getElementById('result_msg');

    
    err.classList.add('d-none');
    result.classList.add('d-none');

    let errmsg = "";
    let resultmsg = "";

    
    if (input.length === 0) {
        errmsg = 'Please enter a sentence';
    }
    
    else if (input.length > 1) {
        errmsg = 'Please enter only one word';
    }
    else {
        const ch = input;

        
        if (ch >= '0' && ch <= '9') {
            errmsg = 'Numbers are not allowed';
        }
        
        else if (!((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))) {
            errmsg = 'Special characters are not allowed';
        }
        else {
            
            const vowels = ['a','i','e','o','u','A','E','I','O','U'];
            if (vowels.includes(ch)) {
                resultmsg = `Vowels are: ${ch}`;
            } else {
                errmsg = 'No Vowels Found';
            }
        }
    }

    
    err.innerText = errmsg;
    result.innerHTML = resultmsg;

    
    if (errmsg) {
        err.classList.remove('d-none');
    } else {
        result.classList.remove('d-none');
    }
}
