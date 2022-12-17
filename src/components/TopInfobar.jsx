import { FaDiscord, FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { MdCall, MdLocationOn } from 'react-icons/md';

const allInfo = [
  {
    id:'1',
    icon: <FiMail className='w-4 h-4'/>,
    content: 'dreamtrip@gmail.com'
  },
  {
    id:'2',
    icon: <MdCall className='w-4 h-4'/>,
    content: '12310345'
  },
  {
    id:'3',
    icon: <MdLocationOn className='w-4 h-4'/>,
    content: 'Broadway & Morris St, New York.'
  }
]
export default function TopInfobar(){
  return(
    <div className='container-fluid hidden md:block px-2 sm:px-6 lg:px-8 mx-auto bg-black py-3'>
      <div className='grid grid-cols-[4fr_1fr] text-white'>
        <div className='flex gap-5 items-center text-sm'>
          {
            allInfo.map(info => (
              <div key={info.id} className='flex gap-2 items-center'> {info.icon} {info.content}</div>
            ))
          }
        </div>
        <div className='flex justify-end items-center gap-3'>
          <FaTwitter className='w-4 h-4'/>
          <FaFacebook className='w-4 h-4'/>
          <FaDiscord className='w-4 h-4'/>
          <FaInstagram className='w-4 h-4'/>
          <FaLinkedinIn className='w-4 h-4'/>
        </div>
      </div>
    </div>
  )
};

