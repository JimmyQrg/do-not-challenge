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
    // How to play / Game rules (very specific, well-organized)
const cardHowToPlay = {
  en: `Welcome to DO NOT CHALLENGE! Here is how to play the game step by step:

1. Each player receives a secret rule at the beginning of the game. 
2. Your rule may limit what you can say, do, or how you interact with others. 
3. You are NOT allowed to see your own rule until you are eliminated. 
4. If you break your rule at any point, you are immediately eliminated from the game. 
5. You can observe other players carefully and may inspect their rules by right-clicking (or holding on touchscreen). 
6. While inspecting, the inspected player’s card will flip and turn blue, others turn gray. Do not use this to break your own rule. 
7. The game continues until only one player remains. That player becomes the winner. 
8. Strategy, observation, self-control, and patience are crucial to avoid elimination and win. 
Remember to stay alert, plan your moves, and anticipate other players’ actions to survive the challenge and win the game!`,

  zh: `欢迎来到不要做挑战！游戏规则说明如下：

1. 游戏开始时，每位玩家会获得一个秘密规则。  
2. 规则可能限制你的言语、动作或与其他玩家的互动方式。  
3. 你不能查看自己的规则，直到被淘汰。  
4. 若违反自己的规则，即刻被淘汰出局。  
5. 你可以仔细观察其他玩家，并通过右键点击（或触摸长按）查看他们的规则。  
6. 查看时，被查看玩家的卡牌会翻面并变成蓝色，其他玩家变灰。请勿利用此功能违反自己的规则。  
7. 游戏持续进行，直到只剩最后一位玩家，该玩家获胜。  
8. 策略、观察力、自我控制和耐心对于避免被淘汰并赢得胜利至关重要。  
请随时保持警觉，合理规划行动，预测其他玩家的行为，以在挑战中生存并获胜！`,

  jp: `やってはいけないチャレンジへようこそ！ゲームのルールは以下の通りです：

1. ゲーム開始時、各プレイヤーには秘密のルールが与えられます。  
2. ルールは、発言、行動、または他のプレイヤーとの交流を制限する場合があります。  
3. 自分のルールは脱落するまで確認できません。  
4. ルールを破った場合、即座に脱落します。  
5. 他のプレイヤーを注意深く観察し、右クリック（またはタッチ長押し）でルールを確認できます。  
6. 確認中は、確認されたプレイヤーのカードが青に反転し、他のカードは灰色になります。この機能を使って自分のルールを破らないでください。  
7. ゲームは最後の1人が残るまで続き、そのプレイヤーが勝者となります。  
8. 戦略、観察力、自己制御、忍耐力が脱落を避け、勝利するために重要です。  
常に注意を払い、行動を計画し、他のプレイヤーの動きを予測して、この挑戦で生き残りましょう！`
};
