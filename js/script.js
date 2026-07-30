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
    back: '今天是我们在一起的第一天。我买了一束花送给你，有点紧张，也不知道你喜不喜欢。但我觉得，好的恋爱应该从一束花开始。花是我挑的，你是我选的，这个开头我很满意。',
    photo: 'photos/01.jpg'
  },
  {
    date: '2023.11.28',
    title: '我们的第1️⃣4️⃣天 🌹',
    face: '我说过的，他都记得。',
    back: '第一次收到花，是她送的。一个男生很少有机会收到的属于自己的花，我跟她说过我不喜欢鲜花，没想到她记住了，给我做了一朵不会谢的，一朵手工编的花，花瓣一片一片绕出来的，边边角角都收得很整齐。我拿着看了很久，不是因为花多好看，是因为我说过的话，她都放在了心上，心想，这个女孩子怎么这么好。',
    photo: 'photos/02.jpg'
  },
  {
    date: '2023.12.04',
    title: '我们的第1️⃣0️⃣×2天 💍',
    face: '他送了你人生中第一枚戒指，还是亲手给你戴上的。',
    back: '第一次收到戒指，是他给的。第20天的晚上，他忽然掏出来，然后拉过我的手戴上去。我愣在那里，什么话都说不出来。原来被一个人认真对待的时候，是真的会傻掉的。',
    photo: 'photos/03.jpg'
  },
  {
    date: '2023.12.14',
    title: '我们的第 3️⃣0️⃣天 🧸 ',
    face: '你有很多小的了，我送你一个最大的，让你记得我。',
    back: '我送了他一只很大的玩偶，比他之前所有的都大。因为他房间里已经有好多小玩偶了，都是以前别人送的。他问我怎么买这么大一只，我说就是要大，大到你想忽略都忽略不了。这样以后你每次看到它，都会想起这是我送的。我要的就是这种存在感。',
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
    back: '今天是我们在一起的第365天。我们去买了一个小蛋糕，没有很隆重，就是一起挑了一个我们俩都喜欢的口味。切蛋糕的时候我忽然有点恍惚，觉得上次我们还在过一个月纪念日，怎么一转眼就一年了。但看着你坐在对面吃蛋糕的样子，又觉得这一年不长不短，刚刚好。蛋糕很甜，但你笑起来比蛋糕还甜。我心想，如果以后的每一年都能这样过，那我真的别无所求了。',
    photo: 'photos/06.jpg'
  },
  {
    date: '2025.04.17',
    title: '我们的第5️⃣2️⃣0️⃣天 💝',
    face: '第520天，平平淡淡的一顿火锅。',
    back: '今天是我们的第520天。没有特意安排什么，就是一起去吃了一家之前一直想去的火锅店。锅底端上来的时候热气腾腾的，你忙着涮肉，我忙着给你夹。吃到一半你抬起头，辣得满脸通红，跟我说“好好吃”。我看着你那副满足的样子，突然觉得，这样平平淡淡的日子，其实也挺好的。没有刻意的浪漫，没有精心准备的惊喜，但你坐在对面，辣得吸溜吸溜还在笑的样子，比任何礼物都让我觉得幸福。',
    photo: 'photos/07.jpg'
  },
  {
    date: '2025.11.14',
    title: '我们的第2️⃣年 💑',
    face: '两周年异地，人没到，但蛋糕和礼物到了。下次见面，我把拥抱也补上。',
    back: '今天是我们的两周年，异地。我没能陪你一起过，但给你点了你最喜欢的蛋糕，还有一份礼物。你打开的时候特别小心，结果还是不小心把蛋糕的一个角蹭掉了。你发消息跟我说“完了完了，我把蛋糕的一个脚搞没了”，然后发了一个哭哭的表情。我说没关系，你又说“我就是个小捣蛋鬼”。我看着那句话笑了好久，异地虽然不能一起切蛋糕，但隔着屏幕看你笨手笨脚的样子，也觉得好可爱。那个缺了一角的蛋糕，反而让这一天变得更真实、更像我们。',
    photo: 'photos/08.jpg'
  },
  {
    date: '2026.08.10',
    title: '我们的第1️⃣0️⃣0️⃣0️⃣天 ✨',
    face: '当天晚上更新，欢迎大家来看看我们的故事。',
    back: '1000天！我们的故事未完待续……',
    photo: 'photos/09.jpg'
  }
];

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

    const card = document.createElement('div');
    card.className = 'stack-card';
    card.dataset.idx = i;
    card.innerHTML = `
      <div class="sc-inner">
        <div class="sc-front">
          ${hasPhoto
            ? `<img class="sc-bg" src="${item.photo}" alt="${item.title}" loading="lazy"><div class="sc-overlay"></div>`
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
function flipCard() {
  if (flipping || total === 0) return;
  const top = cards[currentIndex];
  if (!top) return;
  const inner = top.querySelector('.sc-inner');
  if (!inner) return;

  flipped = !flipped;
  inner.classList.toggle('flipped', flipped);

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
}
function goPrev() {
  if (!total || flipping) return;
  if (flipped) { flipped = false; cards.forEach(c => { const i = c.querySelector('.sc-inner'); if (i) i.classList.remove('flipped'); }); }
  currentIndex = (currentIndex - 1 + total) % total;
  layout();
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
   飘浮爱心
   ============================================ */
function createFloatingHearts() {
  const container = document.getElementById('floatingHearts');
  if (!container) return;

  const emojis = ['❤️', '💕', '💖', '💗', '💓', '🌸', '✨', '💝'];
  const count = 15;

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

/* 飘落花瓣 */
function createPetals() {
  const count = 10;
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

/* 首次滑动/点击 → 自动播放音乐 */
function initAutoPlay() {
  function tryPlay() {
    if (musicStarted) return;
    const audio = document.getElementById('bgMusic');
    const btn = document.getElementById('musicBtn');
    if (!audio || !btn) return;
    audio.play().then(() => {
      btn.classList.add('playing');
      btn.textContent = '🎶';
      musicStarted = true;
    }).catch(() => {});
    cleanup();
  }
  function cleanup() {
    window.removeEventListener('scroll', tryPlay);
    window.removeEventListener('touchstart', tryPlay);
    window.removeEventListener('click', tryPlay);
    window.removeEventListener('wheel', tryPlay);
  }
  window.addEventListener('scroll', tryPlay, { passive: true });
  window.addEventListener('touchstart', tryPlay, { passive: true });
  window.addEventListener('click', tryPlay, { once: true });
  window.addEventListener('wheel', tryPlay, { passive: true, once: true });
}

/* ============================================
   💞 进度条 — 计算天数 + 滚动动画
   ============================================ */
function initProgressBar() {
  const start = new Date(2023, 10, 14); // 2023-11-14
  const end = new Date(2026, 7, 10);    // 2026-08-10
  const now = new Date();
  const totalDays = 1000;
  const elapsed = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  const progress = Math.min(Math.max(elapsed / totalDays, 0), 1);

  const fill = document.getElementById('progressFill');
  const percentEl = document.getElementById('progressPercent');
  const daysNum = document.getElementById('daysNumber');

  if (!fill || !percentEl || !daysNum) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      // 进度条动画
      fill.style.width = (progress * 100) + '%';
      fill.classList.add('animate');
      percentEl.textContent = Math.round(progress * 100) + '%';

      // 天数数字滚动
      animateNumber(daysNum, 0, Math.min(elapsed, totalDays), 1500);

      // 标记已到达的里程碑
      document.querySelectorAll('.milestone').forEach(m => {
        const need = parseFloat(m.dataset.progress);
        if (elapsed >= need) m.classList.add('reached');
      });

      observer.unobserve(entry.target);
    });
  }, { threshold: 0.25 });

  const container = document.querySelector('.progress-container');
  if (container) observer.observe(container);
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

  // 2 秒内没点满 3 次重置
  clearTimeout(easterTimer);
  easterTimer = setTimeout(() => { easterClickCount = 0; }, 2000);

  if (easterClickCount < 3) return;

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
  // 触发的区的动画
  triggerSlideEnter(idx);
  setTimeout(() => { slideAnimating = false; }, 600);
}

/* 进入/离开页面时触发 */
function triggerSlideEnter(idx) {
  const slides = document.querySelectorAll('.slide');
  const el = slides[idx];
  if (!el) return;
  // 第2页 → 启动卡片自动轮播
  if (el.id === 'timeline') goPlay();
  // 第4页 → 触发进度条
  if (el.id === 'progress') initProgressBar();
  // 第5页 → 撒花
  if (el.id === 'ending') triggerConfetti();
}

/* 离开页面时停止 */
function triggerSlideLeave(idx) {
  const slides = document.querySelectorAll('.slide');
  const el = slides[idx];
  if (!el) return;
  // 离开第2页 → 停掉卡片轮播
  if (el.id === 'timeline') stopPlay();
}

/* ============================================
   初始化
   ============================================ */
document.addEventListener('DOMContentLoaded', function () {
  // 刷新后强制回到顶部，防止浏览器恢复滚动位置导致翻页偏移
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  renderTimeline();
  initAutoPlay();
  createFloatingHearts();
  createPetals();
  initSlides();
  initEndingAnimation();
  initProgressBar();
});
