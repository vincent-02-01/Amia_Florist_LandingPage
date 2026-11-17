const root = document.documentElement;
const header = document.querySelector(".site-header");
const themeButton = document.querySelector(".theme-toggle");
const languageButton = document.querySelector(".language-toggle");
const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const panels = [...document.querySelectorAll(".panel")];
const dots = [...document.querySelectorAll(".section-dots a")];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const englishText = new Map(
  Object.entries({
    "Đi đến nội dung chính": "Skip to main content",
    "Giới thiệu": "About",
    "Dịch vụ": "Services",
    "Bộ sưu tập": "Collection",
    "Liên hệ": "Contact",
    "Trang chủ": "Home",
    "Thông điệp": "Our message",
    "Quy trình": "Process",
    "FLORAL STUDIO · ĐÀ NẴNG": "FLORAL STUDIO · DA NANG",
    "Hoa kể thay": "Flowers express",
    "những lời yêu.": "the words of love.",
    "Những thiết kế hoa tinh tế dành cho khoảnh khắc riêng của bạn — được tuyển chọn, tạo hình và trao gửi bằng sự trân trọng.":
      "Thoughtful floral designs for your most personal moments — carefully selected, artfully arranged and delivered with love.",
    "Khám phá bộ sưu tập": "Explore the collection",
    "Đặt hoa theo yêu cầu": "Order bespoke flowers",
    "ẢNH HERO": "HERO IMAGE",
    "Khuyên dùng 1200 × 1600px": "Recommended 1200 × 1600px",
    "Cuộn để khám phá": "Scroll to explore",
    "/ CÂU CHUYỆN": "/ OUR STORY",
    "CHÚNG TÔI LÀ AI": "WHO WE ARE",
    "Không chỉ là hoa.": "More than flowers.",
    "Đó là một cảm xúc.": "It is a feeling.",
    "ẢNH STUDIO": "STUDIO IMAGE",
    "Amia là một studio hoa tươi ở Đà Nẵng, nơi mỗi thiết kế bắt đầu từ câu chuyện, cảm xúc và người nhận.":
      "Amia is a floral studio in Da Nang, where every design begins with a story, a feeling and the person receiving it.",
    "Chúng tôi tin vẻ đẹp không cần ồn ào. Từng cành hoa được chọn lọc, từng khoảng thở được cân nhắc để tạo nên một món quà tự nhiên, thanh lịch và có dấu ấn riêng.":
      "We believe beauty does not need to be loud. Every stem and every quiet space is considered to create a natural, elegant gift with its own character.",
    "Thiết kế riêng": "Bespoke design",
    "cho mỗi câu chuyện": "for every story",
    "Hoa tươi": "Fresh flowers",
    "chọn lọc mỗi ngày": "selected daily",
    "Xem dịch vụ của chúng tôi": "Discover our services",
    "DỊCH VỤ CỦA AMIA": "AMIA SERVICES",
    "Cho mỗi dịp,": "For every occasion,",
    "một cách nở hoa.": "a way to bloom.",
    "Từ một bó hoa trao tay đến không gian tiệc đáng nhớ, chúng tôi lắng nghe và thiết kế theo câu chuyện của bạn.":
      "From a hand-delivered bouquet to an unforgettable celebration, we listen and design around your story.",
    "Hoa bó & Quà tặng": "Bouquets & Gifts",
    "Sinh nhật · Kỷ niệm · Chúc mừng · Trao gửi yêu thương":
      "Birthdays · Anniversaries · Celebrations · With love",
    "Hoa cưới": "Wedding Flowers",
    "Hoa cầm tay · Hoa cài áo · Trang trí lễ cưới":
      "Bridal bouquets · Boutonnieres · Wedding styling",
    "Hoa tiệc & Sự kiện": "Events & Celebrations",
    "Hoa tiệc ở Đà Nẵng · Khai trương · Không gian thương hiệu":
      "Event flowers in Da Nang · Openings · Brand spaces",
    "Hoa định kỳ": "Flower Subscriptions",
    "Nhà riêng · Văn phòng · Nhà hàng · Khách sạn":
      "Homes · Offices · Restaurants · Hotels",
    "MỘT VÀI THIẾT KẾ": "SELECTED DESIGNS",
    "Bộ sưu tập": "The collection",
    "được yêu thích.": "you love.",
    "ẢNH 01": "IMAGE 01",
    "ẢNH 02": "IMAGE 02",
    "ẢNH 03": "IMAGE 03",
    "01 / Hoa bó": "01 / Bouquet",
    "02 / Hoa tiệc": "02 / Event",
    "03 / Hoa cưới": "03 / Wedding",
    "CÁCH AMIA LÀM VIỆC": "THE AMIA PROCESS",
    "Từ câu chuyện": "From your story",
    "đến bó hoa.": "to your flowers.",
    "Chia sẻ": "Share",
    "Cho chúng tôi biết dịp, người nhận, phong cách và ngân sách bạn mong muốn.":
      "Tell us about the occasion, recipient, preferred style and budget.",
    "Đề xuất": "Discover",
    "Amia tư vấn bảng màu, kiểu dáng và lựa chọn hoa phù hợp theo mùa.":
      "Amia suggests a seasonal palette, composition and flower selection.",
    "Thực hiện": "Create",
    "Florist tạo hình thủ công, chăm chút từng chi tiết và thông điệp đi kèm.":
      "Our florist creates every piece by hand, caring for each detail and personal note.",
    "Trao gửi": "Deliver",
    "Hoa được giao cẩn thận trong nội thành Đà Nẵng, đúng thời gian đã hẹn.":
      "Your flowers are carefully delivered across Da Nang at the arranged time.",
    "Bắt đầu một đơn hoa": "Start your flower order",
    "Hoa không cần nói.": "Flowers need no words.",
    "Nhưng luôn khiến người ta": "Yet they always make us",
    "cảm thấy được yêu.": "feel loved.",
    "HÃY KỂ AMIA NGHE": "TELL AMIA YOUR STORY",
    "Bạn đang muốn": "What would you like",
    "gửi lời gì?": "to say?",
    "Nhắn cho chúng tôi để được tư vấn hoa tươi, hoa cưới hoặc hoa tiệc tại Đà Nẵng.":
      "Message us for advice on fresh flowers, wedding florals or event styling in Da Nang.",
    "ĐỊA CHỈ": "ADDRESS",
    "75 Nguyễn Hoàng, Quận Hải Châu": "75 Nguyen Hoang, Hai Chau District",
    "Đà Nẵng, Việt Nam": "Da Nang, Vietnam",
    "Xem trên bản đồ": "View on map",
    "GIỜ MỞ CỬA": "OPENING HOURS",
    "Thứ Hai — Chủ Nhật": "Monday — Sunday",
    "LIÊN HỆ": "CONTACT",
    "Về đầu trang": "Back to top",
    "Crafted with care in Đà Nẵng.": "Crafted with care in Da Nang.",
  }),
);

