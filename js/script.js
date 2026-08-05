/* ============================================
   我们的第1000天 — 交互与数据
   ============================================ */

/* ============================================
    📸 时间轴数据
    修改这里的内容即可更新页面！
    照片放在 photos/ 文件夹，路径写在这里
    没有照片时留空 ''，会自动显示占位
   ============================================ */
const timelineData = [
  {
    date: '2023.11.14',
    title: '我们的第1️⃣天 💕',
    face: '一束花，两个人，一个刚刚好的开始。',
    back: '2023年11月14日，我们在一起啦！还记得那天我买了一束花送给你，有些紧张，也不知道你喜不喜欢。但我觉得，好的恋爱应该从一束花开始。花是我挑的，你是我选的，这个开头我很满意。',
    photo: 'photos/01.jpg'
  },
  {
    date: '2023.11.28',
    title: '我们的第1️⃣4️⃣天 🌹',
    face: '我说过的，她都记得。',
    back: '第一次收到花，是她送的。一个男生很少有机会收到的属于自己的花，我跟她说过我不喜欢鲜花，没想到她记住了，给我做了一朵不会谢的手工编的花，花瓣一片一片绕出来的，边边角角都收得很整齐。我拿着看了很久，不是因为花多好看，是因为我说过的话，她都放在了心上，心想，这个女孩子怎么这么好。',
    photo: 'photos/02.jpg'
  },
  {
    date: '2023.12.04',
    title: '我们的第1️⃣0️⃣×2天 💍',
    face: '她送了我人生中第一枚戒指，还是亲手给我戴上的。',
    back: '第一次收到戒指，是她给的。第20天的晚上，我们像往常一样在楼下散步。聊着聊着天，她忽然把手伸进口袋里，掏出一个东西，然后趁我不注意拉过我的手就往上套。我低头一看，是一枚戒指。她也没看我，就继续往前走，说“早就买了，一直在等一个合适的时机”。我追上去拉住她的袖子，不知道该说什么。那枚戒指就安安静静地戴在我手上，像她这个人一样，没有多好听的话，但做了就是做了。',
    photo: 'photos/03.jpg'
  },
  {
    date: '2023.12.14',
    title: '我们的第 3️⃣0️⃣天 🧸 ',
    face: '你有很多小的了，我送你一个最大的，让你记得我。',
    back: '我送了她一只很大的玩偶，比她之前所有的都大。因为她房间里已经有好多小玩偶了，都是以前别人送的。她问我怎么买这么大一只，我说就是要大，大到你想忽略都忽略不了。这样以后你每次看到它，都会想起这是我送的。我要的就是这种存在感。',
    photo: 'photos/04.jpg'
  },
  {
    date: '2024.05.20',
    title: '我们的第1️⃣8️⃣8️⃣天 🎀',
    face: '188天撞上第一个520，两个日子叠在一起，像是命运的安排。',
    back: '今天是我们的第188天，正好赶上我们的第一个520。我准备了一束玩偶花，想着你之前说过喜欢可爱的毛茸茸的东西，我还挑了一个你最喜欢的颜色。你递给我的时候我还没反应过来，直到看到你手里也有东西——是一个手工相框，你做的，里面放着我们的照片。那天我们俩站在那儿，手里都拿着给对方的东西，我突然觉得，这就是我想要的那种幸福。',
    photo: 'photos/05.jpg'
  },
  {
    date: '2024.11.14',
    title: '我们的第3️⃣6️⃣6️⃣天 🎂',
    face: '一周年了，时间好快。蛋糕很甜，但你更甜。',
    back: '今天是我们在一起的第366天。我们去买了一个小蛋糕，没有很隆重，就是一起挑了一个我们俩都喜欢的口味。切蛋糕的时候我忽然有点恍惚，觉得上次我们还在过一个月纪念日，怎么一转眼就一年了。但看着你坐在对面吃蛋糕的样子，又觉得这一年不长不短，刚刚好。蛋糕很甜，但你笑起来比蛋糕还甜。我心想，如果以后的每一年都能这样过，那我真的别无所求了。',
    photo: 'photos/06.jpg'
  },
  {
    date: '2025.04.17',
    title: '我们的第5️⃣2️⃣0️⃣天 💝',
    face: '第520天，平平淡淡的一顿火锅。',
    back: '今天是我们的第520天。没有特意安排什么，就是一起去吃了一家之前一直想去的火锅店。锅底端上来的时候热气腾腾的，我忙着涮肉，你忙着给你夹。吃到一半你抬起头，辣得满脸通红，跟我说“好好吃”。我看着你那副满足的样子，突然觉得，这样平平淡淡的日子，其实也挺好的。没有刻意的浪漫，没有精心准备的惊喜，但你坐在对面，辣得吸溜吸溜还在笑的样子，比任何礼物都让我觉得幸福。',
    photo: 'photos/07.jpg'
  },
  {
    date: '2025.11.14',
    title: '我们的第2️⃣年 💑',
    face: '两周年异地，人没到，但蛋糕和礼物到了。下次见面，我把拥抱也补上。',
    back: '两周年了，我们还在异地。我没法陪在你身边，只能给你点了一个你喜欢的蛋糕和一份礼物。你拆开的时候已经很小心了，结果还是把蛋糕的一个角碰掉了。你发来消息：“完了完了，我把蛋糕的一个脚搞没了”，后面跟着一个哭哭的表情。我说没关系，你说“我就是个小捣蛋鬼”。我对着屏幕笑了很久。异地没办法一起切蛋糕，但看你隔着屏幕笨手笨脚的样子，还是很可爱。那个少了一角的蛋糕，反而让这一天更有温度，更像我们。',
    photo: 'photos/08.jpg'
  },
  {
    date: '2026.08.10',
    title: '我们的第1️⃣0️⃣0️⃣0️⃣天 ✨',
    face: '一千天，不是终点，而是我们故事里最温柔的逗号。',
    back: '从 2023.11.14 到 2026.08.10，整整一千天。一路走来，有笑有泪，有吵有闹，但从来没有松开过彼此的手。谢谢你，让我成为更好的人。我们的故事，未完待续……',
    photo: 'photos/09.jpg'
  }
];

