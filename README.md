# 원티드 프리온보딩 프론트엔드 인턴쉽 (4월)

- 사이트 링크 : https://www.wanted.co.kr/events/pre_ob_fe_10
- 깃허브 링크 : https://github.com/walking-sunset/selection-task

## 배포 링크

https://wanted-pre-onboarding-withlaw.netlify.app/todo

## 사용한 라이브러리 목록
- react-router
- styled-components
- axios

## 프로젝트 실행 방법

### `npm install & npm start`

- 개발에 필요한 패키지 설치 후 개발 모드로 앱을 실행합니다.
- 클라이언트 서버는 http://localhost:3000 에서 실행됩니다.
- 백엔드 로컬 서버 이용 시 constants.js에서

```javascript
export const BASE_URL = "https://www.pre-onboarding-selection-task.shop";
```

를 주석 처리한 후

```javascript
export const BASE_URL = "http://localhost:8000";
```

를 주석 해제 해주시기 바랍니다.

## 디렉토리 구조

```tree
/src
├── pages         // route에 랜딩되는 페이지 컴포넌트
│ 
├── components    // 페이지 컴포넌트에서 사용되는 하위 컴포넌트
│ 
├── api.js        // axios설정 및 서버 통신
│ 
├── constants.js  // 경로, 색상 등 상수
│ 
└── helpers.js    // 유효성검사 등 유틸 함수
```

## 코딩 컨벤션

- 이벤트 핸들러 함수 명명 : 이벤트이름 + Handler + 대상  
  | 예시 : 버튼 클릭 함수 -> onClickHandlerBtn
- 컴포넌트 파일 구조

```
import

functional component 정의

styled component 정의

export
```
