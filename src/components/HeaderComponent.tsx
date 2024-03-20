import React, { useState, useEffect, useRef } from 'react';
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';


const HeaderComponent: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = (event: MouseEvent) => {
    if (menuRef.current && buttonRef.current) {
      if (!menuRef.current.contains(event.target as Node) && !buttonRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
  };

  const handleButtonClick = () => {
    toggleMenu();
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', closeMenu);
    } else {
      document.removeEventListener('mousedown', closeMenu);
    }

    return () => {
      document.removeEventListener('mousedown', closeMenu);
    };
  }, [isMenuOpen]);

  const redirecionarParaSobre = (rota: string) => {
    navigate(rota);
  };

  return (
    <div className="header-container">

    <div className='header'>
      <div className="menu-button" ref={buttonRef} onClick={handleButtonClick}>
        ☰
      </div>
      <section className="head-1">
        <h1 className="titulo-esquerda">
        </h1>
        <nav ref={menuRef} className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="lista-direita lista">
            <li onClick={() => redirecionarParaSobre('/')} className='header-list-hover'>Home</li>
            <li onClick={() => redirecionarParaSobre('/projetos')} className='header-list-hover' >Projetos</li>
            <li onClick={() => redirecionarParaSobre("/planos")} className='header-list-hover' >Planos</li>
            <li onClick={() => redirecionarParaSobre("/login")} className='header-list-hover' >Login</li>
          </ul>
        </nav>
      </section>
    </div>
    </div>
  );
};

export default HeaderComponent;
