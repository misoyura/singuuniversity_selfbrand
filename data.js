// 강의 공통 정보와 차시 목록.
// 새 차시를 추가하려면: 1) session_N.html 내용 파일 작성, 2) 아래 SESSIONS 배열에 항목 추가.
// index.html의 목차 카드와 각 session_N.html의 상단 네비게이션이 이 데이터로 자동 생성됩니다.

const COURSE = {
  name: "신구대학교 치위생학과 셀프브랜딩 특강",
  instructor: "김유라",
  year: 2026,
};

const SESSIONS = [
  {
    id: 1,
    title: "경쟁력 강화를 위한 셀프브랜딩",
    subtitle: "나를 발견하고, 경험으로 증명하고, 브랜드로 연결하라",
    desc: "스펙·강점·브랜드의 차이부터 AI로 나의 강점 찾기, 5가지 경력자산 관리, 나만의 브랜드 문장 완성까지.",
    href: "session_1.html",
    anchors: [
      { href: "#flow", label: "오늘의 흐름" },
      { href: "#part1", label: "왜 셀프브랜딩인가" },
      { href: "#part2", label: "나는 어떤 사람인가" },
      { href: "#part3", label: "강점 찾기" },
      { href: "#part4", label: "경력관리" },
      { href: "#part5", label: "브랜딩 완성" },
      { href: "#wrap", label: "마무리" },
    ],
  },
];
