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
   信封情书 — 展开 / 收起
   ============================================ */
let isLetterOpen = false;

function toggleLetter() {
  const envelope = document.getElementById('envelope');
  const hint = document.getElementById('envelopeHint');

  if (!envelope) return;

  isLetterOpen = !isLetterOpen;

  if (isLetterOpen) {
    envelope.classList.add('open');
    if (hint) hint.textContent = '👆 轻点信封收起';
  } else {
    envelope.classList.remove('open');
    if (hint) hint.textContent = '👆 轻点信封打开';
  }
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
   初始化
   ============================================ */
document.addEventListener('DOMContentLoaded', function () {
  renderTimeline();
  createFloatingHearts();
  initScrollAnimation();
  initEndingAnimation();
});
