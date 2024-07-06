"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './Header.css';

const Header = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const navRef = useRef(null);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsNavVisible(false);
        }
    };

    useEffect(() => {
        if (isNavVisible) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isNavVisible]);

    return (
        <header className="header">
            <div className="logo">
                <img src="/menu-icon.svg" alt="menu" className="icon" onClick={toggleNav} />
                <Link href="/"><img src="/logo.png" alt="Summit Features" /></Link>
            </div>
            <nav ref={navRef} className={`nav ${isNavVisible ? 'active' : ''}`}>
                <ul>
                    <li><Link href="/about">ABOUT</Link></li>
                    <li><Link href="/portfolio">PORTFOLIO</Link></li>
                    <li><Link href="/partners">PARTNERS</Link></li>
                    <li><Link href="/contact">CONTACT</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
