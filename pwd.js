function encrypt(data) {
    var enccrptedStr = '';
    for (let i = 0; i < data.length; i++) {
        enccrptedStr += data.charCodeAt(i);
    }
    return enccrptedStr
}

module.exports.encrypt = encrypt