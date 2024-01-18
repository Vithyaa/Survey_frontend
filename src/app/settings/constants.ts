import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root',
})
export class AppConstants {


    japQuestions: any = [
        { id: 1, topic: "受容性", question: "私はコントロールできない要因を見分ける能力と、理知的に制限の理由を突き止める能力を区別し、「真の受容性」とは感情的な反応ではなく、認知的な理解力によるものだとわかっている。" },
        { id: 2, topic: "向上心", question: "私は、成長のための挑戦を受け入れる意欲、失敗を恐れる気持ちをコントロールする能力、そしてセルフケアへの一貫した取り組みを綿密に評価し、「真の向上心」とは、願望とウェルビーイングのバランスをとりながら、自信と精神的回復力(メンタル・レジリエンス)を高めるものだと理解している。" },
        { id: 3, topic: "自律性", question: "私は自分の考えや 決断を下し、それに基づいて行動する主体性と権限を持っており、個人的な状況、外部からのプレッシャー、社会的な期待に惑わされることなく行動します。" },
        { id: 4, topic: "自己認識", question: "私は、変動性、不確実性、複雑性、曖昧性に直面した時、自分の感情的な弾力性（エモーショナル・レジリエンス）と自身の快適さのレベルを鋭く観察し、これらのチャレンジに対する自分の対応にこそ真の気づきがあることを理解している。" },
        { id: 5, topic: "自己認識", question: "私は、自分の内省的思考能力、客観的な自由闊達さ(オープンマインド)、真面目で偏見のない思考力を育てようと努力している。なぜなら、「真の識別力」とは、心のこもった内省と偏見のない判断力であると理解しているからである。" },
        { id: 6, topic: "志", question: "私は、起業家としての自己目的と、それがビジネスビジョンとどのようにマッチしているかに細心の注意を払っています。なぜなら、「真なる志」とは、個人の願望と経営理念を結びつける重要な筋であると理解しています。" },
        { id: 7, topic: "熱意", question: "私は自分のビジネス・アイデアに対する純粋で根強い信念、自分が生み出すことができるインパクトに対する強い熱意、そして自分が解決を目指す問題に対して意味のあるソリューションを届けたいという揺るぎない意欲を持っています。" },
        { id: 8, topic: "使命感", question: "私の起業家精神は、個人的な成功や利益にとどまらず、「Why（なぜ）これをやりたいのか」という自分の心の奥底にある原動力をかたちにしようとする、使命感の深さに根ざしている。" },
        { id: 9, topic: "洗練", question: "私は、自分の願望を支え、悩みを共有し、自分の意志ある行動を高めるよう導いてくれる人々との関係を築くことに尽くしてきたか、自分を厳しく見つめ直します。「真の洗練さ」とは、貴重な人間関係から生まれると認識しています。" },
        { id: 10, topic: "忍耐力", question: "素早く適応して立ち直ります。逆境にめげることなく、困難を自己成長のための学びの機会として積極的に活用し、目標に向かって努力し続けるモチベーションにしています。" },
        { id: 11, topic: "責任感", question: "私は、コントロール不可能な状況に対する自分の反応や 、起業家としての最大限の可能性を活用する義務を自らに課し、「真の責任感」とは、説明責任と自分の最善の目的（パーパス）を成し遂げようとする意欲の両方に根ざしていることを理解しています。" },
        { id: 12, topic: "マインドセット・ランキング", question: "以下の11項目のマインドセット要素を、ご自身の起業家精神の向上の観点からランク付けしてください（1が最も価値が高く、11が最も価値が低いとします）。" }
    ];

    engQuestion: any = [
        { id: 1, topic: "Acceptance", question: "" },
        { id: 2, topic: "Ambition", question: "" },
        { id: 3, topic: "Autonomy", question: "" },
        { id: 4, topic: "Awareness", question: "" },
        { id: 5, topic: "Discernment", question: "" },
        { id: 6, topic: "Intention", question: "" },
        { id: 7, topic: "Passion", question: "" },
        { id: 8, topic: "Purpose", question: "" },
        { id: 9, topic: "Refinement", question: "" },
        { id: 10, topic: "Resilience", question: "" },
        { id: 11, topic: "Responsibility", question: "" },
        { id: 12, topic: "Mindset Ranking", question: "“In your opinion, please rank the following 11 mindset disciplines (with 1 being the most valuable and 11 being the least valuable) for your own entrepreneurial journey.”" }
      ];  


}