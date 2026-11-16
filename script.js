/**
 * Motion Graphic Designer & Video Editor Portfolio
 * Interactive Script:
 * - Direct Contact Actions (Instant WhatsApp, 1-Click Email Copy, Direct Call)
 * - Motion Graphics & Video Modal with Live Kinetic Canvas Preview
 * - Category Filtering for Works
 * - Interactive Soundwave & Audio Visualizer Canvas
 * - Animated Statistics Counter
 */

// ==========================================
// 1. Toast Notification System
// ==========================================
function showToast(message) {
  const toast = document.getElementById('toast-box');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// ==========================================
// 2. Direct Contact Hub Handlers (No Forms)
// ==========================================
const emailAddress = "motion.creator@studio.com";
const phoneNumber = "+966501234567";
const whatsappNumber = "966501234567";

function copyEmailToClipboard() {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(emailAddress).then(() => {
      showToast("✓ تم نسخ البريد الإلكتروني إلى الحافظة: " + emailAddress);
    }).catch(() => {
      showToast("✓ البريد: " + emailAddress);
    });
  } else {
    // Fallback
    const tempInput = document.createElement("input");
    tempInput.value = emailAddress;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showToast("✓ تم نسخ البريد الإلكتروني: " + emailAddress);
  }
}

function openWhatsAppDirect() {
  const defaultText = encodeURIComponent("مرحباً بك! أرغب في الاستفسار والتعاون معك في مشروع موشن جرافيك ومونتاج فيديو.");
  const url = `https://wa.me/${whatsappNumber}?text=${defaultText}`;
  window.open(url, '_blank');
}

function makeDirectCall() {
  window.location.href = `tel:${phoneNumber}`;
}

