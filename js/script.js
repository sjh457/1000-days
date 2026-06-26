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
    title: '我们的第一天 💕',
    desc: '今天是我们在一起的第一天。我买了一束花送给你，有点紧张，也不知道你喜不喜欢。但我觉得，好的恋爱应该从一束花开始。花是我挑的，你是我选的，这个开头我很满意。',
    photo: 'photos/01.png'  // ← 照片: photos/01.jpg
  },
  {
    date: '2023.11.17',
    title: '第一次拍合照 📸',
    desc: '这张照片里只有我们的背影，和那个歪歪扭扭的爱心。没有正脸，没有表情，但它是我们的第一张合照。以后我们会拍很多很多张，但这张永远是最特别的———因为从这一刻开始，我们有了“我们”的照片。',
    photo: 'photos/02.png'
  },
  {
    date: '2023.11.28',
    title: '我们的第1️⃣4️⃣💕天',
    desc: '第一次收到花，是她送的。一个男生很少有机会收到的属于自己的花，我跟她说过我不喜欢鲜花，没想到她记住了，给我做了一朵不会谢的，一朵手工编的花，花瓣一片一片绕出来的，边边角角都收得很整齐。我拿着看了很久，不是因为花多好看，是因为我说过的话，她都放在了心上，心想，这个女孩子怎么这么好。',
    photo: 'photos/03.jpg'
  },
  {
    date: '2024.02.14',
    title: '第一个情人节 🌹',
    desc: '和你在一起后的第一个情人节，每一天都像在过情人节。',
    photo: ''
  },
  {
    date: '2024.08.14',
    title: '在一起300天 🎀',
    desc: '300天啦！时间过得真快，快乐的日子总是转瞬即逝。',
    photo: ''
  },
  {
    date: '2024.11.14',
    title: '一周年快乐 🎂',
    desc: '一周年！365天，说长不长，说短不短，但每一天都很幸福。',
    photo: ''
  },
  {
    date: '2025.02.14',
    title: '第二个情人节 💝',
    desc: '又是情人节，还是很心动，像第一天认识你那样。',
    photo: ''
  },
  {
    date: '2025.11.14',
    title: '两周年 💑',
    desc: '两年了，730个日夜，还是像第一天一样爱你。',
    photo: ''
  },
  {
    date: '2026.08.10',
    title: '第1000天 ✨',
    desc: '1000天！我们的故事未完待续……',
    photo: ''
  }
];

/* ============================================
   ♠ 卡片堆叠 — 自动轮播 + 滑动切换
   ============================================ */
let SC = [], SD = [], si = 0, sn = 0, sp = true, st = null, sx = 0, swiped = false;

function renderTimeline() {
  const c = document.getElementById('timelineContainer');
  if (!c) return;

  c.innerHTML = `
    <div class="stack-wrap" id="stackWrap">
      <div class="stack-hint" id="stackHint">← 滑动切换  |  点击暂停</div>
      <div class="stack-cards" id="stackCards"></div>
      <div class="stack-bar">
        <div class="stack-dots" id="stackDots"></div>
      </div>
    </div>
  `;

  const el = document.getElementById('stackCards');
  const dot = document.getElementById('stackDots');

  timelineData.forEach((item, i) => {
    const summary = item.desc.length > 60 ? item.desc.substring(0, 60) + '…' : item.desc;
    const hasPhoto = !!item.photo;

    const card = document.createElement('div');
    card.className = 'stack-card';
    card.dataset.idx = i;
    card.innerHTML = `
      ${hasPhoto
        ? `<div class="sc-bg" style="background-image:url(${item.photo})"></div><div class="sc-overlay"></div>`
        : `<div class="sc-bg sc-bg-grad"></div>`
      }
      <div class="sc-body">
        <div class="sc-date">${item.date}</div>
        <div class="sc-title">${item.title}</div>
        <div class="sc-summary">${summary}</div>
        <div class="sc-num">${i+1}/${timelineData.length}</div>
      </div>
    `;
    el.appendChild(card);

    const d = document.createElement('span');
    d.className = 'sd' + (i===0?' on':'');
    dot.appendChild(d);
  });

  SC = [...document.querySelectorAll('.stack-card')];
  SD = [...document.querySelectorAll('.sd')];
  sn = SC.length; si = 0;
  layout();

  // Swipe
  const w = document.getElementById('stackWrap');
  w.addEventListener('touchstart', e => { sx = e.touches[0].clientX; swiped = false; }, { passive: true });
  w.addEventListener('touchend', e => {
    const dx = sx - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) { swiped = true; dx > 0 ? next() : prev(); }
  }, { passive: true });

  // Click card → play/pause
  el.addEventListener('click', () => { if (swiped) return; togglePlay(); });

  // Hint auto-hide
  setTimeout(() => { const h = document.getElementById('stackHint'); if (h) h.style.opacity = '0'; }, 5000);

  goPlay();
}

function layout() {
  SC.forEach((card, i) => {
    const off = (i - si + sn) % sn;
    card.dataset.off = off;
    card.classList.remove('out');
    if (off === 0) {
      card.style.cssText = 'transform:scale(1)translateY(0);z-index:99;opacity:1;pointer-events:auto';
    } else if (off === 1) {
      card.style.cssText = 'transform:scale(0.93)translateY(16px);z-index:50;opacity:1;pointer-events:none';
    } else if (off === 2) {
      card.style.cssText = 'transform:scale(0.86)translateY(32px);z-index:20;opacity:0.6;pointer-events:none';
    } else {
      card.style.cssText = `transform:scale(0.80)translateY(48px);z-index:${20-off};opacity:0;pointer-events:none`;
    }
  });
  SD.forEach((d, i) => d.classList.toggle('on', i === si));
}

function next() {
  if (!sn) return;
  const cur = SC[si];
  if (cur) cur.classList.add('out');
  setTimeout(() => { si = (si + 1) % sn; layout(); kick(); }, 400);
}
function prev() {
  if (!sn) return;
  si = (si - 1 + sn) % sn; layout(); kick();
}
function goPlay() { sp = true; st = setInterval(next, 4200); }
function togglePlay() {
  if (sp) { clearInterval(st); st = null; sp = false; }
  else goPlay();
}
function kick() { if (sp) { clearInterval(st); st = setInterval(next, 4200); } }

/* ============================================
   滚动动画 — Intersection Observer
   ============================================ */
function initScrollAnimation() {
  const items = document.querySelectorAll('.timeline-item');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // 只触发一次
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  items.forEach(item => observer.observe(item));
}

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

/* ============================================
   情书弹窗 — 打开 / 关闭
   ============================================ */
function openLetter() {
  const overlay = document.getElementById('letterOverlay');
  if (overlay) overlay.classList.add('show');
}

function closeLetter(e) {
  // 只有点击背景遮罩层才关闭（按钮上的 onClick 直接调）
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
   初始化
   ============================================ */
document.addEventListener('DOMContentLoaded', function () {
  renderTimeline();
  createFloatingHearts();
  initScrollAnimation();
  initEndingAnimation();
  initProgressBar(); // 💞 进度条
  initAutoPlay();    // 🎵 滑屏自动播放
});