const translatableNodes = [];
const textWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_TEXT,
  {
    acceptNode(node) {
      const value = node.nodeValue.trim();
      if (!value || ["SCRIPT", "STYLE"].includes(node.parentElement?.tagName))
        return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  },
);
while (textWalker.nextNode()) {
  const node = textWalker.currentNode;
  translatableNodes.push({
    node,
    vi: node.nodeValue,
    key: node.nodeValue.trim(),
  });
}

const seoByLanguage = {
  vi: {
    title: "Amia Florist | Shop hoa tươi Đà Nẵng & Hoa tiệc nghệ thuật",
    description:
      "Amia Florist — shop hoa tươi Đà Nẵng chuyên hoa bó, hoa chúc mừng, hoa cưới và hoa tiệc ở Đà Nẵng. Thiết kế hoa theo yêu cầu, giao tận nơi.",
  },
  en: {
    title: "Amia Florist | Fresh Flowers & Event Florals in Da Nang",
    description:
      "Amia Florist is a boutique flower shop in Da Nang creating bouquets, wedding flowers and bespoke event florals with local delivery.",
  },
};

function setLanguage(language) {
  const isEnglish = language === "en";
  root.lang = language;
  translatableNodes.forEach(({ node, vi, key }) => {
    if (!englishText.has(key)) {
      node.nodeValue = vi;
      return;
    }
    const leading = vi.match(/^\s*/)?.[0] || "";
    const trailing = vi.match(/\s*$/)?.[0] || "";
    node.nodeValue = isEnglish
      ? `${leading}${englishText.get(key)}${trailing}`
      : vi;
  });

  document.title = seoByLanguage[language].title;
  document.querySelector('meta[name="description"]').content =
    seoByLanguage[language].description;
  document.querySelector('meta[property="og:title"]').content = isEnglish
    ? "Amia Florist — Flowers express your love"
    : "Amia Florist — Hoa kể thay lời";
  document.querySelector('meta[property="og:description"]').content = isEnglish
    ? "Fresh flowers and artistic event florals in Da Nang."
    : "Hoa tươi và thiết kế hoa tiệc nghệ thuật tại Đà Nẵng.";

  languageButton.querySelector(".language-current").textContent = isEnglish
    ? "EN"
    : "VI";
  languageButton.querySelector(".language-next").textContent = isEnglish
    ? "VI"
    : "EN";
  languageButton.setAttribute(
    "aria-label",
    isEnglish ? "Chuyển sang tiếng Việt" : "Switch to English",
  );
  languageButton.title = isEnglish ? "Tiếng Việt" : "English";
  localStorage.setItem("amia-language", language);
}

