// ✍ 함수 작성 과제
// ---------------------------------------------------------------------------------------------
// 1. 환영 메시지 생성
// 회원 등급과 이름을 입력받아 맞춤형 환영 메시지를 출력하는 함수를 작성합니다.
function generateWelComeMessage(name, grade) {
  // VIP회원인 경우
  if (grade === 'VIP') {
    return '🌟 VIP ' + name + '님, 특별한 혜택이 준비되어 있습니다!'
  }
  // 일반회원인 경우
  if (grade === '일반') {
    return '안녕하세요, ' + name + '님! 즐거운 쇼핑 되세요.'
  }
  // VIP, 일반에 해당하지 않는 모든 경우에 출력되는 값
  return '안녕하세요, ' + name + '님!'
}

let vipUser = generateWelComeMessage('철수', 'VIP')
let regularUser = generateWelComeMessage('수지', '일반')
let userNoGrade = generateWelComeMessage('짱구') /* 등급이 없을 때 */
let user = generateWelComeMessage('맹구', '비아피') /* 등급 위치에 오타나 잘못된 값을 입력 */

console.log(vipUser)
console.log(regularUser)
console.log(userNoGrade) 
console.log(user)


// 테스트 코드 작성(타입확인, 재할당 가능 여부확인)


// ---------------------------------------------------------------------------------------------
// 2. 배송비 계산
// 주문 금액과 배송 지역을 입력받아 배송비를 계산하는 함수를 작성합니다.
const calculateDeliveryFee = function (amount, region) {
  // 주문 금액이 0원 이하인 경우 (0 반환)
  if (amount <= 0) {
    return 0
  }
  // 주문 금액이 50,000원 이상인 경우 (무료 배송)
  if (amount>= 50_000) {
    return 0
  }
  // 제주/도서 지역인 경우(||연산자는 'or'을 의미): 기본 3000원 + 추가 3000원 = 6000원
  if (region === '제주' || region === '도서') {
    return 6_000
  }
  // 그 외 일반 지역인 경우(기본 배송비 3,000원), 빈 문자열도 여기에 포함
  return 3000
}

console.log(calculateDeliveryFee(10_000, '서울'))
console.log(calculateDeliveryFee(10_000, '제주'))
console.log(calculateDeliveryFee(60_000, '제주'))
console.log(calculateDeliveryFee(0, '서울'))
console.log(calculateDeliveryFee(10_000, ''))


// 테스트 코드 작성(타입확인, 재할당 가능 여부확인)

// ---------------------------------------------------------------------------------------------
// 3. 비밀번호 유효성 검사
// 비밀번호 문자열을 입력받아 유효성 검사를 수행하는 함수를 작성합니다.
const checkPasswordValue = (password) => {
  // 비밀번호의 길이를 확인
  const length = password.length
  
  // 8자 이상 (&&연산자) 20자 이하인 경우 true
  if (length >= 8 && length <= 20) {
    return true
  }
  // 그 외는 전부 false
  return false
}

console.log(checkPasswordValue('12345'))
console.log(checkPasswordValue('password12345'))
console.log(checkPasswordValue('123456789112345678911'))


// 테스트 코드 작성(타입확인, 재할당 가능 여부확인)

// ---------------------------------------------------------------------------------------------
// 4. 포인트 적립 계산
// 결제 금액과 회원 등급을 입력받아 적립될 포인트를 계산하는 함수를 작성합니다.
function calculateRewardPoints(amount, grade) {
  // VIP 등급: 5% 적립
  if (grade === 'VIP'){
    return amount * 0.05
  }
  // Gold 등급: 3% 적립
  if (grade === 'GOLD') {
    return amount * 0.03
  }
// Silver 등급: 1% 적립
  if (grade === 'SILVER') {
    return amount * 0.01
  }
  // 일반 등급: 0.5% 적립(위 조건들에 해당하지 않는 경우 모두 일반으로 처리)
  return amount * 0.005
}

console.log(calculateRewardPoints(100_000, 'VIP'))
console.log(calculateRewardPoints(100_000, 'GOLD'))
console.log(calculateRewardPoints(100_000, 'SILVER'))
console.log(calculateRewardPoints(100_000, '일반'))
console.log(calculateRewardPoints(100_000, '신규'))


// 테스트 코드 작성(타입확인, 재할당 가능 여부확인)

// ---------------------------------------------------------------------------------------------
// 5. 영화 티켓 가격 계산
// 영화 정보와 관람 인원을 입력받아 총 결제 금액을 계산하는 함수를 작성합니다.
const calculateMovieFee = function (movieType, isEarlyBird, count) {
  // 영화 종류에 따라 변하는 가격을 임시로 담아두기 위해 선언
  let basePrice = 0
  if (movieType === '일반') {
  basePrice = 14_000
}
if (movieType === '3D') {
  basePrice = 17_000
}
if (movieType === 'IMAX') {
  basePrice = 20_000
}
// 조조 할인 적용(true일 경우 20%할인)
if (isEarlyBird === true) {
  basePrice *= 0.8
}
return basePrice * count
}

// 3D영화, 조조 상영(10시 이전 상영), 2명 관람 -> 17000 * 0.8 * 2 = 27200
console.log(calculateMovieFee('3D', true, 2))

// 일반영화, 일반 시간(10시 이후 상영), 3명 관람 -> 14000 * 3 = 42000
console.log(calculateMovieFee('일반', false, 3))

// 테스트 코드 작성(타입확인, 재할당 가능 여부확인)