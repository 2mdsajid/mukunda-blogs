import React from 'react'
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const SocialMediaShare = ({ blogurl, title }: { blogurl: string, title: string }) => {

    const facebookShareLink = `https://www.facebook.com/dialog/share?href=${encodeURIComponent(blogurl)}&display=popup&show_story=true`;
    const twitterShareLink = `https://twitter.com/intent/tweet?url=${blogurl}&text=${encodeURIComponent(title)}`;
    const whatsappShareLink = `https://api.whatsapp.com/send?text=${`${blogurl}`}`;
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogurl)}`;


    return (
        <div className='flex space-x-3'>
            <p className=' text-xl' >share to : </p>
            <a href={facebookShareLink} target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
            </a>
            <a href={twitterShareLink} target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
            </a>
            <a href={whatsappShareLink} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={24} />
            </a>
            {/* <a href={linkedInShareUrl} target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} />
    </a> */}
        </div>
    )
}

export default SocialMediaShare
