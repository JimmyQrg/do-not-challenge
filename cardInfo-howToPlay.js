// Card contents
const cardContents = [
    {en:"DO NOT SWEAR", zh:"不要骂脏话", jp:"悪口を言わないで"},
    {en:"DO NOT READ NAMES", zh:"不要说名字", jp:"名前を言わないで"},
    {en:"DO NOT LOOK AT ELECTRONICS' SCREEN", zh:"不要看屏幕", jp:"画面を見ないで"},
    {en:"DO NOT STARE AT EACH OTHER FOR MORE THAN 3 SECONDS", zh:"不要对视超过3秒", jp:"3秒以上見つめないで"},
    {en:"DO NOT STOP TALKING FOR MORE THAN 5 SECONDS", zh:"不要停止说话超过5秒", jp:"5秒以上話を止めないで"},
    {en:"DO NOT SAY A SENTENCE WITH MORE THAN 5 WORDS", zh:"不要一句话说超过8个字", jp:"5語以上の文を言わないで"},
    {en:"DO NOT SAY A SENTENCE WITH LESS THAN OR EQUAL TO 2 WORDS", zh:"不要之说一个字的话", jp:"2語以下の文を言わないで"},
    {en:"DO NOT LAUGH", zh:"不要笑", jp:"笑わないで"},
    {en:"DO NOT TOUCH CLOTH USING HAND", zh:"不要用手触摸衣物", jp:"服を手で触らないで"},
    {en:"DO NOT ASK QUESTIONS", zh:"不要问问题", jp:"質問しないで"},
    {en:"DO NOT ANSWER QUESTIONS", zh:"不要回答问题", jp:"質問に答えないで"},
    {en:"DO NOT REACH USING HAND", zh:"不要伸手", jp:"手を伸ばさないで"},
    {en:"DO NOT SAY VERB", zh:"不要说动词", jp:"動詞を言わないで"},
    {en:"DO NOT SAY ADJECTIVE", zh:"不要说形容词", jp:"形容詞を言わないで"},
    {en:"DO NOT SAY MORE THAN ONE NOUN IN 3 SECONDS", zh:"不要在3秒内说超过1个名词", jp:"3秒以内に1つ以上名詞を言わないで"},
    {en:"DO NOT SPEAK OPINION", zh:"不要说观点", jp:"意見を言わないで"},
    {en:"DO NOT MOVE YOUR FEET", zh:"不要动腿", jp:"足を動かさないで"},
    {en:"DO NOT MOVE YOUR HAND UPWARD FOR MORE THAN 3 CM", zh:"不要将手上升超过3厘米", jp:"手を3cm以上上げないで"},
    {en:"DO NOT MAKE YOUR FINGER POSITIONS THE SAME (COMPARE TWO HANDS)", zh:"不要让双手（手指）姿势一样（大概）", jp:"両手の指の位置を同じにしないで"},
    {en:"DO NOT TOUCH YOUR LEGS", zh:"不要摸腿", jp:"脚に触れないで"},
    {en:"DO NOT SAY ANYTHING ABOUT FOOD OR OUTDOOR", zh:"不要说关于室外或食物的东西", jp:"食べ物や外のことを言わないで"},
    {en:"DO NOT TOUCH ELECTRONICS", zh:"不要碰电子产品", jp:"電子機器に触れないで"},
    {en:"DO NOT BE SILENT FOR MORE THAN 10 SECONDS", zh:"不要不发出声音超过10秒", jp:"10秒以上黙らないで"},
    {en:"DO NOT SIT FOR 20 SECONDS", zh:"不要坐着超过20秒", jp:"20秒以上座らないで"},
    {en:"DO NOT SAY I / ME / MY / MINE", zh:"不要说“我”", jp:"私と言わないで"},
    {en:"DO NOT SAY YOU / YOUR / YOURS", zh:"不要说“你”", jp:"あなたと言わないで"},
    {en:"DO NOT DISAGREE", zh:"不要说“不”", jp:"反対しないで"},
    {en:"DO NOT AGREE", zh:"不要答应别人", jp:"同意しないで"},
    {en:"DO NOT USE FILLER WORDS (e.g., 'uh', 'um')", zh:"不要说填充词（例如“呃”，“那个”）", jp:"フィラー言葉を使わないで"},
    {en:"DO NOT SAY LESS THAN 4 WORDS TWICE IN A ROW", zh:"不要连续两次说少于4个字的话", jp:"連続で4語以下の文を2回言わないで"},
    {en:"DO NOT SAY SOMETHING ABOUT STUDY OR NUMBERS", zh:"不要说跟学业有关的东西（包括数字有关的）", jp:"勉強や数字に関することを言わないで"},
    {en:"DO NOT SPEAK NON-NATIVE LANGUAGE", zh:"不要说母语以外的语言", jp:"母国語以外を話さないで"},
    {en:"DO NOT MOVE HAND MORE THAN 20 CM IN 10 SECONDS", zh:"不要在10秒内移动手超过2分米", jp:"10秒以内に手を20cm以上動かさないで"}
];

// HOW TO PLAY
const howToPlay = {
    en:`This game is called Do Not Challenge. Each player will have a card that contains an action they must NOT do.
If they do the forbidden action, they are eliminated. The last remaining player wins.

Gameplay:
1. Choose your language and number of players (minimum 2).
2. Click START to begin. Each player will see their player number and a face-down card.
3. Click the card to flip it. A random challenge will appear.
4. After seeing the card, click CONTINUE to go to the next player.
5. Once all cards are seen, the elimination phase begins. Click a player's box to mark them as eliminated.
6. Repeat until only one player remains. The last player standing is the winner! Their box turns green and all player boxes reveal their card content.
7. Click REPLAY to play again.`,
    zh:`这个游戏叫做不要做挑战。每个人都会有一个不能做的事件，如果他做了，他就淘汰了。最后一个没被淘汰的人就赢了。

玩法：
1. 选择语言和玩家数量（至少2人）。
2. 点击开始，每个玩家会看到自己的编号和一张背面卡牌。
3. 点击卡牌翻牌，显示随机挑战。
4. 翻牌后点击继续，轮到下一个玩家。
5. 全部玩家看过卡牌后，开始淘汰阶段，点击玩家方块标记淘汰。
6. 重复直到只剩一名玩家，最后幸存的玩家胜利，其方块变绿色，并显示所有玩家的卡牌内容。
7. 点击再玩一局开始新游戏。`,
    jp:`このゲームはドゥ・ノット・チャレンジです。各プレイヤーはやってはいけない行動が書かれたカードを持っています。
もしそれを行うと脱落します。最後まで残ったプレイヤーが勝者です。

ルール：
1. 言語とプレイヤー人数を選択してください（最小2人）。
2. スタートをクリック。各プレイヤーは自分の番号と裏向きのカードを見ることができます。
3. カードをクリックしてめくるとランダムなチャレンジが表示されます。
4. カードを見た後、CONTINUEをクリックして次のプレイヤーへ。
5. 全員のカードを見たら、脱落フェーズ開始。プレイヤーのボックスをクリックして脱落させます。
6. 最後に1人だけ残るまで繰り返します。最後のプレイヤーが勝利し、そのボックスは緑色に変わり、全員のカード内容が表示されます。
7. REPLAYをクリックして再度プレイ。`
};
