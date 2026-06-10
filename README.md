# Ad Insight Demo - 광고 분석 데모 앱

React + Vite 프론트엔드와 Node.js Express 백엔드를 사용한 광고 분석 도구

## 🚀 빠른 시작

### 1. 프로젝트 설치

```bash
# 백엔드 설정
cd backend
npm install

# 프론트엔드 설정 (새 터미널)
cd frontend
npm install
```

### 2. 서버 실행

**터미널 1 - 백엔드 서버 (포트 5000)**
```bash
cd backend
npm start
```

**터미널 2 - 프론트엔드 개발 서버 (포트 5173)**
```bash
cd frontend
npm run dev
```

### 3. 접속
브라우저에서 `http://localhost:5173` 열기

---

## 📁 프로젝트 구조

```
ad-insight-demo/
├── frontend/          # React + Vite 앱
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   └── AdCard.jsx
│   │   └── styles/
│   │       └── App.css
│   └── package.json
├── backend/           # Express 서버
│   ├── server.js
│   └── package.json
└── README.md
```

---

## ✨ 기능

- 브랜드명 입력
- 가짜 광고 데이터 생성 및 표시
- 광고 카피, 포맷, CTA, 톤 정보 포함
- 깔끔한 카드 기반 UI

---

## 🔧 기술 스택

- **Frontend**: React 18, Vite, CSS3
- **Backend**: Node.js, Express
- **데이터**: 더미 데이터

