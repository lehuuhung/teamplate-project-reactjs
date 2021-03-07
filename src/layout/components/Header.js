import React, { useState } from 'react';
import { Input } from '../../components'

const Header = () => {

    const [searchValue, setSearchValue] = useState();

    const onChangeSearch = event => {
        setSearchValue(event.target.value)
    }

    return (
        <header>
            <div className="head-top">
                <div className="container">
                    <div className="header-ct">
                        <div className="social">
                            <a href="" ><i className="fa fa-facebook" /></a>
                            <a href="" ><i className="fa fa-twitter" /></a>
                            <a href="" ><i className="fa fa-youtube-play" /></a>
                            <a href="" ><i className="fa fa-instagram" /></a>
                        </div>
                        <div className="language">
                            <p className="name"><img src="/images/vnese.png" />Tiếng Việt</p>
                            <ul className="menu-language">
                                <li><a href=""><img src="/images/vnese.png" />Tiếng Việt</a></li>
                                <li><a href=""><img src="/images/english.png" />Tiếng Anh</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="head-middle">
                <div className="container">
                    <div className="header-ct">
                        <div className="logo">
                            <a href="">
                                <img src="/images/logo.png" alt="hung" />
                            </a>
                        </div>
                        <div className="header-search">
                            <Input
                                value={searchValue || ''}
                                onChange={onChangeSearch}
                            />
                        </div>
                        <div className="contact">
                            <div className="item">
                                <div className="img"><a href=""><img src="/images/ic-callct.png" /></a></div>
                                <div className="text"><a href="">0123 123 123</a></div>
                            </div>
                            <div className="item">
                                <div className="img"><a href=""><img src="/images/ic-loginct.png" /></a></div>
                                <div className="text"><a href="">Đăng nhập</a></div>
                            </div>
                            <div className="item">
                                <div className="img"><a href=""><img src="/images/ic-ghct.png" /></a></div>
                                <div className="text"><a href="">Giỏ hàng <span>(0)</span></a></div>
                            </div>
                        </div>
                        <div className="sticker-menu"><span /></div>
                        <div className="bg-black" />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;