function decodeJwt(token) {
    const base64Url = token.split('.')[1];
    const result = decodeURIComponent(escape(window.atob(base64Url))) //Type String 
    //return JSON.parse(result) // Type Object

    return result
};