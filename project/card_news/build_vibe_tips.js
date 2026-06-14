// Generates the "Vibe Coding & Agentic Tips" card-news deck in the SNUBH Vibe Lab
// house design system (1080x1080, cream/navy, Inter+Pretendard+JetBrains Mono).
// Markup mirrors mcp_*/paper_* exactly so the deck reads as one coherent set.
// Output: vibetip_<topic>_0N.html next to the other card_news HTML files.
const fs = require('fs');
const path = require('path');
const OUT = __dirname;

const page = (title, bg, inner) => `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=1080">
<title>${title}</title>
<link rel="stylesheet" href="../colors_and_type.css">
<link rel="stylesheet" href="card_news.css">
<style>
  /* Re-declare faces locally so headless Chrome reliably loads the Korean font.
     The shared colors_and_type.css face for Pretendard does not register under
     headless (Korean then falls back to a taller system font and the footer clips).
     font-display:block avoids a swap mid-screenshot. */
  @font-face { font-family: "Pretendard Variable"; src: url("../fonts/PretendardVariable.ttf"); font-weight: 100 900; font-display: block; }
  @font-face { font-family: "Inter"; src: url("../fonts/Inter-VariableFont_opsz_wght.ttf"); font-weight: 100 900; font-display: block; }
  @font-face { font-family: "JetBrains Mono"; src: url("../fonts/JetBrainsMono-VariableFont_wght.ttf"); font-weight: 100 900; font-display: block; }
  html, body { width: 1080px; height: 1080px; margin: 0; padding: 0; overflow: hidden; }
  body { position: relative; background: var(--${bg}); }
</style>
</head>
<body>
  <section class="card card--${bg}">
${inner}
  </section>
</body>
</html>
`;

const sig = (bg) => `    <header class="card-head">
      <div class="card-eyebrow">{{EYEBROW}}</div>
      <div class="card-sig">
        <img src="../assets/signature_on_${bg}.png" alt="vibe.lab">
      </div>
    </header>`;

const bullets = (items) => `      <ul class="card-bullets" style="font-size: 42px; gap: 30px; margin-top: 8px;">
${items.map(([lead, rest]) => `        <li>
          <span class="caret">&gt;</span>
          <div><span class="lead-in">${lead}</span> <span class="rest">${rest}</span></div>
        </li>`).join('\n')}
      </ul>`;

function cover(d) {
  const inner = sig('navy').replace('{{EYEBROW}}', '// 2026.06 · CARD NEWS') + `
    <div class="card-body">
      <div class="card-num">01 · COVER</div>
      <h1 class="card-title card-title--cover" style="color: var(--cream);">
        ${d.coverTitle}<i class="cursor"></i>
      </h1>
      <hr class="card-rule">
      <p class="card-lead" style="font-size: 42px; line-height: 1.4;">
        ${d.coverLead}
      </p>
    </div>
    <footer class="card-foot">
      <span>SNUBH VIBE LAB</span>
      <span class="swipe">SWIPE</span>
    </footer>`;
  return page(`${d.code} · 01 Cover`, 'navy', inner);
}

function content(d, num, c) {
  const bg = num === 2 ? 'cream' : 'navy';
  const titleColor = bg === 'navy' ? ' color: var(--cream);' : '';
  const cursor = c.cursor ? '<i class="cursor"></i>' : '';
  const inner = sig(bg).replace('{{EYEBROW}}', `// ${c.eyebrow} · 0${num}`) + `
    <div class="card-body card-body--top">
      <div class="card-num">0${num}</div>
      <h2 class="card-title" style="font-size: 80px;${titleColor}">${c.title}${cursor}</h2>
      <hr class="card-rule">
${bullets(c.items)}
    </div>
    <footer class="card-foot">
      <span><span class="page-num">0${num}</span> &nbsp;·&nbsp; 04</span>
      <span class="swipe">SWIPE</span>
    </footer>`;
  return page(`${d.code} · 0${num}`, bg, inner);
}

function summary(d) {
  const c = d.s4;
  const inner = sig('cream').replace('{{EYEBROW}}', '// SUMMARY · 04') + `
    <div class="card-body card-body--top">
      <div class="card-num">04</div>
      <h2 class="card-title" style="font-size: 80px;">${c.title}<i class="cursor"></i></h2>
      <hr class="card-rule">
${bullets(c.items)}
    </div>
    <div class="card-avatar">
      <img src="../assets/vibe_lab_avatar.png" alt="VL">
    </div>
    <footer class="card-foot">
      <span>SNUBH VIBE LAB · 04 / 04</span>
      <span>END</span>
    </footer>`;
  return page(`${d.code} · 04 Summary`, 'cream', inner);
}

