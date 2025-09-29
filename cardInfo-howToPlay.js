// cardInfo-howToPlay.js

// Card information
const cardInfo = [
  "DO NOT SWEAR: Avoid using any swear words during the game. If you break this rule, you are immediately eliminated.",
  "DO NOT SAY YOUR NAME: Never say your own or others' real names. Breaking this rule leads to elimination.",
  "DO NOT LOOK AT ELECTRONICS' SCREEN: Avoid looking at any electronic devices or screens, including phones and monitors.",
  "DO NOT STARE AT EACH OTHER FOR MORE THAN 3 SECONDS: Avoid prolonged eye contact with other players.",
  "DO NOT STOP TALKING FOR MORE THAN 5 SECONDS: Keep speaking; silence longer than 5 seconds will eliminate you.",
  "DO NOT SAY A SENTENCE WITH MORE THAN 5 WORDS: Keep your sentences short. Long sentences are not allowed.",
  "DO NOT SAY A SENTENCE WITH LESS THAN OR EQUAL TO 2 WORDS: Avoid extremely short responses.",
  "DO NOT LAUGH: No laughter is allowed during the game. Breaking this rule eliminates you.",
  "DO NOT TOUCH CLOTH USING HAND: Avoid touching your clothes with your hands.",
  "DO NOT ASK QUESTIONS: Asking questions is prohibited."
  // Add more 20+ rules following the same pattern
];

// Chinese simplified
const cardInfoZH = [
  "不要骂脏话：游戏过程中禁止使用任何脏话，一旦违规立即淘汰。",
  "不要说名字：不要说出自己的或他人的真实姓名，违规即被淘汰。",
  "不要看电子屏幕：不要看任何电子设备或屏幕，包括手机和电脑。",
  "不要对视超过3秒：避免与其他玩家长时间对视。",
  "不要停止说话超过5秒：持续讲话，超过5秒的沉默将被淘汰。",
  "不要一句话说超过5个字：保持句子简短，超过规定长度将淘汰。",
  "不要只说一个字的话：避免极短的回答。",
  "不要笑：游戏过程中禁止笑声，违规将被淘汰。",
  "不要用手触摸衣物：避免用手触摸衣物。",
  "不要问问题：提问是不允许的。"
  // Add more 20+ rules following the same pattern
];

// Japanese
const cardInfoJP = [
  "汚い言葉を使わないでください：ゲーム中は汚い言葉を使用してはいけません。違反すると即失格です。",
  "名前を言わないでください：自分や他人の本名を言ってはいけません。違反すると失格です。",
  "電子機器の画面を見ないでください：スマホやパソコンなどの電子機器を見てはいけません。",
  "3秒以上見つめないでください：他のプレイヤーを長時間見つめないでください。",
  "5秒以上黙らないでください：話し続けてください。5秒以上の沈黙は失格です。",
  "一文に5語以上言わないでください：文章は短く保ってください。",
  "1語だけの文を言わないでください：極端に短い返答は禁止です。",
  "笑わないでください：ゲーム中に笑ってはいけません。違反すると失格です。",
  "手で服に触れないでください：手で服に触れてはいけません。",
  "質問をしないでください：質問は禁止です。"
  // Add more 20+ rules following the same pattern
];

// How To Play article (50+ words per language)
const cardHowToPlay = {
  en: "Welcome to 'DO NOT CHALLENGE'. Each player receives a secret rule that they must follow throughout the game. You cannot look at your own rule. Breaking your rule results in immediate elimination. Players take turns interacting with cards. Right-click or hold a card to view another player's rule temporarily. When only one player remains, they are declared the winner. Use the language selector to switch between English, Chinese, and Japanese at any time.",
  zh: "欢迎来到“不要做挑战”。每位玩家会获得一个秘密规则，整个游戏过程中必须遵守。你不能查看自己的规则，违反规则将立即淘汰。玩家轮流操作卡牌。右键或长按卡牌可以暂时查看其他玩家的规则。当只剩下一名玩家时，该玩家获胜。可以随时使用语言选择器切换英文、中文和日语。",
  jp: "「やってはいけないチャレンジ」へようこそ。各プレイヤーはゲーム中に守る秘密のルールを受け取ります。自分のルールは確認できません。ルール違反すると即失格です。プレイヤーは順番にカードを操作します。カードを右クリックまたは長押しすると他のプレイヤーのルールを一時的に確認できます。最後の一人になると勝者が決まります。言語セレクターで英語、中国語、日本語にいつでも切り替え可能です。"
};
