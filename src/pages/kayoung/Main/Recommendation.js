import React from 'react';
import { RECOMMEND } from './RecommendationData';

class Recommendation extends React.Component {
  render() {
    return (
      <div className="recommendWrap">
        <div className="recommendTitle">
          <strong>회원님을 위한 추천</strong>
          <span className="findAll">모두 보기</span>
        </div>
        <ul className="recommendLists">
          <li>
            <div className="recommendContainer">
              <div className="effectWrap">
                {RECOMMEND.map(el => {
                  return (
                    <>
                      <div key={el.id}>
                        <img
                          alt="Recommended accounts profile"
                          src={el.src}
                          className="profileImage"
                        />
                      </div>
                      <div className="recommendContent">
                        <span className="titleSpan">{el.name}</span>
                        <span className="descSpan">{el.text}</span>
                      </div>
                    </>
                  );
                })}
              </div>
              <button type="button" className="statusButton">
                팔로우
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Recommendation;
