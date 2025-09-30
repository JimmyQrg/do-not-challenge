// ===== Card Rules =====
const cardData = [
  { en: "Don't use derogatory words or swear", zh: "不要说贬义词或脏话", jp: "侮辱的な言葉や汚い言葉を使わない" },
  { en: "DO NOT LOOK AT ELECTRONICS' SCREEN", zh: "不要看电子屏幕", jp: "電子機器の画面を見ないでください" },
  { en: "DO NOT SAY ANYBODY'S NAME", zh: "不要说名字", jp: "誰の名前も言わないでください" },
  { en: "DO NOT STARE AT EACH OTHER FOR MORE THAN 3 SECONDS?", zh: "不要对视超过3秒", jp: "3秒以上見つめない" },
  { en: "DO NOT STOP TALKING FOR MORE THAN 5 SECONDS", zh: "不要停止说话超过5秒", jp: "5秒以上話さないでください" },
  { en: "DO NOT SAY A SENTENCE WITH MORE THAN 5 WORDS", zh: "不要一句话说超过8个字", jp: "5語以上の文を言わない" },
  { en: "DO NOT SAY A SENTENCE WITH LESS THAN OR EQUAL TO 2 WORDS", zh: "不要只说一个字", jp: "1単語だけ言わない" },
  { en: "DO NOT LAUGH", zh: "不要笑", jp: "笑わない" },
  { en: "DO NOT TOUCH CLOTH USING HAND", zh: "不要用手触摸衣物", jp: "手で服に触れない" },
  { en: "DO NOT ASK QUESTIONS", zh: "不要问问题", jp: "質問しない" },
  { en: "DO NOT ANSWER QUESTIONS", zh: "不要回答问题", jp: "質問に答えない" },
  { en: "DO NOT REACH USING HAND", zh: "不要伸手", jp: "手を伸ばさない" },
  { en: "DO NOT SAY VERB", zh: "不要说动词", jp: "動詞を言わない" },
  { en: "DO NOT SAY ADJECTIVE", zh: "不要说形容词", jp: "形容詞を言わない" },
  { en: "DO NOT SAY MORE THAN ONE NOUN IN 3 SECONDS", zh: "不要在3秒内说超过1个名词", jp: "3秒以内に1つ以上の名詞を言わない" },
  { en: "DO NOT SPEAK OPINION", zh: "不要说观点", jp: "意見を言わない" },
  { en: "DO NOT MOVE YOUR FEET", zh: "不要动腿", jp: "足を動かさない" },
  { en: "DO NOT MOVE YOUR HAND UPWARD FOR MORE THAN 3 CM", zh: "不要将手上升超过3厘米", jp: "手を3cm以上上げない" },
  { en: "DO NOT MAKE YOUR FINGER POSITIONS THE SAME", zh: "不要让双手（手指）姿势一样", jp: "指の形を同じにしない" },
  { en: "DO NOT TOUCH YOUR LEGS", zh: "不要摸腿", jp: "脚に触れない" },
  { en: "DO NOT SAY ANYTHING ABOUT FOOD OR OUTDOOR", zh: "不要说关于室外或食物的东西", jp: "食べ物や外に関することを言わない" },
  { en: "DO NOT TOUCH ELECTRONICS", zh: "不要碰电子产品", jp: "電子機器に触れない" },
  { en: "DO NOT BE SILENT FOR MORE THAN 10 SECONDS", zh: "不要不发出声音超过10秒", jp: "10秒以上黙らない" },
  { en: "DO NOT SIT FOR 20 SECONDS", zh: "不要坐着超过20秒", jp: "20秒以上座らない" },
  { en: "DO NOT SAY I / ME / MY / MINE", zh: "不要说“我”", jp: "私を言わない" },
  { en: "DO NOT SAY YOU / YOUR / YOURS", zh: "不要说“你”", jp: "あなたを言わない" },
  { en: "DO NOT SAY DISAGREE", zh: "不要说“不”", jp: "否定しない" },
  { en: "DO NOT AGREE", zh: "不要答应别人", jp: "同意しない" },
  { en: "DO NOT USE FILLER WORDS (e.g., 'uh', 'um')", zh: "不要说填充词（例如“呃”，“那个”）", jp: "つなぎ言葉を使わない（例: えー、あの）" },
  { en: "DO NOT CONTINUOUSLY SPEAK LESS THAN 4 WORDS", zh: "不要连续两次说少于4个字的话", jp: "4語未満の文を連続で言わない" },
  { en: "DO NOT TALK ABOUT STUDY OR NUMBERS", zh: "不要说跟学业有关的东西（包括数字）", jp: "勉強や数字について話さない" },
  { en: "DO NOT SPEAK IN FOREIGN LANGUAGE", zh: "不要说母语以外的语言", jp: "母語以外の言語を話さない" },
  { en: "DO NOT MOVE HAND MORE THAN 20 CM IN 10 SECONDS", zh: "不要在10秒内移动手超过2分米", jp: "10秒以内に手を20cm以上動かさない" },
  { en: "DO NOT TOUCH YOUR HEAD", zh: "不要摸头", jp: "頭に触れない" },
  { en: "DO NOT USE THE SAME WORD TWICE IN A ROW", zh: "不要连续重复使用相同词语", jp: "同じ単語を連続で使わない" }
];

// ===== How To Play =====
const howToPlay = {
  en: `Welcome to DO NOT CHALLENGE. Each player will get a rule which is a thing that player cannot do. 
You cannot know your rule, but you are supposed to remember all others' rules. 
After everybody gets their rule, try to guess your rule and make others break their rule without breaking your own. 
If a player breaks the rule, the player dies; left click the player to confirm death. 
The last player alive will win. The game has dynamic cards with animations, glow effects, and UI effects. 
Language can be switched anytime using the globe icon. Be careful and enjoy the challenge!`,
  zh: `欢迎来到《不要做挑战》。你会获得一个不要做事件，这是你的规则，但你不能查看自己的规则，更不能违反你的规则。 
尝试让其他玩家违反他们的规则，如果他们违反了规则，他们就死了。左击玩家确认死亡。 
最后活下来的玩家将是赢家。游戏卡牌会有动画、发光和其他视觉效果。 
你可以随时使用右上角的地球图标切换语言。注意规则，享受挑战！`,
  jp: `「Don't Doチャレンジ」へようこそ。各プレイヤーには行ってはいけないルールが与えられます。 
自分のルールは確認できませんが、他のプレイヤーのルールを覚えておく必要があります。 
全員がルールを得た後、自分のルールを推測し、他のプレイヤーにルールを破らせるようにしましょう。 
もしプレイヤーがルールを破った場合、そのプレイヤーは死亡し、左クリックで確認します。 
最後まで生き残ったプレイヤーが勝者です。カードにはアニメーションや光の効果があり、UIも楽しいです。 
右上の地球アイコンでいつでも言語を切り替え可能です。ルールに注意して挑戦を楽しんでください！`
};
