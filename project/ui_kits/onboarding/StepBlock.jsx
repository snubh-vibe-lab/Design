// A numbered step inside the install guide.
// Renders as: [N°] header row + body + optional code block(s).
const StepBlock = ({ n, title, kicker, children }) => (
  <article className="step">
    <header className="step-head">
      <span className="step-num">{String(n).padStart(2, '0')}</span>
      <div>
        {kicker && <div className="vl-meta" style={{ marginBottom: 6 }}>// {kicker}</div>}
        <h3>{title}</h3>
      </div>
    </header>
    <div className="step-body">
      {children}
    </div>
  </article>
);

window.StepBlock = StepBlock;
