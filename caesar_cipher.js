var letter = "abcdefghijklmnopqrstuvwxyz";
//declaring letter string
var new_letter = "";
//declaring new letter order string empty
var n = 3;
//declaring shift length
var plain = "Apples"
//declaring plaintext content

function shift(n){
    //shifting function
	for (let i = 0; i < letter.length; i++){
        //for i starts from 0, i goes up to the size of letter string, increased by one each time
		let offset = (i + n) % letter.length;
        //get the remainder of the sum of i and 3 divided by the letter length
		new_letter += letter[offset];
        //the new letter order will be the letter offset (remainder)
	}
}

function encrypt(plain){
    //encryption function, take in plain text
    let cipher = "";
    //declare empty cipher string
    plain = plain.toLowerCase();
    //plain text will be declared to be all lowercase letters
    for (let i = 0; i < plain.length; i++){
        //for i starts from 0, i goes up to the size of plain string, increased by one each time
        let index = letter.indexOf(plain[i]);
        //get the numerical order of the letter in the plain string
        cipher += new_letter[index];
        //cipher will be the new letter in new letter string with the same position we got from the index
    }
    return cipher;
    //return the ciphertext
}