const savedLanguage = localStorage.getItem("amia-language");
const initialLanguage = savedLanguage === "en" ? "en" : "vi";
setLanguage(initialLanguage);

languageButton.addEventListener("click", () => {
  setLanguage(root.lang === "vi" ? "en" : "vi");
});

const storedTheme = localStorage.getItem("amia-theme");
const preferredLight = window.matchMedia(
  "(prefers-color-scheme: light)",
).matches;
if (storedTheme) root.dataset.theme = storedTheme;
else if (preferredLight) root.dataset.theme = "light";

function syncThemeLabel() {
  const isDark = root.dataset.theme === "dark";
  themeButton.setAttribute(
    "aria-label",
    isDark ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối",
  );
  document.querySelector('meta[name="theme-color"]').content = isDark
    ? "#0d0e0c"
    : "#f4efe5";
}
syncThemeLabel();

themeButton.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("amia-theme", root.dataset.theme);
  syncThemeLabel();
});

function closeMenu() {
  document.body.classList.remove("menu-open");
  mobileMenu.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden", "true");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Mở menu");
}

menuButton.addEventListener("click", () => {
  const open = !document.body.classList.contains("menu-open");
  document.body.classList.toggle("menu-open", open);
  mobileMenu.classList.toggle("open", open);
  mobileMenu.setAttribute("aria-hidden", String(!open));
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
});
mobileMenu
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
document.querySelectorAll('.gallery-card[role="link"]').forEach((card) => {
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.click();
    }
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 },
);
document
  .querySelectorAll(".reveal")
  .forEach((item) => revealObserver.observe(item));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      dots.forEach((dot) =>
        dot.classList.toggle(
          "active",
          dot.getAttribute("href") === `#${entry.target.id}`,
        ),
      );
    });
  },
  { threshold: 0.5 },
);
panels.forEach((panel) => sectionObserver.observe(panel));

window.addEventListener(
  "scroll",
  () => header.classList.toggle("scrolled", window.scrollY > 24),
  { passive: true },
);
document.getElementById("year").textContent = new Date().getFullYear();

// One wheel gesture moves exactly one full-screen section.
// Disabled on touch-sized screens so long mobile content remains comfortable to read.
let wheelLocked = false;
let wheelTotal = 0;
let wheelResetTimer;

function getCurrentPanelIndex() {
  const viewportCenter = window.scrollY + window.innerHeight / 2;
  return panels.reduce(
    (closest, panel, index) => {
      const panelCenter = panel.offsetTop + panel.offsetHeight / 2;
      const distance = Math.abs(panelCenter - viewportCenter);
      return distance < closest.distance ? { index, distance } : closest;
    },
    { index: 0, distance: Infinity },
  ).index;
}

function goToPanel(index) {
  const targetIndex = Math.max(0, Math.min(index, panels.length - 1));
  wheelLocked = true;
  wheelTotal = 0;
  panels[targetIndex].scrollIntoView({
    behavior: reduceMotion.matches ? "auto" : "smooth",
    block: "start",
  });

  window.setTimeout(
    () => {
      wheelLocked = false;
    },
    reduceMotion.matches ? 80 : 850,
  );
}

function handleSectionWheel(event) {
  if (
    window.innerWidth <= 600 ||
    event.ctrlKey ||
    Math.abs(event.deltaX) > Math.abs(event.deltaY)
  )
    return;
  event.preventDefault();
  if (wheelLocked) return;

  wheelTotal += event.deltaY;
  window.clearTimeout(wheelResetTimer);
  wheelResetTimer = window.setTimeout(() => {
    wheelTotal = 0;
  }, 140);

  // The threshold filters tiny trackpad noise while still reacting to one intentional gesture.
  if (Math.abs(wheelTotal) < 28) return;
  const direction = wheelTotal > 0 ? 1 : -1;
  goToPanel(getCurrentPanelIndex() + direction);
}

window.addEventListener("wheel", handleSectionWheel, { passive: false });

// Keyboard navigation follows the same section-to-section motion.
window.addEventListener("keydown", (event) => {
  if (event.target.matches('input, textarea, select, [contenteditable="true"]'))
    return;
  if (!["PageDown", "PageUp", "ArrowDown", "ArrowUp"].includes(event.key))
    return;
  event.preventDefault();
  if (wheelLocked) return;
  const direction = ["PageDown", "ArrowDown"].includes(event.key) ? 1 : -1;
  goToPanel(getCurrentPanelIndex() + direction);
});
