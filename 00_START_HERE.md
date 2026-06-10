# 📊 Ad Insight Demo - 완성 프로젝트

**✅ 모든 파일 생성 완료!**

---

## 🎯 프로젝트 개요

**브랜드명을 입력하면 가짜 광고 데이터를 보여주는 웹앱**

- ⚛️ **프론트엔드**: React 18 + Vite (포트 5173)
- 🚀 **백엔드**: Node.js Express (포트 5000)
- 📱 **디자인**: 모던 카드형 UI + 반응형
- 💾 **데이터**: 더미 데이터 (Mock)

---

## 📁 생성된 파일 구조

```
ad-insight-demo/
├── 📄 README.md              # 프로젝트 소개
├── 📄 SETUP.md               # 자세한 설치 가이드
├── 📄 QUICK_START.md         # 빠른 시작 (이것부터!)
├── .gitignore                # Git 무시 설정
│
├── backend/                  # 📡 Express 서버
│   ├── server.js             # API 엔드포인트 & 더미 데이터
│   └── package.json          # 의존성: express, cors
│
└── frontend/                 # ⚛️ React + Vite 앱
    ├── index.html            # HTML 템플릿
    ├── vite.config.js        # Vite 설정
    ├── package.json          # 의존성
    └── src/
        ├── main.jsx          # React 진입점
        ├── App.jsx           # 메인 컴포넌트
        ├── components/
        │   └── AdCard.jsx    # 광고 카드 컴포넌트
        └── styles/
            ├── index.css     # 전역 스타일
            ├── App.css       # 메인 페이지 스타일
            └── AdCard.css    # 카드 스타일
```

---

## 🚀 빠르게 시작하기 (3단계)

### 1️⃣ Node.js 설치 (Mac 기준)
```bash
brew install node
node --version  # v18 이상 확인
npm --version   # 8 이상 확인
```

### 2️⃣ 프로젝트 설치
```bash
# 터미널 1
cd /Users/ptk/ad-insight-demo/backend
npm install

# 터미널 2 (새로 열기)
cd /Users/ptk/ad-insight-demo/frontend
npm install
```

### 3️⃣ 서버 실행
```bash
# 터미널 1 - 백엔드 (포트 5000)
cd /Users/ptk/ad-insight-demo/backend
npm start

# 터미널 2 - 프론트엔드 (포트 5173)
cd /Users/ptk/ad-insight-demo/frontend
npm run dev

# 브라우저에서 열기
http://localhost:5173
```

---

## 💻 코드 하이라이트

### 백엔드 API (`backend/server.js`)
```javascript
POST /api/analyze
Request:  { brand: "Apple" }
Response: {
  brand: "Apple",
  ads: [
    {
      id: 1,
      copy: "...",
      format: "Instagram Stories",
      cta: "지금 시작하기",
      tone: "Professional",
      color: "#FF6B6B"
    },
    // ... 5개 광고
  ]
}
```

### 프론트엔드 UI (`frontend/src/App.jsx`)
- 입력창 + 버튼
- API 호출 (axios)
- 로딩 상태 & 에러 처리
- 광고 카드 렌더링

### 광고 카드 컴포넌트 (`frontend/src/components/AdCard.jsx`)
- 광고 카피 표시
- 포맷, CTA, 톤 정보
- 색상 구분
- 부드러운 애니메이션

---

## 🎨 UI/UX 특징

✨ **깔끔한 모던 디자인**
- 그라데이션 배경 (Purple → Violet)
- 카드 호버 효과
- 부드러운 애니메이션

📱 **반응형 디자인**
- 데스크톱, 태블릿, 모바일 모두 지원
- Grid 레이아웃 자동 조정

🎯 **사용자 경험**
- 실시간 입력 검증
- "Enter" 키 지원
- 로딩 상태 표시
- 에러 메시지

---

## 🔧 커스터마이징 예시

### 광고 데이터 수정
**파일**: `backend/server.js`

```javascript
// generateMockAds() 함수에서 배열 수정
const adjectives = ['Creative', 'Dynamic', 'Smart', ...];
const formats = ['Instagram Stories', 'Facebook Feed', ...];
```

### UI 색상 변경
**파일**: `frontend/src/styles/App.css`

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* 색상 코드 변경 */
```

### 카드 레이아웃 수정
**파일**: `frontend/src/components/AdCard.jsx`

```javascript
// JSX 구조 수정 가능
```

---

## 🧪 테스트 시나리오

### 테스트 1: 기본 동작
1. "Apple" 입력
2. "분석 시작" 클릭
3. ✅ 5개 광고 카드 표시됨

### 테스트 2: 다른 브랜드
1. "Nike" 입력 후 분석
2. ✅ 다른 내용의 광고 표시됨

### 테스트 3: 에러 처리
1. 입력창 비운 상태로 버튼 클릭
2. ✅ "브랜드명을 입력해주세요" 에러 메시지

### 테스트 4: Enter 키
1. "Starbucks" 입력 후 Enter 키
2. ✅ 분석 자동 시작

---

## 🚨 문제 해결

| 문제 | 해결법 |
|------|--------|
| "Cannot GET /api/analyze" | 백엔드 (포트 5000) 실행 중인지 확인 |
| 포트 이미 사용 중 | `lsof -i :5000` 후 `kill -9 PID` |
| npm install 오류 | `npm cache clean --force` 후 재시도 |
| 화면이 안 뜸 | http://localhost:5173 (5173 확인!) |

---

## 📚 다음 단계

### Phase 2: 실제 데이터 연결
- 실제 광고 API 연결
- 데이터베이스 (MongoDB/PostgreSQL)

### Phase 3: 기능 확장
- 사용자 인증
- 광고 필터링
- 성과 분석 차트

### Phase 4: 배포
- Vercel (프론트엔드)
- Heroku/Railway (백엔드)

---

## 📞 추가 정보

**모든 파일이 준비되었습니다!**

1. Node.js 설치
2. `npm install` 실행 (backend + frontend)
3. `npm start` (backend)
4. `npm run dev` (frontend)
5. http://localhost:5173 접속

**문제 있으면 QUICK_START.md 또는 SETUP.md 참고!**

---

*Created: 2024 | Tech Stack: React + Vite + Express*