// ==========================================
// 3. Projects Data (قائمة الفيديوهات والأعمال)
// 💡 الطريقة الأولى (YouTube & Vimeo):
// ببساطة الصق رابط الفيديو الخاص بك من يوتيوب في السطر videoUrl
// يقوم الموقع تلقائياً بجلب صورة الغلاف وتشغيل الفيديو بدقة عالية فوراً!
// ==========================================
const videoProjects = [
  {
    id: 1,
    title: "إعلان ترويجي موشن جرافيك -لمطبعة تجارية",
    category: "commercial",
    categoryName: "إعلانات وموشن 3D",
    videoUrl: "https://youtube.com/shorts/73x6XTc1I7E?si=UVE4JjMSAB1gPCCz", // 👈 استبدل هذا برابط الفيديو الخاص بك من يوتيوب
    thumbnail: "", // اختياري: يجلبه الموقع تلقائياً من يوتيوب، أو ضع مسار صورة مخصصة
    desc: "موشن جرافيك ثلاثي الأبعاد ومونتاج إيقاعي فائق السرعة مع تصميم صوتي احترافي وتصحيح ألوان درامي.",
    duration: "00:45",
    format: "4K UHD • 60 FPS",
    tools: ["After Effects", "Premiere Pro", "DaVinci"],
    icon: "fa-car-side"
  },
  {
    id: 2,
    title: "تحريك الهوية البصرية وشعار البنك الرقمي",
    category: "brand",
    categoryName: "تحريك هويات وتيبوغرافي",
    videoUrl: "https://youtu.be/udb-HaFz-og", // 👈 استبدل برابط يوتيوب الخاص بك
    thumbnail: "",
    desc: "تصميم حركة أنيقة ومدروسة تعكس الثقة والسرعة لتطبيق التكنولوجيا المالية بنمط Minimalist عصري.",
    duration: "00:20",
    format: "4K UHD • 60 FPS",
    tools: ["After Effects", "Illustrator", "Audition"],
    icon: "fa-fingerprint"
  },
  {
    id: 3,
    title: "سلسلة فيديوهات ريلز وسوشيال ميديا للمؤثرين",
    category: "reels",
    categoryName: "مونتاج وسوشيال ميديا",
    videoUrl: "https://www.youtube.com/watch?v=WhWc3b3KhnY", // 👈 استبدل برابط يوتيوب الخاص بك
    thumbnail: "",
    desc: "مونتاج إيقاعي سريع (Retention Editing) مع مؤثرات بصرية وتيبوغرافي حركي لرفع معدل المشاهدات إلى +10 ملايين.",
    duration: "00:58",
    format: "1080x1920 (9:16)",
    tools: ["Premiere Pro", "After Effects", "Soundly"],
    icon: "fa-bolt"
  },
  {
    id: 4,
    title: "فيديو تعريفي توضيحي (Explainer Video) لمنصة سحابية",
    category: "commercial",
    categoryName: "إعلانات وموشن 3D",
    videoUrl: "https://www.youtube.com/watch?v=R2fZk_f9Oig", // 👈 استبدل برابط يوتيوب الخاص بك
    thumbnail: "",
    desc: "تبسيط المفاهيم التقنية المعقدة إلى رسوم متحركة ممتعة وجذابة مع تعليق صوتي ومؤثرات صوتية محكمة.",
    duration: "01:30",
    format: "4K UHD • 30 FPS",
    tools: ["After Effects", "Illustrator"],
    icon: "fa-cubes"
  },
  {
    id: 5,
    title: "تريلر وثائقي سينمائي وتصحيح ألوان HDR",
    category: "color",
    categoryName: "تصحيح ألوان ومؤثرات",
    videoUrl: "https://www.youtube.com/watch?v=mE-f55WJjM8", // 👈 استبدل برابط يوتيوب الخاص بك
    thumbnail: "",
    desc: "مونتاج سردي درامي مع ضبط وتصحيح ألوان متقدم باستخدام DaVinci Resolve لإضفاء لمسة سينمائية عميقة.",
    duration: "02:15",
    format: "4K DCI • 24 FPS",
    tools: ["DaVinci Resolve Studio", "Premiere Pro"],
    icon: "fa-film"
  },
  {
    id: 6,
    title: "تتر بداية ومقدمة حركية لبرنامج يوتيوب شهير",
    category: "brand",
    categoryName: "تحريك هويات وتيبوغرافي",
    videoUrl: "https://www.youtube.com/watch?v=YE7VzlLtp-4", // 👈 استبدل برابط يوتيوب الخاص بك
    thumbnail: "",
    desc: "افتتاحية كينتيك تيبوغرافي حيوية مع تداخلات ثلاثية الأبعاد وصوتيات مخصصة تمنح البرنامج هوية فريدة.",
    duration: "00:25",
    format: "4K UHD • 60 FPS",
    tools: ["After Effects", "DaVinci"],
    icon: "fa-play"
  }
];

