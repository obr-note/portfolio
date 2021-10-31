import React from "react";

const experienceContent = [
  {
    year: "2020.4 - 現在",
    position: "エンジニア",
    compnayName: "株式会社つなげーと",
    details: `従業員数名のシード期のスタートアップ企業です。
      自社でtoC向けのプラットフォームを運営しています。
      業務内容としては、Ruby on Railsを書く時間が約6割、Reactを書く時間が約4割です。
      フルタイムで稼働しているエンジニアは自分だけです。
      ビジネスの試行錯誤を早く回すため開発スピードが重視されています。
      このため、抽象的な要望が多く、自身で設計に落とし込んで実装しています。`,
  },
  {
    year: "2015.4 - 2020.3",
    position: "技術系総合職",
    compnayName: "住友大阪セメント株式会社",
    details: `従業員数約3,000名（グループ会社含む）の住友グループのセメント会社です。
      セメントの原材料となる石灰石を供給する鉱山の管理部門にいました。
      最初の3年間は、山口県の鉱山現場にて生産管理や品質管理の業務に従事しました。
      次の2年間は、東京の本社にて、全国各地の地質調査や鉱業権の管理の仕事に従事しました。`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/briefcase.png" alt="icon" />
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
