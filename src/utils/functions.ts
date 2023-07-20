/* PARSING HTML----------------------------- */
import parse from 'html-react-parser';
export const ParsedElement = (str: string) => {
    let newstr = str;
    let parsedHtml = null;

    if (newstr) {
        parsedHtml = parse(newstr);
    }

    return parsedHtml;
};


// get and set unique user id on first visit
export const setUniqueUserId = async () => {
    let uniqueid = localStorage.getItem('uniqueid')
    if (uniqueid || !uniqueid) {
        if (uniqueid) {
            uniqueid = JSON.parse(uniqueid);
        }
        if (uniqueid === null || uniqueid === 'null' || uniqueid === 'undefined') {
            console.log('null')
            const { v4: uuidv4 } = require('uuid');
            const vvid = uuidv4(); // generates a version 4 UUID 
            localStorage.setItem(`uniqueid`, JSON.stringify(vvid));
            return vvid;
        }
        return uniqueid;
    }
}