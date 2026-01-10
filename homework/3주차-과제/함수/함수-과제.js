// ✍ 함수 작성 과제
// ---------------------------------------------------------------------------------------------
// 1. 환영 메시지 생성
// 회원 등급과 이름을 입력받아 맞춤형 환영 메시지를 출력하는 함수를 작성합니다.
function generate_welCome_Message(name, grade) {
  if (grade === 'VIP') {
    return '🌟 VIP ' + name + '님, 특별한 혜택이 준비되어 있습니다!'
  }
  else if (grade === '일반') {
    return '안녕하세요, ' + name + '님! 즐거운 쇼핑 되세요.'
  }
  // VIP, 일반에 해당하지 않는 모든 경우에 출력되는 값
    return '안녕하세요, ' + name + '님!'
}

let vipUser = generate_welCome_Message('철수', 'VIP')
let regularUser = generate_welCome_Message('수지', '일반')
let userNoGrade = generate_welCome_Message('짱구') /* 등급이 없을 때 */
let user = generate_welCome_Message('맹구', '비아피') /* 등급 위치에 오타나 잘못된 값을 입력 */

console.log(vipUser)
console.log(regularUser)
console.log(userNoGrade) 
console.log(user)

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

// ---------------------------------------------------------------------------------------------
// 3. 비밀번호 유효성 검사
// 비밀번호 문자열을 입력받아 유효성 검사를 수행하는 함수를 작성합니다.



// ---------------------------------------------------------------------------------------------
// 4. 포인트 적립 계산
// 결제 금액과 회원 등급을 입력받아 적립될 포인트를 계산하는 함수를 작성합니다.




// ---------------------------------------------------------------------------------------------
// 5. 영화 티켓 가격 계산
// 영화 정보와 관람 인원을 입력받아 총 결제 금액을 계산하는 함수를 작성합니다.
// 테스트 코드 작성(타입확인, 재할당 가능 여부확인)