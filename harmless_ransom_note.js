

let ransomNote = "ransomNote";

let magazine = "magazine";
//initialise ransomNote and magazine
count = 0;
//a count to catch how many matching letters 

for (let i = 0; i < ransomNote; i++){
    // for loop looking for each character in ransomNote from 0 to its last element
    for(let j = 0; j < magazine; j++){
        // for loop looking for each character in ransomNote from 0 to its last element
        if (ransomNote[i] != magazine[j]){
            //if the letter from ransomnote and magazine do not match
            count = 0;
            //count will remain 0
            break;
            //break the loop
        }
        else if (ransomNote[i] == magazine [j]){
            //elsse if the letter from ransomnote and magazine do match
            count += 1;
            //count will increase by 1
            continue;
            //continue the loop to look at other letter pairs until it loop through all letters in both sets.
        }
    }
}

if (count == magazine){
    //if the count is the size of magazine string, meaning all element matches the letters in ransomnote
    //it can construct a note so return true
    return true;
}

else {
    //otherwise, if the count is smaller than the size of magazine string, meaning all element matches the letters in ransomnote
    return false;
    //return false since it cannot be used to construct a note.
}
