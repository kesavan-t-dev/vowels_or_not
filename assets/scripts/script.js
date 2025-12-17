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
    
    else if (input.includes(" ")) { 
        errmsg = 'Please enter only one word';
    } 
    else {
       
        let hasNumber = false;
        let hasSpecial = false;

        for (const ch of input) {
            if (ch >= '0' && ch <= '9') {
                hasNumber = true;
                break; 
            }
            
            if (!((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))) {
                hasSpecial = true;
                break;
            }
        }

        if (hasNumber) {
            errmsg = 'Numbers are not allowed';
        } 
        else if (hasSpecial) {
            errmsg = 'Special characters are not allowed';
        } 
        else {
           
            const values = [];
            const vowels = ['a','i','e','o','u','A','E','I','O','U'];

            for (const ws of input) {
                if (vowels.includes(ws)) {
                    values.push(ws);
                }
            }

            if (values.length > 0) {
                resultmsg = `Vowels are: ${values.join(', ')}`;
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
