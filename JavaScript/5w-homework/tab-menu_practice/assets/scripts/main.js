const tabButtons = document.querySelectorAll('.tab-nav__button')
// console.log(tabButtons)
const tabPanels = document.querySelectorAll('.tab-panel')
// console.log(tabPanels)

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target')
    // console.log('연결된 타겟 ID:', targetId)

    // 모든 버튼 및 패널 초기화
    tabButtons.forEach(btn => {
      btn.classList.remove('tab-nav__button--active')
      btn.setAttribute('aria-selected', 'false')
    })

    tabPanels.forEach(panel => {
      panel.classList.remove('tab-panel--active')
    })

    // 클릭한 탭 활성화
    button.classList.add('tab-nav__button--active')
    button.setAttribute('aria-selected', 'true')
    const targetPanel = document.getElementById(targetId)
    // console.log('타겟 패널:', targetPanel)

    if (targetPanel) {
      targetPanel.classList.add('tab-panel--active')
    }
  })
})