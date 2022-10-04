import React, { useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const ScrollBtn = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 300 ? setVisible(true) : setVisible(false);
        });
        
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
   
    
    return (
        <>
            {
                visible && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-6 rounded-full bg-black right-6 bg- z-50 p-4"
                    >
                        {/* <BsArrowUpCircle className='text-white h-5 w-5 mb-2' /> */}
                        
                        <BsFillArrowUpCircleFill className='text-white h-5 w-5'/>
                    </button>
                )
            }
        </>
    );
};

export default ScrollBtn;