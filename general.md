if (typeof input !== "string") {
       console.log("Input must be a string");
    }

    let vowelsFound = [];
    let errors = [];

    for (let char of input) {
        let lowerChar = char.toLowerCase();

        
        if (/[a-z]/i.test(char)) {
            switch (lowerChar) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    vowelsFound.push(char);
                    break;
                default:
    
                    break;
            }
        } 
    
        else {
            errors.push(char);
        }
    }

    
    console.log(`Input: "${input}"`);
    if (vowelsFound.length > 0) {
        console.log(`Vowels found: ${vowelsFound.join(", ")}`);
        console.log(`Total vowels: ${vowelsFound.length}`);
    } else {
        console.log("No vowels found.");
    }

    if (errors.length > 0) {
        console.log(`Invalid characters (numbers/specials): ${errors.join(", ")}`);
    }


    const cVowels = (s) => {
    const vowelsMap = new Map([
        ["a", true], ["e", true], ["i", true], ["o", true], ["u", true],
        ["A", true], ["E", true], ["I", true], ["O", true], ["U", true]
    ]);

    let count = 0;
    for (const char of s) {
        if (vowelsMap.has(char)) {
            count++;
        }
    }
    return count;
};

const s = "Hello World";
console.log(cVowels(s));



const vowels = "aeiouAEIOU";
            let hasVowel = false;
            let hasNumber = false;
            let hasSpecial = false;

            for (const ch of input) {
                if (ch === " ") continue; 

                switch (true) {
                    case (vowels.includes(ch)):
                        hasVowel = true;
                        break;
                    case (!isNaN(ch) && ch.trim() !== ""):
                        hasNumber = true;
                        break;
                    case (/[^a-zA-Z0-9]/.test(ch)):
                        hasSpecial = true;
                        break;
                }
            }

            
            if (hasVowel || hasNumber || hasSpecial) {
                let errors = [];
                if (hasVowel) errors.push("Vowels are not allowed");
                if (hasNumber) errors.push("Numbers are not allowed");
                if (hasSpecial) errors.push("Special characters are not allowed");

                errmsg.innerHTML =
                    `<p class="error">${errors.join("<br>")}</p>`;
                    err.classList.remove('d-none');
            } else {
                resultmsg.innerHTML =
                    `<p class="success">Valid word </p>`;
                    result.classList.remove('d-none');
            }