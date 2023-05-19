import {
  FaUserAlt,
  FaWindowClose,
  FaBars,
} from 'react-icons/fa';

import { AiFillSetting } from 'react-icons/ai';
import { useState } from 'react';

import './HeaderNavBarStyless.css';

function HeaderNavBar() {
  const [menuHide, setMenuHide] = useState(true);
  const [configHide, setConfigHide] = useState(true);

  const handleClikMenu = () => setMenuHide(false);
  const handleClikCloseMenu = () => setMenuHide(true);
  const handleClikConfig = () => setConfigHide(false);
  const handleClikCloseConfig = () => setConfigHide(true);

  return (
    <header className="headerNavBar">
      <div className="c-logo">
        <img src="/logo.svg" alt="logo-cab" />
      </div>
      <nav className={menuHide ? 'navBar hide' : 'navBar'}>
        <ul>
          <li className="navBar__link"><p>Home</p></li>
          <li className="navBar__link"><p>CAB</p></li>
          <li className="navBar__link"><p>Pages</p></li>
        </ul>
      </nav>
      <nav className="configBar">
        <select
          name="currency"
          id="currency"
          className={configHide ? 'configNavBar__set hide' : 'configNavBar__set'}
        >
          <option value="USD">USD</option>
          <option value="COP">COP</option>
        </select>
        <select
          name="language"
          id="language"
          className={configHide ? 'configNavBar__set hide' : 'configNavBar__set'}
        >
          <option value="ENG">ENG</option>
          <option value="ESP">ESP</option>
        </select>
        <div className="headerNavBar__menu">
          {configHide
            ? <div onClick={handleClikConfig}><AiFillSetting /></div>
            : <div onClick={handleClikCloseConfig}><FaWindowClose /></div>}
        </div>
        <div>
          <FaUserAlt />
        </div>
        <div className="headerNavBar__menu">
          {menuHide
            ? <div onClick={handleClikMenu}><FaBars /></div>
            : <div onClick={handleClikCloseMenu}><FaWindowClose /></div>}
        </div>
      </nav>

    </header>
  );
}
export default HeaderNavBar;