/* ============================================
   💬 日常碎片数据
   照片放 photos/daily/01.webp ~ 04.webp（WebP，≥600px，≤150KB）
   hint 是图片失败时显示的提示文字
   ============================================ */
const dailyData = [
  {
    photo: 'photos/daily/01.webp',
    story: '读大学的时候，我经常不吃早餐，觉得多睡一会儿比较重要。他知道了以后，每次都说“不吃早餐对身体不好”，然后开始每天给我带早餐。一开始我还有点不好意思，后来慢慢就习惯了。早餐有时候是食堂的包子豆浆，有时候是他顺路买的牛奶面包。就这样，他包了我大学三年的早餐。毕业以后每次想起来，都觉得那三年被他照顾得很好。他从来没有说过什么动人的情话，但他用一千多个早晨告诉我，他是真的在意我。',
    date: '2024.06.01',
    hint: 'photos/daily/01.webp'
  },
  {
    photo: 'photos/daily/02.webp',
    story: '你说你很喜欢猫猫狗狗，我一直记着。后来我们第一次一起去了猫咖。推开门的时候，好几只猫围过来，你蹲下去就开始摸，嘴里还说“好可爱好可爱”。我在旁边看着你，觉得你也好可爱。那天我们在猫咖坐了一下午，你把每只猫都摸了一遍，我在旁边帮你拍照。走的时候我说“下次还带你来”。',
    date: '2025.03.12',
    hint: 'photos/daily/02.webp'
  },
  {
    photo: 'photos/daily/03.webp',
    story: '你说你想我了，其实我也想你。于是我买了最近的一班车，只有站票，站了六个多小时到了深圳。这是我第一次来这座城市，来之前对它的印象只有“你在那里”。下车的时候脚很酸，但见到你的时候什么都忘了。第一顿饭，你带我去吃你平时吃的那家店，你坐我对面一直在笑，说“你真的来了”。我说，你说想我了嘛，我肯定要来。',
    date: '2025.08.20',
    hint: 'photos/daily/03.webp'
  },
  {
    photo: 'photos/daily/04.webp',
    story: '第一次去长沙旅游，你在路上走着走着，忽然拽住我的袖子，声音都高了八度：“辣条博物馆！”我还没反应过来，你已经拉着我跑了过去。你站在门口特别激动地跟我说，辣条还有博物馆啊，一定要进去看看。那天的长沙很热，你额头上都是汗，但眼睛亮亮的。我心想，这次旅游光是看你现在这个表情，就已经值了。',
    date: '2026.01.05',
    hint: 'photos/daily/04.webp'
  }
];

function renderDaily() {
  const grid = document.getElementById('polaroidGrid');
  if (!grid) return;
  let html = '';
  dailyData.forEach((item) => {
    const fallback = `<div class="pol-fallback"><span class="pol-fb-icon">📷</span><p>${item.hint || '回忆照片'}</p></div>`;
    const photoHtml = item.photo
      ? `<img src="${item.photo}" alt="" loading="lazy">`
      : fallback;
    html += `
      <div class="polaroid">
        <div class="polaroid-photo">${photoHtml}</div>
        <div class="polaroid-caption">
          <p>${item.story}</p>
          <span class="polaroid-date">${item.date}</span>
        </div>
      </div>
    `;
  });
  grid.innerHTML = html;

  // 图片加载失败 → 相机图标 + 提示文字
  grid.querySelectorAll('.polaroid-photo img').forEach(img => {
    img.onerror = () => {
      const idx = [...grid.querySelectorAll('.polaroid-photo img')].indexOf(img);
      const hint = dailyData[idx]?.hint || '回忆照片';
      const fb = document.createElement('div');
      fb.className = 'pol-fallback';
      fb.innerHTML = `<span class="pol-fb-icon">📷</span><p>${hint}</p>`;
      img.replaceWith(fb);
    };
  });
}

/* ============================================
   🍜 一起吃过的味道
   照片放 photos/food/01~05.webp
   ============================================ */
const togetherData = [
  {
    photo: 'photos/food/01.webp',
    date: '2024.05',
    title: '茶颜悦色',
    desc: '她喝过的第一杯茶颜悦色，是我托人从长沙带来的。现在随时买得到了，但那第一口，是我的。',
    hint: 'photos/food/01.webp'
  },
  {
    photo: 'photos/food/02.webp',
    date: '2024.10',
    title: '深夜的螺蛳粉',
    desc: '第一次尝试，你说又臭又香，根本停不下来。',
    hint: 'photos/food/02.webp'
  },
  {
    photo: 'photos/food/03.webp',
    date: '2025.03',
    title: '巷口的糖水铺',
    desc: '加班到很晚，一碗热糖水刚好暖到心里。',
    hint: 'photos/food/03.webp'
  },
  {
    photo: 'photos/food/04.webp',
    date: '2025.11',
    title: '秋天的第一杯奶茶',
    desc: '你选了桂花乌龙，说这个味道像我们。',
    hint: 'photos/food/04.webp'
  },
  {
    photo: 'photos/food/05.webp',
    date: '2026.06',
    title: '家里的一桌菜',
    desc: '第一次下厨给你做饭，卖相一般但你全吃光了。',
    hint: 'photos/food/05.webp'
  }
];