// دالة ذكية لاستخراج معرف يوتيوب وصورة الغلاف التلقائية ورابط التضمين
function getYouTubeInfo(url) {
  if (!url) return null;
  const str = url.trim();
  let videoId = null;

  if (str.includes('youtube.com/watch?v=')) {
    videoId = str.split('watch?v=')[1].split('&')[0];
  } else if (str.includes('youtu.be/')) {
    videoId = str.split('youtu.be/')[1].split('?')[0];
  } else if (str.includes('youtube.com/shorts/')) {
    videoId = str.split('shorts/')[1].split('?')[0];
  } else if (str.includes('youtube.com/embed/')) {
    videoId = str.split('embed/')[1].split('?')[0];
  }

  if (videoId) {
    return {
      id: videoId,
      embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`,
      autoThumb: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    };
  }
  return null;
}

// ==========================================
// 4. Render Works & Category Filtering
// ==========================================
function renderWorks(filter = 'all') {
  const container = document.getElementById('works-container');
  if (!container) return;

  const filtered = filter === 'all' 
    ? videoProjects 
    : videoProjects.filter(item => item.category === filter);

  container.innerHTML = filtered.map(item => {
    const ytInfo = getYouTubeInfo(item.videoUrl);
    // استخدام صورة الغلاف المخصصة أو جلبها تلقائياً من سيرفرات يوتيوب
    const thumbUrl = (item.thumbnail && item.thumbnail.trim() !== '')
      ? item.thumbnail.trim()
      : (ytInfo ? ytInfo.autoThumb : '');

    const bgStyle = thumbUrl
      ? `background-image: url('${thumbUrl}'); background-size: cover; background-position: center;`
      : `background: #11131a;`;

    return `
      <div class="work-card" onclick="openVideoModal(${item.id})">
        <div class="work-thumbnail">
          <div class="work-preview-canvas" style="${bgStyle}">
            ${!thumbUrl ? `<i class="fas ${item.icon} work-thumb-icon"></i>` : ''}
            <span class="work-badge-time">${item.duration}</span>
            <span class="work-badge-format">${item.format}</span>
          </div>
          <div class="work-hover-overlay">
            <div class="overlay-play-icon">
              <i class="fas fa-play"></i>
            </div>
          </div>
        </div>
        <div class="work-content">
          <span class="work-tag">${item.categoryName}</span>
          <h3 class="work-title">${item.title}</h3>
          <p class="work-desc">${item.desc}</p>
          <div class="work-tools">
            ${item.tools.map(t => `<span class="tool-chip">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Filter button logic
document.querySelectorAll('.filter-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const filter = chip.getAttribute('data-filter') || 'all';
    renderWorks(filter);
  });
});

// ==========================================
// 5. Cinematic Video Modal (YouTube / Vimeo / MP4)
// ==========================================
let modalAnimFrame = null;

