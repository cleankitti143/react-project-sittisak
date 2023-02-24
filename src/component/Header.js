import React from 'react'
import { Link, Route } from 'react-router-dom'
import Logo from '../images/homepage/logo.png'
import { FaBars, FaSearch, FaShoppingCart, FaUserPlus } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="header flex items-center justify-between py-3 xl:mx-20">
      <div className="menu-btn flex">
        <div className="mx-4">
          <FaBars />
        </div>
        <div>
          <FaSearch />
        </div>
      </div>

      <div className="logo">
        <div>
            <img src={Logo} alt="Microsoft" />
        </div>

        <ul>
          <li>
             <a target="_blank" href="https://www.microsoft.com/th-th/microsoft-365">microsoft-365</a>          
          </li>
          <li>          
             <a target="_blank" href="https://www.microsoft.com/th-th/microsoft-teams/group-chat-software?rtc=1">Teams</a>
          </li>
          <li>
             <a target="_blank" href="https://www.microsoft.com/th-th/windows/?r=1">Windows</a> <li></li>
          </li>
          <li>
             <a target="_blank" href="https://www.microsoft.com/th-th/surface">Surface</a> <li></li>
          </li>
          <li>
             <a target="_blank" href="https://www.xbox.com/th-TH/">Xbox</a> <li></li>
          </li>
          <li>
            <a target="_blank" href="https://support.microsoft.com/th-th">การสนับสนุน</a> <li></li>
          </li>
        </ul>
      </div>

      <div className="cart flex">
        <div>
          <FaShoppingCart />
        </div>
        <div className="mx-4">
          <FaUserPlus />
        </div>
      </div>

      <div className="sign-in">
        <ul>
          <li>All Microsoft</li>
          <li>Search</li>
          <li>Cart</li>
          <li>
            <a target="_blank" href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1676600433&rver=7.3.6960.0&wp=MBI_SSL&wreply=https%3a%2f%2fwww.microsoft.com%2frpsauth%2fv1%2faccount%2fSignInCallback%3fstate%3deyJSdSI6Imh0dHBzOi8vd3d3Lm1pY3Jvc29mdC5jb20vdGgtdGgvIiwiTGMiOiIxMDU0IiwiSG9zdCI6Ind3dy5taWNyb3NvZnQuY29tIn0&lc=1054&id=74335&aadredir=0">ลงชื่อเข้าใช้</a> <li></li>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header