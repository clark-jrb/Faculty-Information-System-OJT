import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
        window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
        {isVisible && (
            <button onClick={scrollToTop} className='back-to-top-btn p-3'>
                <i className="fa-solid fa-chevron-up"></i>
            </button>
        )}
        </div>
    );
};


export default BackToTopButton;