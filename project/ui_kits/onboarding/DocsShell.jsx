// Two-pane shell: persistent left sidebar (TOC) + scrollable content column.
const DocsShell = ({ active, onNavigate, children }) => {
  const sections = [
    { id: 'overview',  meta: '00', label: '이 가이드의 목적' },
    { id: 'paths',     meta: '01', label: '두 경로' },
    { id: 'claude',    meta: '02', label: 'A. 클로드' },
    { id: 'codex',     meta: '03', label: 'B. 코덱스' },
    { id: 'checklist', meta: '04', label: '최종 체크리스트' },
    { id: 'trouble',   meta: '05', label: '트러블슈팅' },
  ];
  return (
    <div className="docs-shell">
      <aside className="docs-rail">
        <a className="docs-brand" href="#">
          <img src="../../assets/vibe_lab_avatar.png" alt="VL" />
          <span>vibe<span style={{ fontWeight: 400, opacity: 0.75 }}> lab</span></span>
        </a>
        <div className="docs-rail-meta">// ONBOARDING · 2026.05</div>
        <nav className="docs-toc">
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`}
               className={'toc-item ' + (active === s.id ? 'is-active' : '')}
               onClick={(e) => { e.preventDefault(); onNavigate?.(s.id); }}>
              <span className="toc-num">{s.meta}</span>
              <span className="toc-label">{s.label}</span>
            </a>
          ))}
        </nav>
        <div className="docs-rail-foot">
          <a href="https://github.com/snubh-vibe-lab/onboarding" target="_blank" rel="noreferrer">GITHUB ↗</a>
        </div>
      </aside>
      <main className="docs-main">
        {children}
      </main>
    </div>
  );
};

window.DocsShell = DocsShell;
