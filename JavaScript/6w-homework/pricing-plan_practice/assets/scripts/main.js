// 1. 부모 컨테이너와 하단 정보 영역만 선택
const container = document.querySelector('.pricing-container')
const infoArea = document.querySelector('.selection-info')
const infoName = document.querySelector('[data-id="plan-name"]')
const infoPrice = document.querySelector('[data-id="plan-price"]')

// 2. 부모 요소에 단 하나의 이벤트 리스너만 등록
container.addEventListener('click', (e) => {
  // 클릭된 요소가 버튼인지, 혹은 버튼 내부 요소인지 확인
  const button = e.target.closest('.plan-selection-button')
  
  // 버튼이 아닌 곳을 클릭했다면 무시
  if (!button) return

  // 버튼을 감싸고 있는 가장 가까운 .plan-card 찾기
  const card = button.closest('.plan-card')
  const allCards = container.querySelectorAll('.plan-card')

  // A. 배타적 선택: 모든 카드의 selected 클래스 제거
  allCards.forEach((c) => {
    c.classList.remove('selected')
    c.querySelector('.plan-selection-button').setAttribute('aria-pressed', 'false')
  })

  // B. 현재 카드 활성화
  card.classList.add('selected')
  button.setAttribute('aria-pressed', 'true')

  // C. 데이터 바인딩: 카드에 심어둔 data- 속성 읽기
  const { plan, price } = card.dataset
  if (infoName && infoPrice) {
    infoName.textContent = plan
    infoPrice.textContent = price
  }

  // D. 하단 메시지 표시
  infoArea.classList.add('show')
})