function openVideoModal(projectId = 1) {
  const project = videoProjects.find(p => p.id === projectId) || videoProjects[0];
  const modal = document.getElementById('video-modal');
  const titleEl = document.getElementById('modal-video-title');
  const metaTimeEl = document.getElementById('modal-video-time');
  const metaFormatEl = document.getElementById('modal-video-format');

  if (titleEl) titleEl.textContent = project.title;
  if (metaTimeEl) metaTimeEl.textContent = project.duration;
  if (metaFormatEl) metaFormatEl.textContent = project.format;

  const realVideo = document.getElementById('modal-real-video');
  const iframeVideo = document.getElementById('modal-iframe-video');
  const canvas = document.getElementById('modal-canvas');
  const hud = document.getElementById('modal-hud');

  // إذا تم توفير رابط فيديو
  if (project.videoUrl && project.videoUrl.trim() !== '') {
    const url = project.videoUrl.trim();
    const ytInfo = getYouTubeInfo(url);

    // 1. يوتيوب (تضمين سريع مع تشغيل تلقائي)
    if (ytInfo) {
      if (realVideo) { realVideo.pause(); realVideo.style.display = 'none'; realVideo.src = ''; }
      if (canvas) canvas.style.display = 'none';
      if (hud) hud.style.display = 'none';
      if (iframeVideo) {
        iframeVideo.src = ytInfo.embedUrl;
        iframeVideo.style.display = 'block';
      }
    } 
    // 2. فيميو Vimeo
    else if (url.includes('vimeo.com/')) {
      const vimeoId = url.split('vimeo.com/')[1].split('?')[0];
      const embedUrl = `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
      if (realVideo) { realVideo.pause(); realVideo.style.display = 'none'; realVideo.src = ''; }
      if (canvas) canvas.style.display = 'none';
      if (hud) hud.style.display = 'none';
      if (iframeVideo) {
        iframeVideo.src = embedUrl;
        iframeVideo.style.display = 'block';
      }
    } 
    // 3. ملف محلي MP4
    else {
      if (iframeVideo) { iframeVideo.src = ''; iframeVideo.style.display = 'none'; }
      if (canvas) canvas.style.display = 'none';
      if (hud) hud.style.display = 'none';
      if (realVideo) {
        realVideo.src = url;
        realVideo.style.display = 'block';
        realVideo.play().catch(() => {});
      }
    }
  } else {
    // العرض الحركي التجريبي في حال لم يتم وضع رابط فيديو
    if (realVideo) { realVideo.pause(); realVideo.src = ''; realVideo.style.display = 'none'; }
    if (iframeVideo) { iframeVideo.src = ''; iframeVideo.style.display = 'none'; }
    if (canvas) canvas.style.display = 'block';
    if (hud) hud.style.display = 'flex';
    startCinematicCanvas(project.title);
  }

  modal.classList.add('active');
}

function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  modal.classList.remove('active');

  const realVideo = document.getElementById('modal-real-video');
  const iframeVideo = document.getElementById('modal-iframe-video');
  if (realVideo) {
    realVideo.pause();
    realVideo.src = '';
  }
  if (iframeVideo) {
    iframeVideo.src = '';
  }
  if (modalAnimFrame) {
    cancelAnimationFrame(modalAnimFrame);
    modalAnimFrame = null;
  }
}

// Interactive Kinetic Canvas preview simulation
function startCinematicCanvas(text) {
  const canvas = document.getElementById('modal-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;

  let frame = 0;
  const accentColor = '#206d97';

  function render() {
    frame++;
    ctx.fillStyle = '#08090c';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Grid Lines (Editor timeline style)
    ctx.strokeStyle = '#181b25';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Dynamic Soundwaves
    const centerY = canvas.height / 2;
    const waveCount = 60;
    const barWidth = canvas.width / waveCount;

    for (let i = 0; i < waveCount; i++) {
      const height = Math.sin((frame * 0.08) + (i * 0.25)) * 60 + Math.cos((frame * 0.04) + i) * 35;
      ctx.fillStyle = (i % 2 === 0) ? accentColor : 'rgba(32, 109, 151, 0.4)';
      ctx.fillRect(i * barWidth + 2, centerY - Math.abs(height) / 2, barWidth - 4, Math.abs(height));
    }

    // Central Kinetic Badge
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, 80 + Math.sin(frame * 0.05) * 10, 0, Math.PI * 2);
    ctx.stroke();

    // Play icon in center
    ctx.fillStyle = accentColor;
    ctx.beginPath();
    ctx.moveTo(-10, -18);
    ctx.lineTo(18, 0);
    ctx.lineTo(-10, 18);
    ctx.closePath();
    ctx.fill();

    // Timecode simulation
    ctx.restore();
    ctx.fillStyle = '#8b92a5';
    ctx.font = '14px monospace';
    ctx.fillText(`REC • 00:00:${Math.floor((frame % 600) / 10).toString().padStart(2, '0')}:${(frame % 30).toString().padStart(2, '0')} [RENDER ACTIVE]`, 25, 40);

    modalAnimFrame = requestAnimationFrame(render);
  }

  if (modalAnimFrame) cancelAnimationFrame(modalAnimFrame);
  render();
}

// Close modal on escape or background click
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeVideoModal();
});

document.getElementById('video-modal')?.addEventListener('click', (e) => {
  if (e.target.id === 'video-modal') closeVideoModal();
});

// ==========================================
// 6. Animated Statistics Numbers
// ==========================================
const statNumbers = document.querySelectorAll('.stat-num');
let statsCounted = false;

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !statsCounted) {
      statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target') || '0', 10);
        const suffix = stat.getAttribute('data-suffix') || '';
        let current = 0;
        const duration = 1500;
        const step = target / (duration / 25);

        const counterTimer = setInterval(() => {
          current += step;
          if (current >= target) {
            stat.textContent = `${target}${suffix}`;
            clearInterval(counterTimer);
          } else {
            stat.textContent = `${Math.floor(current)}${suffix}`;
          }
        }, 25);
      });
      statsCounted = true;
    }
  });
}, { threshold: 0.3 });

const statsEl = document.getElementById('stats-section');
if (statsEl) statsObserver.observe(statsEl);

// Initialize works grid on load
document.addEventListener('DOMContentLoaded', () => {
  renderWorks();
});
