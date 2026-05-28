// A single prompt-recipe block — what the cookbook entries look like.
const PromptRecipe = ({ meta, title, summary, code, tags }) => (
  <article style={{
    borderTop: '1px solid var(--rule-on-cream)',
    padding: '36px 0',
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 28 }}>
      <div className="vl-meta">// {meta}</div>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 11,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'var(--mute-on-cream)',
      }}>
        {tags.map((t, i) => (
          <span key={i} style={{ marginLeft: i ? 16 : 0 }}>
            <span style={{ color: 'var(--green)' }}>·</span> {t}
          </span>
        ))}
      </div>
    </div>
    <h3 style={{
      fontFamily: 'var(--font-sans)', fontWeight: 700,
      fontSize: 24, letterSpacing: '-0.005em', margin: '12px 0 10px 0',
    }}>{title}</h3>
    <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--body-dim)', margin: 0, maxWidth: 720 }}>
      {summary}
    </p>
    {code && (
      <pre><code>{code}</code></pre>
    )}
  </article>
);

window.PromptRecipe = PromptRecipe;
