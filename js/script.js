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
    title: '第一天 💕',
    desc: '我们的故事从这一天开始。从今以后，每个重要的日子都有你。',
    photo: ''  // ← 照片: photos/01.jpg
  },
  {
    date: '2023.12.25',
    title: '第一个圣诞节 🎄',
    desc: '和你一起度过的第一个圣诞节，连空气都是甜的。',
    photo: ''
  },
  {
    date: '2024.01.01',
    title: '新年快乐 🎆',
    desc: '一起跨年，迎接崭新的一年。有你在身边，未来值得期待。',
    photo: ''
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
   渲染时间轴
   ============================================ */
function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;

  let html = '';
  timelineData.forEach((item, index) => {
    // 照片区域
    let photoHtml = '';
    if (item.photo) {
      photoHtml = `<img src="${item.photo}" alt="${item.title}" loading="lazy">`;
    } else {
      photoHtml = `
        <div class="photo-placeholder">
          <span class="placeholder-icon">📸</span>
          <span class="placeholder-text">放入我们的回忆</span>
          <span class="placeholder-hint">（添加照片到 photos/ 文件夹）</span>
        </div>
      `;
    }

    html += `
      <div class="timeline-item" style="transition-delay: ${index * 0.1}s">
        <div class="timeline-card">
          <div class="timeline-photo">
            ${photoHtml}
          </div>
          <div class="timeline-date">${item.date}</div>
          <div class="timeline-title">${item.title}</div>
          <div class="timeline-desc">${item.desc}</div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

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
