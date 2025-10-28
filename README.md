# 할일 관리 애플리케이션

간단하고 직관적인 웹 기반 할일 관리 애플리케이션입니다. HTML, CSS, JavaScript로 제작되었으며, 별도의 서버나 프레임워크 없이 동작합니다.

## 주요 기능

- 할일 추가/삭제
- 할일 완료 체크
- 전체/진행중/완료 필터링
- 실시간 통계 (전체, 진행중, 완료 개수)
- 로컬스토리지를 이용한 데이터 저장 (새로고침해도 데이터 유지)
- 반응형 디자인

## 파일 구조

```
claude-test/
├── index.html      # 메인 HTML 파일
├── style.css       # 스타일시트
├── script.js       # JavaScript 기능
└── README.md       # 사용 설명서
```

## 실행 방법

### 방법 1: 직접 파일 열기 (가장 간단)

1. 프로젝트 폴더에서 `index.html` 파일을 더블클릭하거나
2. 웹 브라우저를 열고 `index.html` 파일을 드래그 앤 드롭

### 방법 2: 로컬 웹 서버 사용 (권장)

#### Python이 설치된 경우:

```bash
# Python 3
python3 -m http.server 8000

# 또는 Python 2
python -m SimpleHTTPServer 8000
```

브라우저에서 `http://localhost:8000` 접속

#### Node.js가 설치된 경우:

```bash
# http-server 설치 (한 번만)
npm install -g http-server

# 서버 실행
http-server -p 8000
```

브라우저에서 `http://localhost:8000` 접속

#### VS Code를 사용하는 경우:

1. VS Code에서 프로젝트 폴더 열기
2. "Live Server" 확장 프로그램 설치
3. `index.html` 파일에서 우클릭 → "Open with Live Server"

## 사용 방법

1. **할일 추가**: 입력창에 할일을 입력하고 '추가' 버튼을 클릭하거나 Enter 키를 누릅니다.
2. **할일 완료**: 체크박스를 클릭하여 완료/미완료 상태를 변경합니다.
3. **할일 삭제**: '삭제' 버튼을 클릭하여 할일을 제거합니다.
4. **필터링**: '전체', '진행중', '완료' 버튼으로 원하는 항목만 볼 수 있습니다.
5. **통계 확인**: 하단에서 전체/진행중/완료 개수를 확인할 수 있습니다.

## 기술 스택

- HTML5
- CSS3 (Flexbox, 애니메이션, 그라데이션)
- Vanilla JavaScript (ES6+)
- localStorage API

## 브라우저 호환성

- Chrome (권장)
- Firefox
- Safari
- Edge
- 기타 모던 브라우저

## 특징

- 외부 라이브러리 없이 순수 JavaScript로 구현
- 데이터가 브라우저 로컬스토리지에 저장되어 새로고침해도 유지
- 깔끔하고 현대적인 UI/UX
- 반응형 디자인으로 모바일에서도 사용 가능
- 부드러운 애니메이션 효과

## 라이선스

MIT License
