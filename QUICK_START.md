# 🚀 빠른 시작 가이드 (Quick Start)

## 1️⃣ Node.js 설치 (필수!)

### Mac 사용자
```bash
# Homebrew 설치 (없으면)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Node.js 설치
brew install node
```

### Windows 사용자
- 방법 1: https://nodejs.org 에서 다운로드 후 설치
- 방법 2: Chocolatey 사용
  ```powershell
  choco install nodejs
  ```

### Linux 사용자
```bash
# Ubuntu/Debian
sudo apt-get install nodejs npm

# 또는 Node.js 공식 저장소 사용
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

---

## 2️⃣ 설치 확인

```bash
node --version    # v18.0.0 이상 권장
npm --version     # 8.0.0 이상
```

---

## 3️⃣ 프로젝트 설치 (3분 소요)

### 백엔드 설치
```bash
cd /Users/ptk/ad-insight-demo/backend
npm install
```

### 프론트엔드 설치 (새 터미널)
```bash
cd /Users/ptk/ad-insight-demo/frontend
npm install
```

---

## 4️⃣ 실행 (각각 새로운 터미널에서)

### 터미널 1 - 백엔드
```bash
cd /Users/ptk/ad-insight-demo/backend
npm start
```

👉 출력: `🚀 Backend server running at http://localhost:5000`

### 터미널 2 - 프론트엔드
```bash
cd /Users/ptk/ad-insight-demo/frontend
npm run dev
```

👉 출력: `➜  Local:   http://localhost:5173/`

---

## 5️⃣ 브라우저에서 열기
**http://localhost:5173**

---

## ✨ 사용 예시

1. 입력창에 브랜드명 입력 (예: Apple, Nike, Starbucks)
2. "분석 시작" 버튼 클릭
3. 5개의 가짜 광고 카드 표시 완료! 🎉

---

## 💡 팁
- 반복 테스트하려면 브랜드명을 바꾸고 다시 버튼 클릭
- 모바일 화면도 지원합니다 (반응형 디자인)
- CSS는 `frontend/src/styles/` 폴더에서 커스터마이징 가능

---

## 🎯 다음 커스터마이징

### 더미 광고 데이터 수정
파일: `backend/server.js`

### UI 디자인 수정
파일: `frontend/src/styles/App.css`

### 카드 레이아웃 수정
파일: `frontend/src/components/AdCard.jsx`

