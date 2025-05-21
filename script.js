

// 피해 사례 말풍선 애니메이션
const scrollBubbles = document.querySelectorAll('.bubble-scroll');
const observerScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.6 });
scrollBubbles.forEach(el => observerScroll.observe(el));

// 선택지 버튼 클릭 결과
function showResult(choice) {
  alert(choice ? "앱 설치를 선택했습니다. 피해 발생!" : "금융기관에 먼저 확인하여 피해를 예방했습니다!");
}

// 카드 모달 데이터 및 상호작용
const phishingData = [
  { title: "피싱", text: "가짜 이메일로 개인정보 탈취", img: "assets/img/phishing.jpg" },
  { title: "스미싱", text: "문자 링크 클릭 유도", img: "assets/img/smishing.jpg" },
  { title: "큐싱", text: "QR 코드로 가짜 사이트 유도", img: "assets/img/qshing.jpg" },
  { title: "피싱 사이트", text: "가짜 금융 사이트 제작", img: "assets/img/fake-site.jpg" }
];
let currentCardIndex = 0;

function openCardModal(index) {
  const data = phishingData[index];
  currentCardIndex = index;
  document.getElementById("modalTitle").innerText = data.title;
  document.getElementById("modalText").innerText = data.text;
  document.getElementById("modalImage").src = data.img;
  document.getElementById("phishingModal").style.display = "flex";
}

function showPrevCard() {
  const prev = (currentCardIndex - 1 + phishingData.length) % phishingData.length;
  openCardModal(prev);
}

function showNextCard() {
  const next = (currentCardIndex + 1) % phishingData.length;
  openCardModal(next);
}

// ✅ 스크롤컷 제어 (cut1~7, video1~1.5)
const scrollCuts = document.querySelectorAll(".scrollcut");

scrollCuts.forEach((el) => {
  const type = el.dataset.type;
  const src = el.dataset.src;

  if (type === "image") {
    const img = document.createElement("img");
    img.src = src;
    el.appendChild(img);
  } else if (type === "video") {
    const video = document.createElement("video");
    video.src = src;
    video.muted = true;
    video.playsInline = true;
    video.controls = false;
    el.appendChild(video);
  }
});

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      const video = el.querySelector("video");

      if (entry.isIntersecting) {
        el.classList.add("show");
        if (video) video.play();
      } else {
        el.classList.remove("show");
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  },
  { threshold: 0.6 }
);

scrollCuts.forEach((el) => scrollObserver.observe(el));
const scrollSections = document.querySelectorAll('.scroll-section');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.5 });

scrollSections.forEach(section => {
  sectionObserver.observe(section);
});
