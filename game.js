let currentLang='en';
const startBtn=document.getElementById('startBtn');
const playerCountInput=document.getElementById('playerCount');
const incrementBtn=document.getElementById('increment');
const decrementBtn=document.getElementById('decrement');
const container=document.getElementById('playerContainer');
const topInstruction=document.getElementById('top-instruction');
const langDropdown=document.getElementById('langDropdown');
const currentLangText=document.getElementById('currentLangText');
const playerCountLabel=document.getElementById('playerCountLabel');

function updateStartButton(){
  const count=parseInt(playerCountInput.value,10);
  startBtn.disabled=!(count>=2);
}
updateStartButton();
incrementBtn.addEventListener('click',()=>{playerCountInput.value=Math.min(parseInt(playerCountInput.value)+1,20); updateStartButton();});
decrementBtn.addEventListener('click',()=>{playerCountInput.value=Math.max(parseInt(playerCountInput.value)-1,2); updateStartButton();});
playerCountInput.addEventListener('input',updateStartButton);

langDropdown.querySelector('.dropdown-btn').addEventListener('click',()=>{langDropdown.classList.toggle('active');});
langDropdown.querySelectorAll('.dropdown-content div').forEach(opt=>{
  opt.addEventListener('click',()=>{
    currentLang=opt.dataset.lang;
    langDropdown.classList.remove('active');
    currentLangText.textContent=opt.textContent;
    topInstruction.textContent=cardInfo[0][currentLang];
    startBtn.textContent=currentLang==='en'?'START':currentLang==='zh'?'开始游戏':'ゲーム開始';
    playerCountLabel.textContent=currentLang==='en'?'Players:':currentLang==='zh'?'玩家数:':'プレイヤー数:';
  });
});
document.addEventListener('click',e=>{if(!langDropdown.contains(e.target)){langDropdown.classList.remove('active');}});

startBtn.addEventListener('click',()=>{
  container.innerHTML='';
  const count=parseInt(playerCountInput.value,10);
  topInstruction.textContent=cardInfo[0][currentLang];
  for(let i=1;i<=count;i++){
    const player=document.createElement('div'); player.className='player';
    const card=document.createElement('div'); card.className='card';
    const front=document.createElement('div'); front.className='card-face card-front';
    front.textContent=i+'号玩家';
    const back=document.createElement('div'); back.className='card-face card-back';
    back.textContent='...';
    card.appendChild(front); card.appendChild(back);
    player.appendChild(card);
    container.appendChild(player);

    let viewing=false;
    player.addEventListener('contextmenu',e=>{
      e.preventDefault();
      viewing=!viewing;
      if(viewing){
        card.classList.add('flipped');
        const r=cardInfo[i%cardInfo.length]||'No Info';
        back.textContent=r[currentLang]||r['en']||'No Info';
      } else {
        card.classList.remove('flipped');
        back.textContent='...';
      }
    });
    player.addEventListener('click',()=>{
      if(!viewing){ player.style.background='red'; }
    });
  }
});
