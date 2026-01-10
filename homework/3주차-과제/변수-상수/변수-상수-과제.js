// ✍ 변수, 상수 작성 과제
// 각 항목에 대해 변수나 상수를 선언하고, 알맞은 값을 할당하세요.

// ---------------------------------------------------------------------------------------------
// 1. 영화 제목을 저장할 변수를 선언하고 좋아하는 영화 제목을 할당하세요.
// 좋아하는 영화가 많으면 let으로 선언(변경 가능), 좋아하는 영화가 단 하나다 하면 const로 선언 가능(변경 불가능)
let favoriteMovie = '이웃집 토토로'
console.log('영화제목:', favoriteMovie)

const BestMovie = '하울의 움직이는 성'
console.log('영화제목:', BestMovie)


// 테스트 코드 작성(타입확인, 재할당 가능 여부확인)
favoriteMovie = '시간을 달리는 소녀'
console.log(typeof favoriteMovie)
console.log('영화제목:', favoriteMovie)

// BestMovie = '하울의 움직이는 성'
// console.log('영화제목:', BestMovie)

// ---------------------------------------------------------------------------------------------
// 2. "빛의 속도(299,792,458 m/s)"를 담을 상수를 선언하세요.
// 절대 변하지 않는 값이라 상수, 전체 대문자로 작성
const SPEED_OF_LIGHT = 299_792_458
console.log('빛의 속도:', SPEED_OF_LIGHT)


// 테스트 코드 작성(타입확인, 재할당 가능 여부확인)
console.log(typeof SPEED_OF_LIGHT)

// SPEED_OF_LIGHT = 12_345_678
// console.log('빛의 속도:', SPEED_OF_LIGHT)

// ---------------------------------------------------------------------------------------------
// 3. "이메일 인증 완료 여부"를 확인하는 불리언 타입 변수를 선언하고 적절한 값을 할당하세요.
let isEmailVerified = true
console.log('이메일 인증 완료 여부:', isEmailVerified)


// 테스트 코드 작성(타입확인, 재할당 가능 여부확인)
console.log(typeof isEmailVerified)

isEmailVerified = false
console.log('이메일 인증 완료 여부:', isEmailVerified)

// ---------------------------------------------------------------------------------------------
// 4. "상품 재고 수량(예: 47개)"을 담는 변수를 선언하고 숫자 값을 할당하세요.
let stockQuantity = 47
console.log('상품 재고 수량:', stockQuantity)


// 테스트 코드 작성(타입확인, 재할당 가능 여부확인)
console.log(typeof stockQuantity)

stockQuantity = 3
console.log('상품 재고 수량:', stockQuantity)

// ---------------------------------------------------------------------------------------------
// 5. "회원 포인트(예: 15,800점)"를 담는 변수를 작성하세요.
let memberPoint = 15_800
console.log('회원 포인트:', memberPoint)


// 테스트 코드 작성(타입확인, 재할당 가능 여부확인)
memberPoint = 73_500
console.log('회원 포인트:', memberPoint)

// ---------------------------------------------------------------------------------------------
// 6. API 서버의 기본 URL(예: https://api.example.com)을 담는 상수를 작성하고 값을 할당하세요.
const BASE_URL = "https://api.example.com"
console.log('API 서버의 기본 URL:' ,BASE_URL)


// 테스트 코드 작성(타입확인, 재할당 가능 여부확인)
console.log(typeof BASE_URL)

// BASE_URL = 'https://naver.com'
// console.log('API 서버의 기본 URL:' ,BASE_URL)

// ---------------------------------------------------------------------------------------------
// 7. 게시글의 "조회수(예: 1,234)"를 담는 변수를 선언하고 값을 할당하세요.
let postViewCount = 1_234
console.log('조회수:', postViewCount)


// 테스트 코드 작성(타입확인, 재할당 가능 여부확인)
console.log(typeof postViewCount)

postViewCount = 5_678
console.log('조회수:', postViewCount)

// ---------------------------------------------------------------------------------------------
// 8. "배송 상태('준비중', '배송중', '배송완료' 중 하나)"를 담는 변수를 작성해보세요.
let deliveryStatus = '준비중'
console.log('배송 상태:', deliveryStatus)


// 테스트 코드 작성(타입확인, 재할당 가능 여부확인)
console.log(typeof deliveryStatus)

deliveryStatus = '배송완료'
console.log('배송 상태:', deliveryStatus)

// ---------------------------------------------------------------------------------------------
// 9. "쿠폰 사용 가능 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
let isCouponAvailable = true
console.log('쿠폰 사용 가능 여부:' ,isCouponAvailable)


// 테스트 코드 작성(타입확인, 재할당 가능 여부확인)
console.log(typeof isCouponAvailable)

isCouponAvailable = false
console.log('쿠폰 사용 가능 여부:' ,isCouponAvailable)

// ---------------------------------------------------------------------------------------------
// 10. "최대 업로드 파일 크기(예: 10MB를 바이트 단위로 10485760)"를 담는 상수를 작성하세요.
// 절대 변하지 않는 값이라 상수, 전체 대문자로 작성
const MAX_UPLOAD_SIZE = 10_485_760
console.log('최대 업로드 파일 크기:', MAX_UPLOAD_SIZE)


// 테스트 코드 작성(타입확인, 재할당 가능 여부확인)
console.log(typeof MAX_UPLOAD_SIZE)

// MAX_UPLOAD_SIZE = 98_765_432
// console.log('최대 업로드 파일 크기:', MAX_UPLOAD_SIZE)

// ---------------------------------------------------------------------------------------------
// 11. "사용자 등급 점수(예: 85.5점)"를 담는 변수를 선언하고 소수점이 포함된 값을 할당하세요.
let userGradeScore = 85.5
console.log('사용자 등급 점수:', userGradeScore)


// 테스트 코드 작성(타입확인, 재할당 가능 여부확인)
console.log(typeof userGradeScore)

userGradeScore = 23
console.log('사용자 등급 점수:', userGradeScore)

// ---------------------------------------------------------------------------------------------
// 12. "알림 수신 동의 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
let isNotificationAgreed = true
console.log('알림 수신 동의 여부:', isNotificationAgreed)


// 테스트 코드 작성(타입확인, 재할당 가능 여부확인)
console.log(typeof isNotificationAgreed)

isNotificationAgreed = false
console.log('알림 수신 동의 여부:', isNotificationAgreed)
