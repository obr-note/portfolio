import React from "react";

const hobbiesContent = [
  { title: "プログラミング", subTitle1: "図書館、ファミレス、カフェに出没します", subTitle2: "" },
  { title: "サッカー", subTitle1: "観戦より自分が体を動かす方が好きです", subTitle2: "" },
  { title: "ラクロス", subTitle1: "いちおう社会人チームに所属しています", subTitle2: "" },
  { title: "地形巡り", subTitle1: "ブラタモリの真似です", subTitle2: "" },
  { title: "アニメ", subTitle1: "いまはNetflixで見てます", subTitle2: "" },
  { title: "本屋", subTitle1: "買うつもりなくても立ち寄ります", subTitle2: "" },
];

const Hobbies = () => {
  return (
    <div className="row">
      {hobbiesContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hobbies;
