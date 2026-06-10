# 🚀 5분 안에 시작하기

## 1️⃣ Node.js 확인

```bash
node --version  # v18 이상 확인
npm --version   # 8 이상 확인
```

없으면 설치:
```bash
# Mac
brew install node

# Windows/Linux는 https://nodejs.org 에서 다운로드
```

---

## 2️⃣ 의존성 설치 (2개 터미널에서 병렬 실행)

**터미널 1:**
```bash
cd /Users/ptk/ad-insight-demo/backend
npm install
```

**터미널 2:**
```bash
cd /Users/ptk/ad-insight-demo/frontend
npm install
```

---

## 3️⃣ 서버 실행 (각각 새 터미널에서)

**백엔드 (포트 5000):**
```bash
cd /Users/ptk/ad-insight-demo/backend
npm start
```

**프론트엔드 (포트 5173):**
```bash
cd /Users/ptk/ad-insight-demo/frontend
npm run dev
```

---

## 4️⃣ 브라우저에서 열기

```
http://localhost:5173
```

---

## ✨ 사용해보기

1. 브랜드명 입력 (예: Apple, Nike, Starbucks)
2. "분석 시작" 클릭
3. 5개 광고 + AI 분석 결과 확인!

---

## 🔑 Claude API 연동 (선택사항)

실제 AI 분석을 원하면:

1. https://console.anthropic.com 접속
2. API 키 발급
3. `backend/.env` 파일 수정:
   ```
   ANTHROPIC_API_KEY=sk-ant-...your-key...
   ```
4. 백엔드 재시작

**API 키 없어도 Mock 데이터로 작동합니다!**

---

## 📚 더 자세한 가이드

- **QUICK_START.md** - 자세한 설치 가이드
- **SETUP.md** - 상세 설정 및 문제 해결
- **00_START_HERE.md** - 프로젝트 종합 안내
- **SUMMARY.txt** - 기능 요약

---

## 🎯 어떤 브랜드를 시도할까?

| 브랜드 | 특징 |
|--------|------|
| Apple | 기술/효율성 |
| Nike | 트렌드/스타일 |
| Starbucks | 맛/경험 |
| Google | 혁신/미래 |
| Zara | 패션/신상 |

---

## ❓ 문제 발생?

**"Cannot GET /api/analyze"**
→ 백엔드가 실행 중인지 확인 (터미널 1)

**포트 이미 사용 중**
→ 다른 프로세스 종료 후 다시 시도

**npm install 오류**
→ `npm cache clean --force` 후 재시도

---

모든 준비가 끝났습니다! 즐기세요! 🎉