function renderTogether() {
  const c = document.getElementById('vtimeline');
  if (!c || togetherData.length === 0) return;

  const img = (p, alt) => p
    ? `<img src="${p}" alt="${alt}" loading="lazy">`
    : '<span class="food-fb">🍽️</span>';

  let html = '<div class="food-list">';
  togetherData.forEach(item => {
    html += `
      <div class="food-row">
        <div class="food-photo">${img(item.photo, item.title)}</div>
        <div class="food-info">
          <div class="food-line1">
            <span class="food-name">${item.title}</span>
            <span class="food-date">${item.date}</span>
          </div>
          <p class="food-mem">${item.desc}</p>
        </div>
      </div>
    `;
  });
  html += '</div>';
  c.innerHTML = html;

  // 图片失败兜底
  c.querySelectorAll('.food-photo img').forEach(img => {
    img.onerror = () => {
      const fb2 = document.createElement('span');
      fb2.className = 'food-fb';
      fb2.textContent = '🍽️';
      img.replaceWith(fb2);
    };
  });
}

/* ============================================
   📝 备忘录便签墙
   照片放 photos/notes/01~03.webp（宽500px，≤40KB）
   color: yellow / pink / purple
   ============================================ */
const notesData = [
  {
    text: '见面第一件事，先抱一下再说话，谁都不能例外。这是我们的暗号。',
    color: 'yellow',
    photo: 'photos/notes/01.webp'
  },
  {
    text: '点奶茶永远是两杯，一杯去冰三分糖，一杯常温少冰。雷打不动。',
    color: 'pink',
    photo: 'photos/notes/02.webp'
  },
  {
    text: '吵架不隔夜，睡前一定要和好。谁先笑了，谁就先抱。',
    color: 'purple',
    photo: 'photos/notes/03.webp'
  }
];

function renderNotes() {
  const board = document.getElementById('notesBoard');
  if (!board) return;
  let html = '';
  notesData.forEach((item, i) => {
    const photo = item.photo
      ? `<img src="${item.photo}" alt="" loading="lazy">`
      : `<span class="note-ph-fb">📷</span>`;
    html += `
      <div class="note note-${item.color}" style="transform: rotate(${i % 2 === 0 ? -2 : 2}deg)">
        <span class="note-pin"></span>
        <p class="note-text">${item.text}</p>
        <div class="note-photo">${photo}</div>
      </div>
    `;
  });
  board.innerHTML = html;
  board.querySelectorAll('.note-photo img').forEach(img => {
    img.onerror = () => {
      const fb = document.createElement('span');
      fb.className = 'note-ph-fb';
      fb.textContent = '📷';
      img.replaceWith(fb);
    };
  });
}

/* ============================================
   ♠ 卡片堆叠 — 自动轮播 + 拖拽/滑动 + 翻转
   ============================================ */
let cards = [];
let dots = [];
let currentIndex = 0;
let total = 0;
let isPlaying = false;
let timer = null;
let touchStartX = 0;
let didSwipe = false;
let timelineRendered = false;
let flipped = false;
let flipping = false;
let interacted = false;

