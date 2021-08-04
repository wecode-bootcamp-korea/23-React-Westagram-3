import React from 'react';
import { INFO } from './FooterData';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footerWrap">
          <ul className="footerList">
            {INFO.map(el => {
              return (
                <li key={el.id}>
                  <a href="" target="_blank">
                    {el.content}
                  </a>
                </li>
              );
            })}
          </ul>
          <span>© 2021 INSTAGRAM FROM FACEBOOK</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
