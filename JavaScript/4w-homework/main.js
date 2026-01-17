// 요소 선택
const cardList = document.querySelector('.card-list')
// console.log(cardList)
const btnPrev = document.querySelector('.btn-prev')
// console.log(btnPrev)
const btnNext = document.querySelector('.btn-next')
// console.log(btnNext)
const currentNumber = document.querySelector('.current')
// console.log(currentNumber)

// 페이지 상태 관리
let currentIndex = 0 // 자바스크립트는 0부터 시작
const totalPages = 3 // 총 3 페이지

// -----------------------------------------------------------------

// 화면 업데이트 함수, 방법 1
// function updateCarousel() {
  // .style 방식(실시간 수치 계산)
  // 장점: 페이지가 많아져도 CSS 수정 없이 JS만으로 제어 가능
  // offset 계산 (0, 100, 200 중 하나가 됨)
  // const offset = currentIndex * 100
  
  // cardList.style.transform = 'translateX(-' + offset + '%)'
// .classList 방식(미리 정해둔 클래스 교체)
// 장점: 스타일을 CSS에서 관리하므로 구조가 더 깔끔
/*
// 1. 기존에 붙어있던 페이지 클래스 싹 지우기
cardList.classList.remove('is-page-1', 'is-page-2', 'is-page-3')

// 2. 현재 인덱스에 맞는 클래스 붙이기
const pageClass = 'is-page-' + (currentIndex + 1)
cardList.classList.add(pageClass)

// 공통 UI 업데이트
currentNumber.textContent = currentIndex + 1
btnPrev.disabled = (currentIndex === 0)
btnNext.disabled = (currentIndex === totalPages - 1)
}
*/

// -----------------------------------------------------------------

// 화면 업데이트 함수, 방법 1
// .style 방식(실시간 수치 계산)
// 장점: 페이지가 많아져도 CSS 수정 없이 JS만으로 제어 가능
function updateCarousel() {
  // 계산 자동화(카드 너비(160) + 간격(16)을 합쳐서 한 칸의 단위로 설정)
  const cardWidth = 160
  const gap = 16


  // 한 페이지(카드 2개씩)당 이동해야 할 실제 거리 계산
  // (카드 1개 + 간격 1개) * 2 = 176 * 2 = 352px가 아니라 
  // 실제로는 [카드1 - 간격 - 카드2] - 간격 - [카드3...] 순서이므로 
  // (카드너비 + 간격) * 보여줄 개수만큼 곱해주면 됩니다.
  const moveDistance = currentIndex * (cardWidth + gap) * 2

  // 2. 적용: 계산된 px 수치만큼 기차(cardList)를 왼쪽으로 밉니다.
  cardList.style.transform = "translateX(-" + moveDistance + "px)"
  
  // 템플릿 리터럴 방식: 백틱( ` )과 ${ }를 사용합니다.
  // cardList.style.transform = `translateX(-${moveDistance}px)`;
  
  // 공통 UI 업데이트
  currentNumber.textContent = currentIndex + 1
  btnPrev.disabled = (currentIndex === 0)
  btnNext.disabled = (currentIndex === totalPages - 1)
}

// 버튼 이벤트
btnNext.addEventListener('click', () => {
  if (currentIndex < totalPages - 1) {
    currentIndex++
    updateCarousel()
  }
})

btnPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--
    updateCarousel()
  }
})

updateCarousel()