function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="stack-wrap" id="stackWrap">
      <div class="stack-hint" id="stackHint">🖱 拖拽/滑动切换  ·  点击翻转看完整故事</div>
      <div class="stack-cards" id="stackCards"></div>
      <div class="stack-bar">
        <div class="stack-dots" id="stackDots"></div>
      </div>
    </div>
  `;

  const cardsEl = document.getElementById('stackCards');
  const dotsEl = document.getElementById('stackDots');

  timelineData.forEach((item, i) => {
    const frontText = item.face || (item.back || item.desc || '').substring(0, 50) + '…';
    const backText = item.back || item.desc || '';
    const hasPhoto = !!item.photo;
    const photoFailed = hasPhoto && failedImages.has(item.photo);

    const card = document.createElement('div');
    card.className = 'stack-card';
    card.dataset.idx = i;
    card.innerHTML = `
      <div class="sc-inner">
        <div class="sc-front">
          ${photoFailed
            ? `<div class="sc-bg-img no-photo">💖</div><div class="sc-overlay"></div>`
            : hasPhoto
              ? `<img class="sc-bg-img" src="${item.photo}" alt="${item.title}" loading="lazy"><div class="sc-overlay"></div>`
              : `<div class="sc-bg sc-bg-grad"></div>`
          }
          <div class="sc-body">
            <div class="sc-date">${item.date}</div>
            <div class="sc-title">${item.title}</div>
            <div class="sc-summary">${frontText}</div>
            <div class="sc-num">${i+1}/${timelineData.length}</div>
          </div>
        </div>
        <div class="sc-back">
          <div class="sc-back-bg"></div>
          <div class="sc-back-body">
            <div class="sc-back-date">${item.date}</div>
            <div class="sc-back-title">${item.title}</div>
            <div class="sc-back-text">${backText}</div>
            <div class="sc-back-hint">点击翻回 ▸</div>
            <button class="like-btn" data-idx="${i}" data-liked="false">
              <span class="like-heart">❤</span>
              <span class="like-count">0</span>
            </button>
          </div>
        </div>
      </div>
    `;
    cardsEl.appendChild(card);

    // 图片加载完成后淡入；失败则替换为爱心占位
    const img = card.querySelector('.sc-bg-img');
    if (img) {
      if (img.complete && img.naturalWidth > 0) img.classList.add('loaded');
      else {
        img.onload = () => img.classList.add('loaded');
        img.onerror = () => {
          const fb = document.createElement('div');
          fb.className = 'sc-bg-img no-photo';
          fb.textContent = '💖';
          img.replaceWith(fb);
        };
      }
    }

    // 直接绑定翻转事件到卡片的正面和背面
    const frontEl = card.querySelector('.sc-front');
    const backEl = card.querySelector('.sc-back');
    const doFlip = (e) => {
      if (didSwipe) return;
      e.stopPropagation();
      dismissHint();
      stopPlay();
      flipCard();
    };
    if (frontEl) frontEl.addEventListener('click', doFlip);
    if (backEl) backEl.addEventListener('click', doFlip);

    const d = document.createElement('span');
    d.className = 'sd' + (i===0?' on':'');
    dotsEl.appendChild(d);
  });

  cards = [...document.querySelectorAll('.stack-card')];
  dots = [...document.querySelectorAll('.sd')];
  total = cards.length;

  // 点赞初始化
  initLikes();
  currentIndex = 0;
  flipped = false;
  flipping = false;
  layout();

  const wrap = document.getElementById('stackWrap');
  let dragStartX = 0;

  // ---------- 触摸 + 鼠标拖拽 ----------
  function onDragStart(x) { dragStartX = x; didSwipe = false; }
  function onDragEnd(x) {
    const dx = dragStartX - x;
    if (Math.abs(dx) > 40) {
      didSwipe = true;
      dismissHint();
      stopPlay();
      dx > 0 ? goNext() : goPrev();
      setTimeout(() => { didSwipe = false; }, 350);
    }
  }

  wrap.addEventListener('touchstart', e => { onDragStart(e.touches[0].clientX); }, { passive: true });
  wrap.addEventListener('touchend', e => { onDragEnd(e.changedTouches[0].clientX); }, { passive: true });
  wrap.addEventListener('mousedown', e => { onDragStart(e.clientX); });
  wrap.addEventListener('mouseup', e => { onDragEnd(e.clientX); });

  // ---------- 键盘（全局） ----------
  document.addEventListener('keydown', function onKey(e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); dismissHint(); stopPlay(); goNext(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); dismissHint(); stopPlay(); goPrev(); }
  });

  // 不再自动播放，由进入第2页时触发
}

/* ---- 提示文字：首次互动后消失 ---- */
function dismissHint() {
  if (interacted) return;
  interacted = true;
  const h = document.getElementById('stackHint');
  if (h) h.style.opacity = '0';
}

/* ---- 堆叠布局（4层可见） ---- */
function layout() {
  const gap = 14;
  cards.forEach((card, i) => {
    const offset = (i - currentIndex + total) % total;
    card.dataset.off = offset;
    let css = '';
    if (offset === 0) {
      css = 'transform:scale(1)translateY(0);z-index:99;opacity:1;pointer-events:auto';
    } else if (offset === 1) {
      css = `transform:scale(0.93)translateY(${gap}px);z-index:50;opacity:1;pointer-events:none`;
    } else if (offset === 2) {
      css = `transform:scale(0.86)translateY(${gap*2}px);z-index:20;opacity:0.55;pointer-events:none`;
    } else if (offset === 3) {
      css = `transform:scale(0.80)translateY(${gap*3}px);z-index:10;opacity:0.2;pointer-events:none`;
    } else {
      css = `transform:scale(0.75)translateY(${gap*4}px);z-index:5;opacity:0;pointer-events:none`;
    }
    card.style.cssText = css;
  });
  dots.forEach((d, i) => {
    const wasOn = d.classList.contains('on');
    const isOn = i === currentIndex;
    d.classList.toggle('on', isOn);
    if (isOn && !wasOn) { d.classList.remove('ripple'); void d.offsetWidth; d.classList.add('ripple'); }
    if (wasOn && !isOn) { d.classList.remove('pulse'); void d.offsetWidth; d.classList.add('pulse'); }
  });
}

/* ---- 翻转 ---- */
let cardFirstSwipe = false; // 翻到背面后第一次滑动不翻页，只滚内容

function flipCard() {
  if (flipping || total === 0) return;
  const top = cards[currentIndex];
  if (!top) return;
  const inner = top.querySelector('.sc-inner');
  if (!inner) return;

  flipped = !flipped;
  if (flipped) cardFirstSwipe = false; // 翻到背面重置首滑保护
  inner.classList.toggle('flipped', flipped);

  // 翻到背面时锁定到故事顶部
  if (flipped) {
    const backBody = top.querySelector('.sc-back-body');
    if (backBody) backBody.scrollTop = 0;
  }

  // 翻回正面时锁定切换，等动画完成
  if (!flipped) {
    flipping = true;
    setTimeout(() => { flipping = false; }, 500);
  }
}

/* ---- 切换 ---- */
function goNext() {
  if (!total || flipping) return;
  if (flipped) { flipped = false; cards.forEach(c => { const i = c.querySelector('.sc-inner'); if (i) i.classList.remove('flipped'); }); }
  currentIndex = (currentIndex + 1) % total;
  layout();
  preloadAhead(2); // 翻页时预载后两张
}
function goPrev() {
  if (!total || flipping) return;
  if (flipped) { flipped = false; cards.forEach(c => { const i = c.querySelector('.sc-inner'); if (i) i.classList.remove('flipped'); }); }
  currentIndex = (currentIndex - 1 + total) % total;
  layout();
  preloadAhead(2);
}

/* ============================================
   💖 点赞 — localStorage 持久化
   ============================================ */
function initLikes() {
  const saved = JSON.parse(localStorage.getItem('fd_likes') || '{}');

  document.querySelectorAll('.like-btn').forEach(btn => {
    const idx = btn.dataset.idx;
    const countEl = btn.querySelector('.like-count');
    if (!countEl) return;

    // 恢复已保存的点赞
    if (saved[idx]) {
      btn.dataset.liked = 'true';
      btn.classList.add('liked');
      countEl.textContent = (parseInt(countEl.textContent) || 0) + 1;
    }

    // 绑定点击
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const liked = btn.dataset.liked === 'true';
      if (liked) {
        btn.dataset.liked = 'false';
        btn.classList.remove('liked');
        const c = parseInt(countEl.textContent) || 0;
        countEl.textContent = c > 0 ? c - 1 : 0;
        delete saved[idx];
      } else {
        btn.dataset.liked = 'true';
        btn.classList.add('liked');
        countEl.textContent = (parseInt(countEl.textContent) || 0) + 1;
        saved[idx] = true;
        likeBurst(btn);
      }
      localStorage.setItem('fd_likes', JSON.stringify(saved));
    });
  });
}

/* 点赞爱心迸发 */
function likeBurst(btn) {
  const rect = btn.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const emojis = ['❤️', '💕', '💖', '💗', '💓'];
  const count = 8;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.textContent = emojis[i % emojis.length];
    el.style.cssText = `
      position: fixed; pointer-events: none; z-index: 99999;
      left: ${cx}px; top: ${cy}px;
      font-size: ${0.8 + Math.random() * 0.8}rem;
      animation: likeFloat ${0.6 + Math.random() * 0.4}s ease-out forwards;
    `;
    const angle = (Math.PI * 2 / count) * i - Math.PI / 2;
    const dist = 40 + Math.random() * 30;
    el.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
    el.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }
}

/* ---- 自动播放 ---- */
function goPlay() { stopPlay(); isPlaying = true; timer = setInterval(goNext, 4400); }
function stopPlay() { clearInterval(timer); timer = null; isPlaying = false; }

/* ============================================
   渐进式预加载（不重试，失败即标记）
   ============================================ */
const failedImages = new Set();

function preloadImages(count) {
  for (let i = 0; i < Math.min(count, timelineData.length); i++) {
    const p = timelineData[i].photo;
    if (p && !failedImages.has(p)) {
      const img = new Image();
      img.onerror = () => failedImages.add(p);
      img.src = p;
    }
  }
}

/* 用户翻页时预载后面几张 */
function preloadAhead(step) {
  for (let k = 1; k <= step; k++) {
    const idx = (currentIndex + k) % timelineData.length;
    const p = timelineData[idx].photo;
    if (p && !failedImages.has(p)) {
      const img = new Image();
      img.onerror = () => failedImages.add(p);
      img.src = p;
    }
  }
}

/* ============================================
   飘浮爱心
   ============================================ */
function isMobile() {
  return window.matchMedia('(max-width: 767px)').matches;
}

function createFloatingHearts() {
  const container = document.getElementById('floatingHearts');
  if (!container) return;

  const emojis = ['❤️', '💕', '💖', '💗', '💓', '🌸', '✨', '💝'];
  const count = isMobile() ? 10 : 22;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-particle';
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
    heart.style.animationDuration = (8 + Math.random() * 12) + 's';
    heart.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(heart);
  }
}

/* 闪烁星星 */
function createStars() {
  const per = isMobile() ? 15 : 28;
  ['heroStars', 'spStars', 'epStars'].forEach(id => {
    const c = document.getElementById(id);
    if (!c) return;
    for (let i = 0; i < per; i++) {
      const s = document.createElement('div');
      s.className = 'hero-star';
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 100 + '%';
      s.style.animationDelay = (Math.random() * 5) + 's';
      s.style.animationDuration = (2 + Math.random() * 3) + 's';
      s.style.width = s.style.height = (2 + Math.random() * 3) + 'px';
      c.appendChild(s);
    }
  });
}

/* 飘落花瓣 */
function createPetals() {
  const count = isMobile() ? 6 : 14;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (10 + Math.random() * 15) + 's';
    p.style.animationDelay = (Math.random() * 20) + 's';
    p.style.width = (6 + Math.random() * 6) + 'px';
    p.style.height = p.style.width;
    document.body.appendChild(p);
  }
}

/* ============================================
   情书弹窗 — 打开 / 关闭
   ============================================ */
function openLetter() {
  const overlay = document.getElementById('letterOverlay');
  if (overlay) overlay.classList.add('show');
}

function closeLetter(e) {
  if (e && e.target !== e.currentTarget) return;
  const overlay = document.getElementById('letterOverlay');
  if (overlay) overlay.classList.remove('show');
}

/* 情书触发：只点爱心打开，空白区域正常下滑不误触 */
function initLetterTrigger() {
  const heart = document.querySelector('#letterTrigger .trigger-heart');
  if (!heart) return;
  const open = (e) => {
    e.stopPropagation();
    e.preventDefault();
    openLetter();
  };
  heart.addEventListener('click', open);
  heart.addEventListener('touchend', open, { passive: false });
}

/* ============================================
   撒花 🎉
   ============================================ */
function triggerConfetti() {
  const colors = ['#FFB7C5', '#C9A0DC', '#FFE4E1', '#FFD700', '#FF9EB5', '#87CEEB', '#98FB98'];
  const shapes = ['■', '●', '▲', '★', '♦', '♥'];

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    piece.style.left = Math.random() * 100 + '%';
    piece.style.color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.fontSize = (8 + Math.random() * 14) + 'px';
    piece.style.animationDuration = (2 + Math.random() * 3) + 's';
    piece.style.animationDelay = Math.random() * 2 + 's';
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(piece);

    // 动画结束后清除
    setTimeout(() => {
      if (piece.parentNode) piece.parentNode.removeChild(piece);
    }, 6000);
  }
}

/* ============================================
   检测结尾区进入视口 → 触发撒花
   ============================================ */
function initEndingAnimation() {
  const ending = document.getElementById('ending');
  if (!ending) return;

  let confettiFired = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !confettiFired) {
        confettiFired = true;
        triggerConfetti();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(ending);
}

/* ============================================
   🎵 音乐播放 — 滑屏自动开始 + 点击切换
   ============================================ */
let musicStarted = false;

function toggleMusic() {
  // 点击音乐按钮 → 提示气泡立刻消失
  const tip = document.getElementById('musicTip');
  if (tip) tip.classList.remove('show');
  const audio = document.getElementById('bgMusic');
  const btn = document.getElementById('musicBtn');
  if (!audio || !btn) return;

  if (audio.paused) {
    audio.play().then(() => {
      btn.classList.add('playing');
      btn.textContent = '🎶';
      musicStarted = true;
    }).catch(() => {
      btn.textContent = '🔇';
      setTimeout(() => { btn.textContent = '🎵'; }, 1000);
    });
  } else {
    audio.pause();
    btn.classList.remove('playing');
    btn.textContent = '🎵';
  }
}

/* ============================================
   💞 进度条 — 计算天数 + 滚动动画
   ============================================ */
function updateAnniversary() {
  const el = document.getElementById('progressSubtitle');
  if (!el) return;
  const now = new Date();
  const anni = new Date(2026, 10, 14); // 三周年 2026-11-14
  if (now >= anni) {
    el.textContent = '我们已经走满 3 周年啦 🎉';
    return;
  }
  const days = Math.ceil((anni - now) / (1000 * 60 * 60 * 24));
  el.textContent = `距离 3 周年还有 ${days} 天 💑`;
}

function initProgressBar() {
  updateAnniversary();
  const start = new Date(2023, 10, 14); // 2023-11-14
  const now = new Date();
  const totalDays = 1000;
  const elapsed = Math.min(Math.floor((now - start) / (1000 * 60 * 60 * 24)), totalDays);
  const progress = Math.min(Math.max(elapsed / totalDays, 0), 1);

  const fill = document.getElementById('progressFill');
  const percentEl = document.getElementById('progressPercent');
  const daysNum = document.getElementById('daysNumber');
  if (!fill || !percentEl || !daysNum) return;

  // 每次进入都强制归零再动画（保留仪式感）
  fill.style.transition = 'none';
  fill.style.width = '0%';
  void fill.offsetWidth;
  fill.style.transition = '';
  setTimeout(() => {
    fill.style.width = (progress * 100) + '%';
    percentEl.textContent = Math.round(progress * 100) + '%';
    // 动画开始后显示终点圆点（1.5s 后淡入）
    fill.classList.add('animate');
  }, 400);

  // 天数数字滚动
  animateNumber(daysNum, 0, elapsed, 1500);

  // 标记已到达的里程碑
  document.querySelectorAll('.milestone').forEach(m => {
    const need = parseFloat(m.dataset.progress);
    m.classList.toggle('reached', elapsed >= need);
  });
}

function animateNumber(el, from, to, duration) {
  const startTime = performance.now();
  function update(time) {
    const t = Math.min((time - startTime) / duration, 1);
    const current = Math.round(from + (to - from) * easeOutCubic(t));
    el.textContent = current;
    if (t < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

/* ============================================
   📅 公共天数计算
   ============================================ */
function getDaysTogether() {
  const start = new Date(2023, 10, 14);
  const now = new Date();
  const total = 1000;
  return Math.min(Math.floor((now - start) / (1000 * 60 * 60 * 24)), total);
}

/* ============================================
   📅 第2页 · 起点
   ============================================ */
let spDone = false;
let quoteTimer = null;
const SP_QUOTES = [
  '还记得那天的第一束花，\n从那天起，我的四季都开始有了你的颜色。',
  '你说过的话，我都记在心里；\n我送的心意，你都好好收着。',
  '第14天你编的那朵花，\n到现在还开在我心里。',
  '从一束花到一枚戒指，\n从一只玩偶到一生承诺。',
  '缺了一角的蛋糕，\n和你隔着屏幕说“我就是个小捣蛋鬼”。',
  '1000天前我选了那束花，\n1000天后我依然选你。',
  '我们吵过闹过，\n但从没松开过彼此的手。'
];

function initStartPoint() {
  const now = new Date();
  const total = 1000;
  const days = getDaysTogether();
  const remain = total - days;
  const pct = (days / total) * 100;

  const fill = document.getElementById('spBarFill');
  const numEl = document.getElementById('spDaysNum');
  const todayEl = document.getElementById('spToday');
  const remainEl = document.getElementById('spRemain');
  if (!fill || !numEl || !todayEl) return;

  // 日期 + 星期
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  todayEl.textContent = `${y}.${m}.${d}`;
  const wd = ['日','一','二','三','四','五','六'][now.getDay()];
  const label = document.getElementById('spWeekday');
  if (label) label.textContent = `星期${wd} · 我们的起点`;

  // 剩余天数
  if (remainEl) remainEl.textContent = remain > 0 ? `距离 1000 天还有 ${remain} 天` : '我们已经走满 1000 天啦！';

  // 进度条：强制先归零再动画（每次都重播）
  fill.style.transition = 'none';
  fill.style.width = '0%';
  void fill.offsetWidth;
  fill.style.transition = '';
  setTimeout(() => { fill.style.width = pct + '%'; }, 400);

  // 里程碑圆点（重播弹跳动画）
  [100, 300, 500].forEach((m, i) => {
    const dot = document.getElementById('spMile' + i);
    if (!dot) return;
    dot.classList.remove('reached');
    if (days >= m) { void dot.offsetWidth; dot.classList.add('reached'); }
  });

  // 数字滚动 + 心跳（每次都滚动）
  numEl.style.animation = 'heartBeat 2s ease-in-out infinite';
  animateNumber(numEl, 0, days, 1500);

  // 打字机（每次进入都重播，抽牌式不重复）
  const quoteEl = document.getElementById('spQuote');
  if (quoteEl) {
    if (quoteTimer) { clearInterval(quoteTimer); quoteTimer = null; }
    let deck = JSON.parse(localStorage.getItem('fd_quote_deck') || 'null');
    let pos = parseInt(localStorage.getItem('fd_quote_pos') || '0', 10);
    if (!deck || pos >= deck.length) {
      deck = SP_QUOTES.map((_, i) => i);
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      pos = 0;
    }
    const text = SP_QUOTES[deck[pos]];
    localStorage.setItem('fd_quote_deck', JSON.stringify(deck));
    localStorage.setItem('fd_quote_pos', String(pos + 1));
    quoteEl.innerHTML = '';
    setTimeout(() => {
      let idx = 0;
      quoteTimer = setInterval(() => {
        if (idx < text.length) {
          if (text[idx] === '\n') quoteEl.innerHTML += '<br>';
          else quoteEl.innerHTML += text[idx];
          idx++;
        } else {
          clearInterval(quoteTimer);
          quoteTimer = null;
        }
      }, 60);
    }, 1200);
  }
}

/* ============================================
   ✨ 第9页 · 终点 — 进度条走满100%
   ============================================ */
function initEnding() {
  const fill = document.getElementById('epBarFill');
  const numEl = document.getElementById('epDaysNum');
  const remainEl = document.getElementById('epRemain');
  if (remainEl) remainEl.textContent = '已经携手走过 1000 天，我们的故事还在继续';
  if (!fill || !numEl) return;
  // 从0走到100%
  fill.style.transition = 'none';
  fill.style.width = '0%';
  void fill.offsetWidth;
  fill.style.transition = '';
  setTimeout(() => {
    fill.style.width = '100%';
    animateNumber(numEl, 0, 1000, 1500);
    numEl.style.animation = 'heartBeat 2s ease-in-out infinite';
  }, 500);
  // 所有里程碑点亮（重播弹跳）
  document.querySelectorAll('#ending .sp-mile').forEach(m => {
    m.classList.remove('reached');
    void m.offsetWidth;
    m.classList.add('reached');
  });
}

/* ============================================
   🥚 隐藏彩蛋 — 点击 🎀 三下触发
   ============================================ */
let easterClickCount = 0;
let easterTimer = null;

function clickEaster() {
  easterClickCount++;

  // 闪一下反馈
  const ribbon = document.getElementById('easterEgg');
  if (!ribbon) return;
  ribbon.classList.remove('sparkle');
  void ribbon.offsetWidth; // 触发回流
  ribbon.classList.add('sparkle');

  // 第一次点击：在旁边弹气泡提示
  if (easterClickCount === 1) showEasterBubble(ribbon);

  // 0.8 秒内没点满 3 次重置（连续点击才触发）
  clearTimeout(easterTimer);
  easterTimer = setTimeout(() => { easterClickCount = 0; hideEasterBubble(); }, 800);

  if (easterClickCount < 3) return;

  // 满3次 → 移除气泡
  hideEasterBubble();

  // 点满 3 次！
  easterClickCount = 0;
  clearTimeout(easterTimer);
  heartBurst(ribbon);

  // 半秒后弹窗
  setTimeout(() => {
    const overlay = document.getElementById('easterOverlay');
    if (overlay) overlay.classList.add('show');
  }, 400);
}

function closeEaster(e) {
  if (e && e.target !== e.currentTarget) return;
  const overlay = document.getElementById('easterOverlay');
  if (overlay) overlay.classList.remove('show');
}

/* 彩蛋气泡提示 */
function showEasterBubble(ribbon) {
  if (document.querySelector('.easter-bubble')) return;
  const b = document.createElement('div');
  b.className = 'easter-bubble';
  b.textContent = '再点两下，有惊喜哦 🎁';
  ribbon.parentElement.appendChild(b);
}
function hideEasterBubble() {
  const b = document.querySelector('.easter-bubble');
  if (b) b.remove();
}

/* 设置第1页天数徽章 */
/* 爱心爆炸 */
function heartBurst(originEl) {
  const emojis = ['❤️', '💕', '💖', '💗', '💓', '✨', '🌸', '💝'];
  const rect = originEl.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  for (let i = 0; i < 20; i++) {
    const el = document.createElement('div');
    el.className = 'heart-burst';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = cx + 'px';
    el.style.top = cy + 'px';
    const angle = (Math.PI * 2 / 20) * i + (Math.random() - 0.5) * 0.3;
    const dist = 80 + Math.random() * 180;
    el.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
    el.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
    el.style.fontSize = (1 + Math.random() * 1.2) + 'rem';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }
}

/* ============================================
   📖 全屏翻页导航
   ============================================ */
let slideIndex = 0;
let slideTotal = 0;
let slideAnimating = false;
let slidesWrapper = null;

function initSlides() {
  slidesWrapper = document.getElementById('slidesWrapper');
  const slides = document.querySelectorAll('.slide');
  slideTotal = slides.length;
  if (!slideTotal) return;

  // 创建导航点
  const dots = document.getElementById('slideDots');
  slides.forEach((_, i) => {
    const d = document.createElement('span');
    d.className = 'slide-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goToSlide(i));
    dots.appendChild(d);
  });

  // 首次交互播放音乐（浏览器需要用户手势才能播）
  const firstTouch = () => { playMusicOnEntry(); cleanup(); };
  const cleanup = () => {
    document.removeEventListener('touchstart', firstTouch);
    document.removeEventListener('wheel', firstTouch);
    document.removeEventListener('click', firstTouch);
  };
  document.addEventListener('touchstart', firstTouch, { once: true });
  document.addEventListener('wheel', firstTouch, { once: true });
  document.addEventListener('click', firstTouch, { once: true });

  // 滚轮
  let wheeling = false;
  slidesWrapper.addEventListener('wheel', e => {
    if (document.getElementById('letterOverlay')?.classList.contains('show')) return;
    if (document.getElementById('easterOverlay')?.classList.contains('show')) return;
    e.preventDefault();
    if (wheeling || slideAnimating) return;
    wheeling = true;
    setTimeout(() => { wheeling = false; }, 600);
    if (e.deltaY > 0) goToSlide(slideIndex + 1);
    else goToSlide(slideIndex - 1);
  }, { passive: false });

  // 触摸滑动（全局监听，避免被内部元素拦截）
  let ty = 0, t0 = 0;
  document.addEventListener('touchstart', e => {
    if (document.getElementById('letterOverlay')?.classList.contains('show')) return;
    if (document.getElementById('easterOverlay')?.classList.contains('show')) return;
    ty = e.touches[0].clientY; t0 = Date.now();
  }, { passive: true });
  document.addEventListener('touchend', e => {
    if (document.getElementById('letterOverlay')?.classList.contains('show')) return;
    if (document.getElementById('easterOverlay')?.classList.contains('show')) return;
    const dy = ty - e.changedTouches[0].clientY;
    const dt = Date.now() - t0;

    // 当前页
    const curSlide = document.querySelectorAll('.slide')[slideIndex];

    // 第4页卡片背面：第一次滑动只滚内容，之后滚到边界才翻页
    if (curSlide && curSlide.id === 'timeline' && flipped) {
      const topCard = cards[currentIndex];
      const backBody = topCard ? topCard.querySelector('.sc-back-body') : null;
      if (backBody) {
        // 首次滑动：只滚内容，绝不翻页
        if (!cardFirstSwipe) {
          cardFirstSwipe = true;
          return;
        }
        const canDown = backBody.scrollTop + backBody.clientHeight >= backBody.scrollHeight - 2;
        if (Math.abs(dy) > 40) {
          if (dy > 0 && canDown) goToSlide(slideIndex + 1); // 上滑且到底 → 下一页
          if (dy < 0 && backBody.scrollTop <= 0) goToSlide(slideIndex - 1); // 顶部继续下滑 → 上一页
        }
        return;
      }
    }

    // 第5页（日常碎片）页内滚动：滚到边界才翻页
    if (curSlide && curSlide.id === 'daily') {
      const canDown = curSlide.scrollTop + curSlide.clientHeight >= curSlide.scrollHeight - 2;
      const canUp = curSlide.scrollTop <= 0;
      if (Math.abs(dy) > 40) {
        if (dy > 0 && canDown) goToSlide(slideIndex + 1);
        if (dy < 0 && canUp) goToSlide(slideIndex - 1);
      }
      return;
    }

    if (Math.abs(dy) > 50 && dt < 400) {
      dy > 0 ? goToSlide(slideIndex + 1) : goToSlide(slideIndex - 1);
    }
  }, { passive: true });

  // 键盘
  document.addEventListener('keydown', e => {
    if (document.getElementById('letterOverlay')?.classList.contains('show')) return;
    if (document.getElementById('easterOverlay')?.classList.contains('show')) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); goToSlide(slideIndex + 1); }
    if (e.key === 'ArrowUp') { e.preventDefault(); goToSlide(slideIndex - 1); }
  });

  // 初始位置
  updateSlide(0, true);
}

function goToSlide(idx) {
  if (slideAnimating) return;
  idx = Math.max(0, Math.min(idx, slideTotal - 1));
  if (idx === slideIndex) return;
  updateSlide(idx);
}

function updateSlide(idx, instant) {
  // 离开当前页
  triggerSlideLeave(slideIndex);
  slideAnimating = true;
  slideIndex = idx;
  if (slidesWrapper) {
    if (instant) slidesWrapper.style.transition = 'none';
    slidesWrapper.style.transform = `translateY(-${idx * 100}vh)`;
    if (instant) { void slidesWrapper.offsetWidth; slidesWrapper.style.transition = ''; }
  }
  // 更新导航点
  document.querySelectorAll('.slide-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  // 延迟触发页面内动画，等滑入到位
  setTimeout(() => triggerSlideEnter(idx), 350);
  setTimeout(() => { slideAnimating = false; }, 600);
}

/* 进入/离开页面时触发 */
function playMusicOnEntry() {
  if (musicStarted) return;
  const audio = document.getElementById('bgMusic');
  const btn = document.getElementById('musicBtn');
  if (!audio || !btn) return;
  audio.play().then(() => {
    btn.classList.add('playing');
    btn.textContent = '🎶';
    musicStarted = true;
  }).catch(() => {});
}

function triggerSlideEnter(idx) {
  const slides = document.querySelectorAll('.slide');
  const el = slides[idx];
  if (!el) return;
  // 第2页 → 天数进度 + 预载前2张
  if (el.id === 'start-point') { initStartPoint(); preloadImages(2); }
  // 第3页 → 进度条
  if (el.id === 'progress') initProgressBar();
  // 第4页 → 首次渲染卡片，之后保留状态；每次预载到第4张
  if (el.id === 'timeline') {
    if (!timelineRendered) { renderTimeline(); timelineRendered = true; }
    preloadImages(4);
  }
  // 第5页 → 日常碎片
  if (el.id === 'daily') renderDaily();
  // 第6页 → 一起走过
  if (el.id === 'together') renderTogether();
  // 第7页 → 备忘录
  if (el.id === 'notes') renderNotes();
  // 第9页 → 进度走满 + 撒花
  if (el.id === 'ending') { initEnding(); triggerConfetti(); }
}

/* 离开页面时停止 */
function triggerSlideLeave(idx) {
  const slides = document.querySelectorAll('.slide');
  const el = slides[idx];
  if (!el) return;
}

/* ============================================
   初始化
   ============================================ */
document.addEventListener('DOMContentLoaded', function () {
  // 刷新后强制回到顶部，防止浏览器恢复滚动位置导致翻页偏移
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  createFloatingHearts();
  createStars();
  createPetals();
  initLetterTrigger();
  initSlides();
  initEndingAnimation();
  initProgressBar();

  // 音乐提示气泡：延迟 2.5s 显示，停留 9s 后自动消失
  setTimeout(() => {
    const tip = document.getElementById('musicTip');
    if (tip) tip.classList.add('show');
  }, 2500);
  setTimeout(() => {
    const tip = document.getElementById('musicTip');
    if (tip) tip.classList.remove('show');
  }, 11500);
});
