function getRandInt(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

function getRandSequence(numberOfRecords) {
    var res = "";
    for (var i = 0; i < numberOfRecords; i++) {
        res += String.fromCharCode(getRandInt(0, 65535));
    }
    console.log(res);
}

function decodeVernam(encoded, key) {
    
}