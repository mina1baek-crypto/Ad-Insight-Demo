# 🚀 설치 및 실행 가이드

## 📋 사전 요구사항

- **Node.js** (v16 이상): [https://nodejs.org](https://nodejs.org)에서 다운로드
- **Anthropic API Key** (선택사항): Claude API 연동 시 필요

설치 확인:
```bash
node --version
npm --version
```

---

## 🛠️ 단계별 설치

### Step 1️⃣ : API 키 설정 (선택사항)

Claude API를 사용하려면:

1. [Anthropic Console](https://console.anthropic.com)에서 API 키 발급
2. `backend/.env` 파일 수정:
```bash
ANTHROPIC_API_KEY=sk-ant-...your-key-here...
```

**API 키가 없어도 Mock 데이터로 작동합니다!**

---

### Step 2️⃣ : 백엔드 설치

```bash
cd backend
npm install
```

예상 시간: **2-3분**

설치 완료 후:
```
✓ express 4.18.2
✓ cors 2.8.5
✓ dotenv 16.3.1
✓ @anthropic-ai/sdk 0.10.0
```

---

### Step 3️⃣ : 프론트엔드 설치

**새로운 터미널 창을 열어서** 실행:

```bash
cd frontend
npm install
```

예상 시간: **2-3분** (첫 설치 시 Vite 다운로드)

설치 완료 후:
```
✓ react 18.2.0
✓ react-dom 18.2.0
✓ vite 5.0.0
✓ axios 1.6.0
```

---

## ▶️ 실행 (3개 터미널 필요)

### 터미널 1️⃣ - 백엔드 서버 (포트 5000)

```bash
cd /Users/ptk/ad-insight-demo/backend
npm start
```

성공 메시지:
```
🚀 Backend server running at http://localhost:5000
✅ Anthropic API configured   (API 키 설정 시)
⚠️  Anthropic API not configured - using mock insights  (API 키 없을 시)
```

---

### 터미널 2️⃣ - 프론트엔드 개발 서버 (포트 5173)

```bash
cd /Users/ptk/ad-insight-demo/frontend
npm run dev
```

성공 메시지:
```
  ➜  Local:   http://localhost:5173/
```

---

### 3️⃣ 브라우저에서 열기

**`http://localhost:5173`** 접속

---

## ✨ 사용 방법

1. **브랜드명 입력** (예: "Apple", "Nike", "Starbucks")
2. **"분석 시작" 버튼 클릭**
3. **광고 카드 5개 + AI 인사이트 표시** (약 1-2초 후)

---

## 📊 분석 결과

### 광고 카드 (5개)
- 📝 **광고 카피**: 브랜드에 맞춘 실제 같은 문장
- 📱 **포맷**: Instagram Reels, TikTok, YouTube Shorts, Facebook Feed 등
- 🎯 **CTA**: 지금 시작하기, 할인받기, 더 알아보기 등
- 🎨 **톤**: 정보형, 감성형, 증거형, 긴급형, UGC형

### AI 인사이트 (Claude API)
- 📊 **톤 분포**: 각 톤별 사용 비율
- 🎯 **CTA 패턴**: 자주 쓰이는 CTA 패턴 분석
- ✨ **차별화 전략**: 브랜드별 맞춤형 전략 제안

---

## 🌍 브랜드별 자동 감지

앱이 입력한 브랜드명을 인식해 다양한 광고 카피 생성:

| 카테고리 | 예시 | 특징 |
|---------|------|------|
| **Tech** | Apple, Google, Slack | 기능성/효율성 중심 |
| **Fashion** | Nike, Zara, UNIQLO | 트렌드/스타일 중심 |
| **Food** | Starbucks, 배달의민족 | 맛/편리성 중심 |
| **Health** | 피트니스, 비타민 | 건강/효과 중심 |
| **General** | 기타 | 다목적 카피 |

---

## 🐛 문제 해결

### "Cannot GET /api/analyze" 에러
→ 백엔드 서버(포트 5000)가 실행 중인지 확인하세요

### "Claude API error" 메시지
→ `.env` 파일의 API 키를 확인하거나, Mock 데이터 사용 가능

### 포트 이미 사용 중
```bash
# 포트 5000 점유 프로세스 찾기
lsof -i :5000

# 포트 5173 점유 프로세스 찾기
lsof -i :5173
```

### npm install 오류
```bash
# 캐시 초기화
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

## 📦 프로덕션 빌드

```bash
cd frontend
npm run build
```

빌드 결과: `frontend/dist/` 폴더

---

## 🛑 종료

터미널에서 **`Ctrl+C`** 입력

---

## 📁 프로젝트 구조

```
ad-insight-demo/
├── backend/
│   ├── server.js          # Express API + Claude 연동
│   ├── package.json       # 백엔드 의존성
│   ├── .env               # API 키 설정 (개인용)
│   └── .env.example       # API 키 템플릿
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── components/
│   │   │   ├── AdCard.jsx        # 광고 카드
│   │   │   └── InsightSection.jsx # AI 인사이트
│   │   └── styles/
│   │       ├── App.css
│   │       ├── AdCard.css
│   │       ├── InsightSection.css
│   │       └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

---

## 🎯 주요 기능

✅ **더 현실적인 광고 데이터**
- 브랜드 카테고리별 맞춤 카피
- 다양한 톤 (정보형/감성형/증거형/긴급형/UGC형)
- 다양한 포맷 (Instagram, TikTok, YouTube 등)

✅ **Claude API 연동**
- 광고 톤 분포 분석
- CTA 패턴 분석
- 맞춤형 차별화 전략 제안

✅ **사용자 친화적 UI**
- 실시간 분석 결과 표시
- 아름다운 카드형 인터페이스
- 반응형 디자인 (모바일 지원)

---

## 🎯 다음 단계 (선택사항)

### 실제 데이터 연동
- 실제 광고 데이터 API 연결
- 데이터베이스 저장

### 기능 확장
- 광고 성과 지표 시뮬레이션
- 광고 버전 비교 기능
- 내보내기 기능 (PDF, CSV)

### 배포
- Vercel (프론트엔드)
- Railway/Heroku (백엔드)

---

## 📞 지원

문제 발생 시:
1. 포트 충돌 확인
2. Node.js 버전 확인 (v16 이상 필요)
3. `.env` 파일 확인
4. 터미널 재시작 후 다시 시도
