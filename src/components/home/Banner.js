import React from 'react';
import { Link } from 'react-router-dom';

import './Banner.css';
import BelowIcon from '../../assets/icons/below.png';
import Avatar from '../../assets/icons/avatar.png';
import BGBanner from '../../assets/images/bg-banner2.png';

export default function () {
    const bannerStyle = {
        backgroundImage: `url(${BGBanner})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
    }

    return (
        <div className="Banner" style={bannerStyle}>
            <div className="menubar">
                <Link to="/">
                    <div className="brand">
                        <span className="logo">Cloud</span>
                        <span className="name">Sınav Sistemi</span>
                    </div>
                </Link>
                <div className="login">
                    <Link to="login">
                        <img src={Avatar} alt="sign in"/>
                        Giriş
                    </Link>
                </div>
            </div>
            <div className="banner-container">
                <h1 className="head">Online Sınav</h1>
                <p className="content">
                     Çevrimiçi sınava girmenin en iyi yolu
                </p>
            </div>
            <div className="see-below">
                <img onClick={scrollDown} src={BelowIcon} alt="See below" />
            </div>
        </div>
    );
}

function scrollDown() {
    console.log('scroll');
    window.scroll(0, window.screen.availHeight);
}