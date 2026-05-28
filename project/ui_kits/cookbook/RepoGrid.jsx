// Three-column directory of cookbook sections (prompts / workflows / tools / etc).
// Each cell is just title + meta + paragraph — no card chrome.
const RepoGrid = ({ items }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '34px 48px',
    marginTop: 36,
  }}>
    {items.map((it, i) => (
      <div className="vl-card" key={i}>
        <div className="vl-meta">// {it.meta}</div>
        <h3>{it.title}</h3>
        <p>{it.body}</p>
      </div>
    ))}
  </div>
);

window.RepoGrid = RepoGrid;
