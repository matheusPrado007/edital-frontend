import React from 'react';
import '../styles/Footer.css';

const FooterComponent: React.FC = () => {
  return (
    <section className='footer'>
      <div className="container-footer clearfix">
        <div className="footer-content">
          <p>&copy; Edital</p>
        </div>
      </div>
    </section>
  );
};

export default FooterComponent;
