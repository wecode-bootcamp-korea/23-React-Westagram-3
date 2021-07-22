import React from 'react';
import './Main.scss';
import Nav from './../../../components/Nav/Nav';

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        {/* <nav>
          <div className="logoBox">
            <i className="fab fa-instagram"></i>
            <h1 className="logo">westagram</h1>
          </div>
          <div className="searchBox">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="검색" />
          </div>
          <div className="menuBox">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="탐색"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="하트"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png
                "
              alt="개인페이지"
            />
          </div>
        </nav> */}

        <main>
          <div className="feeds">
            <article>
              <div className="writerBox center">
                <img
                  className="writerProfile"
                  src="https://cdn.fanzeel.com/images/201906/5d0b3ea72915b.jpg"
                  alt="우디 사진"
                />
                <span className="boldFont">wooooo_dy</span>
                <img
                  className="dot"
                  src="/images/jiseon/dott.PNG"
                  alt="말줄임표사진"
                />
              </div>
              <img
                className="mainPhoto"
                src="https://i.pinimg.com/474x/4f/8e/91/4f8e91563c85567bcd7fb773d13632c4.jpg"
                alt="토이스토리 사진"
              />
              <div className="functionBox center">
                <i className="fas fa-heart"></i>
                <i className="far fa-comment"></i>
                <i className="fas fa-external-link-alt"></i>
                <i className="far fa-bookmark"></i>
              </div>
              <div className="numberOfLikesBox center">
                <div className="numberOfLikes">
                  <img
                    src="https://m.figurepresso.com/web/product/big/201906/ce6c15012ad4a18b8283afcf3e3f16bc.jpg"
                    alt="포키사진"
                  />
                  <p className="boldFont">FOR_KY님 외 4명이 좋아합니다</p>
                </div>
                <div className="commentViewBox">
                  <div className="commentFlex">
                    <span className="boldFont">wooooo_dy</span>
                    <li className="commentStyle">댓글1</li>
                  </div>
                  <div className="commentFlex">
                    <span className="boldFont">wooooo_dy</span>
                    <li className="commentStyle">댓글2</li>
                  </div>
                </div>
              </div>
              <div className="commentBox">
                <input
                  className="lightFontColor comment"
                  type="text"
                  placeholder=" 댓글 달기..."
                />
                <button className="commentBtn">게시</button>
              </div>
            </article>
          </div>

          <div className="mainRight">
            <div className="profileBox">
              <img
                className="profileImg"
                src="https://openimage.interpark.com/goods_image_big/4/0/0/7/6806514007_l.jpg"
                alt="알린사진"
              />
              <div>
                <span className="boldFont">little_green_alien</span>
                <p className="lightFontColor">WeCode | 위코드</p>
              </div>
            </div>
            <div className="storiesBox">
              <div className="storiesMenu">
                <span className="lightFontColor">스토리</span>
                <span className="boldFont">모두 보기</span>
              </div>
              <div className="storyProfileBox">
                <ul className="storyProfileBox">
                  <li className="storyProfile">
                    <div className="gradient">
                      <img
                        src="https://openimage.interpark.com/goods_image_big/4/0/0/7/6806514007_l.jpg"
                        alt="알린사진"
                      />
                    </div>
                    <div>
                      <span className="boldFont">아이디</span>
                      <p className="lightFontColor">14분 전</p>
                    </div>
                  </li>
                  <li className="storyProfile">
                    <div className="gradient">
                      <img
                        src="https://openimage.interpark.com/goods_image_big/4/0/0/7/6806514007_l.jpg"
                        alt="알린사진"
                      />
                    </div>
                    <div>
                      <span className="boldFont">아이디</span>
                      <p className="lightFontColor">14분 전</p>
                    </div>
                  </li>
                  <li className="storyProfile">
                    <div className="gradient">
                      <img
                        src="https://openimage.interpark.com/goods_image_big/4/0/0/7/6806514007_l.jpg"
                        alt="알린사진"
                      />
                    </div>
                    <div>
                      <span className="boldFont">아이디</span>
                      <p className="lightFontColor">14분 전</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="recommendationBox">
                <div className="recommendationMenu">
                  <span className="lightFontColor">회원님을 위한 추천</span>
                  <span className="boldFont">모두 보기</span>
                </div>
                <ul>
                  <li className="recommendationList">
                    <img
                      src="https://openimage.interpark.com/goods_image_big/4/0/0/7/6806514007_l.jpg"
                      alt="알린사진"
                    />
                    <div>
                      <span className="boldFont">아이디</span>
                      <p className="lightFontColor">아이디님 외 2명이 ...</p>
                    </div>
                    <span className="blueFont">
                      <a hrdf="#">팔로우</a>
                    </span>
                  </li>
                  <li className="recommendationList">
                    <img
                      src="https://openimage.interpark.com/goods_image_big/4/0/0/7/6806514007_l.jpg"
                      alt="알린사진"
                    />
                    <div>
                      <span className="boldFont">아이디</span>
                      <p className="lightFontColor">아이디님 외 2명이 ...</p>
                    </div>
                    <span className="blueFont">
                      <a hrdf="#">팔로우</a>
                    </span>
                  </li>
                  <li className="recommendationList">
                    <img
                      src="https://openimage.interpark.com/goods_image_big/4/0/0/7/6806514007_l.jpg"
                      alt="알린사진"
                    />
                    <div>
                      <span className="boldFont">아이디</span>
                      <p className="lightFontColor">아이디님 외 2명이 ...</p>
                    </div>
                    <span className="blueFont">
                      <a hrdf="#">팔로우</a>
                    </span>
                  </li>
                </ul>
                <div className="infoBox">
                  <p>
                    westagram 정보,지원,홍보 센터,API,
                    <br />
                    채용 정보,개인정보처리방침,약관,
                    <br />
                    디렉터리,프로필,해시태그,언어
                  </p>

                  <span>ⓒ 2021 WESTAGRAM</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Main;
