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

// to extract url from yt video url
export function extractVideoId(url: string): string {
    const regExp =
        /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2]) {
        return match[2];
    } else {
        throw new Error('Invalid YouTube URL');
    }
}

// get file extension
export function getFileType(url: string): string {
    const fileExtension = url.split('.').pop()?.toLowerCase();

    if (fileExtension) {
        switch (fileExtension) {
            case 'mp3':
                return 'audio';
            case 'mp4':
            case 'mov':
            case 'avi':
                return 'video';
            case 'jpg':
            case 'jpeg':
            case 'png':
                return 'image';
            default:
                return 'Unknown';
        }
    }

    return 'Unknown';
}
