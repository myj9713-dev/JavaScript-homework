const container = document.querySelector('.pricing-container')
const infoArea = document.querySelector('.selection-info')
const infoName = document.querySelector('[data-id="plan-name"]')
const infoPrice = document.querySelector('[data-id="plan-price"]')


container.addEventListener('click', (e) => {
  const button = e.target.closest('.plan-selection-button')
  
  if (!button) return

  const card = button.closest('.plan-card')
  const allCards = container.querySelectorAll('.plan-card')

  allCards.forEach((c) => {
    c.classList.remove('selected')
    c.querySelector('.plan-selection-button').setAttribute('aria-pressed', 'false')
  })

  card.classList.add('selected')
  button.setAttribute('aria-pressed', 'true')

  const { plan, price } = card.dataset
  if (infoName && infoPrice) {
    infoName.textContent = plan
    infoPrice.textContent = price
  }

  infoArea.classList.add('show')
})