import React from "react";

const educationContent = [
  {
    year: "2015.3 卒業",
    degree: "理学部地圏環境化学科",
    institute: "東北大学",
    details: `地質学という地面の下の地層や岩石を研究していました。
        野外に出て露頭を観察したり、地形図と比較したり、岩石サンプルを採取して成分を調べたりしました。
        課外活動では体育会のラクロス部に所属していました。`,
  },
  {
    year: "2011.3 卒業",
    degree: "普通科",
    institute: "宇都宮高等学校",
    details: `栃木県の公立進学校に通っていました。
        部活動は、小学生から始めたサッカーをしていました。`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/book.png" alt="icon" />
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
