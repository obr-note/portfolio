import React from "react";

const certificationContent = [
  { meta: "2016年2月", metaInfo: "甲種火薬類取扱保安責任者" },
  { meta: "2016年8月", metaInfo: "危険物取扱者乙4" },
  { meta: "2017年2月", metaInfo: "危険物取扱者乙1" },
  { meta: "2017年12月", metaInfo: "露天採掘技術保安管理士" },
  { meta: "2017年12月", metaInfo: "公害防止管理者(一般粉じん)" },
  { meta: "2018年2月", metaInfo: "日商簿記3級" },
  { meta: "2018年3月", metaInfo: "3級FP技能士" },
  { meta: "2018年4月", metaInfo: "QC検定2級" },
  { meta: "2018年5月", metaInfo: "基本情報技術者" },
  { meta: "2019年2月", metaInfo: "甲種火薬類製造保安責任者" },
  { meta: "2019年3月", metaInfo: "TOEIC725点" },
  { meta: "2019年6月", metaInfo: "第1種衛生管理者" },
  { meta: "2019年6月", metaInfo: "ビジネス実務法務2級" },
  { meta: "2019年7月", metaInfo: "測量士補" },
];

const Certification = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {certificationContent.map((val, i) => (
        <li key={i} style={{ flex: "none", maxWidth: "none" , marginRight: "36px"}}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Certification;
