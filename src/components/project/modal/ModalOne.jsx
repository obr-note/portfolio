import React from "react";

const ModalOne = () => {
  return (
    <div className="popup_informations">
      <div className="description">
        <h3>プロジェクト概要</h3>
        <p>
          ・コミュニティーの主催者と参加者をつなげるプラットフォーム<br/>
          ・登録ユーザー数約20万人、月間アクティブユーザー数約2万人<br/>
          ・DBのテーブル数約200個<br/>
          ・新規機能を次々と追加している段階
        </p>
        <h3>主な開発内容</h3>
        <p>
          毎日新しい機能を追加・改修しています。<br/>
          以下は、私が担当したタスクのうちの一部です。<br/>
          ・コミュニティー編集機能の改修（React、Redux、Redux-sage、Rails）<br/>
          ・管理画面の新規実装（Rails、jQuery）<br/>
          ・ZoomAPI利用の新規開拓（Rails、OAuth）<br/>
          ・Payjpによる決済機能の改修（Rails）<br/>
          ・リマインドメッセージの新規実装（Rails、sidekiq、Redis）<br/>
          ・ログイン関係の改修（Rails、devise）<br/>
          ・参加者班分けアルゴリズムの新規実装（Ruby）<br/>
          ・フリーワード検索の改修（Rails、React、axios）<br/>
          ・カレンダー検索の新規実装（Rails、React、axios）<br/>
          ・無限スクロールの新規実装（React、ReactNative）<br/>
          ・Reactバージョンアップ（ライフサイクルメソッドからhooksへ移行）
        </p>
        <h3>アピールポイント</h3>
        <p>
          ・バックエンド、フロントエンド、インフラまで、幅広く経験しているので、抽象的な要望でも言語化して設計に落とし込み、実装まで一気通貫して一人で作業できること<br/>
          ・ページの表示スピードを意識した、DB設計やSQLクエリのチューニングができること<br/>
          ・社内にノウハウが無い初めてのツールやライブラリでも、公式ページ等の情報を読み解いて実装できること<br/>
        </p>
      </div>
    </div>
  );
};

export default ModalOne;
