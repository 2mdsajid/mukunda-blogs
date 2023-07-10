import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-col space-y-2 lg:space-y-4 items-center">
      <Link href="https://twitter.com">
        <span className=" text-white font-bold py-1 rounded">
          <FaTwitter size={24} />
        </span>
      </Link>
      <Link href="https://facebook.com">
        <span className=" text-white font-bold py-1 rounded">
          <FaFacebook size={24} />
        </span>
      </Link>
      <Link href="https://instagram.com">
        <span className=" text-white font-bold py-1 rounded">
          <FaInstagram size={24} />
        </span>
      </Link>
      <Link href="https://github.com">
        <span className=" text-white font-bold py-1 rounded">
          <FaGithub size={24} />
        </span>
      </Link>
      <Link href="https://linkedin.com">
        <span className=" text-white font-bold py-1 rounded">
          <FaLinkedin size={24} />
        </span>
      </Link>
      <div className='w-[0.2rem] h-10 bg-white -mt-2'></div>
    </div>
  );
};

export default SocialMediaLinks;