const decks = [
  {
    code: 'scope', topic: '작게 맡기기',
    coverTitle: '고칠 파일부터<br>찍어주기',
    coverLead: '범위를 좁힐수록<br>AI의 추측이 사라진다',
    s2: { eyebrow: '왜 좁히나', title: '넓게 맡기면<br>헤맨다', items: [
      ['넓은 요청.', '“로그인 만들어줘” → 어떤 파일을 손댈지 AI가 혼자 추측'],
      ['좁힌 요청.', '“LoginForm의 onSubmit만 고쳐줘” → 바뀔 곳이 분명해진다'],
      ['결과.', '수정 범위가 작아 리뷰가 금방 끝난다'],
    ]},
    s3: { eyebrow: '어떻게 찍나', title: '세 가지를<br>같이 적는다', items: [
      ['어디를.', 'src/LoginForm.tsx 한 파일만 지정'],
      ['무엇을.', 'handleSubmit 함수 하나만 수정'],
      ['어떻게.', '실패하면 화면에 에러를 띄우게'],
    ]},
    s4: { title: '작게 맡기면<br>빨라진다', items: [
      ['파일부터.', '고칠 위치를 먼저 정한다'],
      ['함수까지.', '손댈 범위를 한정한다'],
      ['작은 단위로.', '리뷰 가능한 크기로 쪼갠다'],
    ]},
  },
  {
    code: 'brief', topic: '3줄 요구사항',
    coverTitle: '요구사항은<br>3줄이면 충분',
    coverLead: '목적·제약·확인만<br>나눠서 적는다',
    s2: { eyebrow: '세 줄', title: '목적·제약<br>확인', items: [
      ['첫 줄, 목적.', '“환자 목록에 이름 검색 추가” — 한 문장으로'],
      ['둘째 줄, 제약.', '“디자인·DB 구조는 그대로” — 금지선을 먼저'],
      ['셋째 줄, 확인.', '“npm test 통과 + 스크린샷” — 완료 기준을 숫자로'],
    ]},
    s3: { eyebrow: '왜 통하나', title: '구조가<br>추측을 줄인다', items: [
      ['목적이 짧으면.', 'AI가 곁가지로 새지 않는다'],
      ['제약이 있으면.', '건드리면 안 되는 곳을 지킨다'],
      ['확인이 있으면.', '“됐다”를 숫자로 검증한다'],
    ]},
    s4: { title: '길이가 아니라<br>구조다', items: [
      ['목적.', '무엇을 만들지 한 문장'],
      ['제약.', '하지 말 것을 먼저'],
      ['확인.', '명령과 숫자로 끝낸다'],
    ]},
  },
  {
    code: 'readfirst', topic: '먼저 읽히기',
    coverTitle: '수정 전에<br>읽기부터',
    coverLead: '첫 턴은 고치지 말고<br>구조를 읽게 한다',
    s2: { eyebrow: '왜 읽히나', title: '바로 고치면<br>위험하다', items: [
      ['바로 수정.', '“에러 고쳐줘” → 비슷한 파일을 잘못 건드린다'],
      ['먼저 조사.', '“관련 파일 찾아 구조만 요약” → 판단 근거가 생긴다'],
      ['한 턴에.', '조사와 수정을 섞지 않는다'],
    ]},
    s3: { eyebrow: '첫 턴', title: '첫 턴엔<br>읽기만', items: [
      ['수정 금지.', '이번 턴은 고치지 말 것'],
      ['범위 파악.', '관련 파일 3~5개만 찾기'],
      ['흐름 요약.', '데이터가 흐르는 길과 위험점 표시'],
    ]},
    s4: { title: '읽고·정하고<br>·고친다', items: [
      ['먼저 읽기.', 'AI가 읽으면 고칠 범위가 좁아진다'],
      ['사람이 판단.', '요약을 보고 방향을 정한다'],
      ['그다음 수정.', '승인 뒤 두 번째 턴부터'],
    ]},
  },
  {
    code: 'guardrail', topic: '권한 경계',
    coverTitle: 'Agent에게<br>권한의 선을',
    coverLead: '허용·금지·확인을<br>미리 정해둔다',
    s2: { eyebrow: '세 칸', title: '허용·금지<br>확인', items: [
      ['허용.', '파일 읽기·지정 파일 수정·테스트 실행'],
      ['금지.', '배포·실데이터 삭제·비밀키 출력·메일 발송'],
      ['확인.', '외부 전송·DB 변경·권한 변경은 한 번 묻고'],
    ]},
    s3: { eyebrow: '왜 금지선 먼저', title: '자율성엔<br>안전장치를', items: [
      ['자율성이 높을수록.', '잘못된 자동 실행의 피해도 커진다'],
      ['되돌리기 어려운 일.', '배포·삭제·전송은 사람이 확인'],
      ['안전장치가 있으면.', '나머지는 믿고 맡길 수 있다'],
    ]},
    s4: { title: '자율성<br>+ 안전장치', items: [
      ['허용.', '여기까진 스스로'],
      ['금지.', '이건 절대 자동 금지'],
      ['확인.', '영향 큰 일은 한 번 더 묻기'],
    ]},
  },
];

let n = 0;
for (const d of decks) {
  const files = {
    [`vibetip_${d.code}_01.html`]: cover(d),
    [`vibetip_${d.code}_02.html`]: content(d, 2, d.s2),
    [`vibetip_${d.code}_03.html`]: content(d, 3, d.s3),
    [`vibetip_${d.code}_04.html`]: summary(d),
  };
  for (const [name, html] of Object.entries(files)) {
    fs.writeFileSync(path.join(OUT, name), html, 'utf8');
    n++;
  }
}
console.log('wrote', n, 'html files for', decks.length, 'decks');
