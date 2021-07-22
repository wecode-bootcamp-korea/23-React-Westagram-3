import React from 'react';
import { withRouter } from 'react-router-dom';
import '../src/App.scss';

class App extends React.Component {
  GoLink = memberUrl => {
    this.props.history.push(memberUrl);
  };
  render() {
    return (
      <article className="allWrap">
        <div className="team3Wrap">
          <div className="team3Title">
            <div>Westagram - Team3</div>
          </div>
          <div>
            <div
              onClick={() => this.GoLink('/TaekjunLogin')}
              className="linkBox"
            >
              <div className="profileImgBox">
                <img
                  className="profileImg"
                  src="images/daeung/wecode.png"
                  alt="wecode"
                />
              </div>
              <div>
                <div>Taekjun LoginPage</div>
                <div className="wecode23">wecode 23기</div>
              </div>
            </div>

            <div
              onClick={() => this.GoLink('/JiseonLogin')}
              className="linkBox"
            >
              <div className="profileImgBox">
                <img
                  className="profileImg"
                  src="images/daeung/wecode.png"
                  alt="wecode"
                />
              </div>
              <div>
                <div>Jiseon LoginPage</div>
                <div className="wecode23">wecode 23기</div>
              </div>
            </div>
            <div
              onClick={() => this.GoLink('/JaehyunLogin')}
              className="linkBox"
            >
              <div className="profileImgBox">
                <img
                  className="profileImg"
                  src="images/daeung/wecode.png"
                  alt="wecode"
                />
              </div>
              <div>
                <div>Jaehyun LoginPage </div>
                <div className="wecode23">wecode 23기</div>
              </div>
            </div>
            <div
              onClick={() => this.GoLink('/KayoungLogin')}
              className="linkBox"
            >
              <div className="profileImgBox">
                <img
                  className="profileImg"
                  src="images/daeung/wecode.png"
                  alt="wecode"
                />
              </div>
              <div>
                <div>Kayoung LoginPage</div>
                <div className="wecode23">wecode 23기</div>
              </div>
            </div>
            <div
              onClick={() => this.GoLink('/DaeungLogin')}
              className="linkBox"
            >
              <div className="profileImgBox">
                <img
                  className="profileImg"
                  src="images/daeung/wecode.png"
                  alt="wecode"
                />
              </div>
              <div>
                <div>Daeung LoginPage</div>
                <div className="wecode23">wecode 23기</div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default withRouter(App);
