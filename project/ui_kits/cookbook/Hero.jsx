// Hero block: meta eyebrow + giant title with green cursor + lead paragraph
const Hero = ({ meta, title, lead, primary, secondary }) => (
  <section className="vl-hero">
    <div className="vl-meta">{meta}</div>
    <h1>
      {title}<i className="cursor" />
    </h1>
    {lead && <p className="lead">{lead}</p>}
    {(primary || secondary) && (
      <div style={{ display: 'flex', gap: 14, marginTop: 36 }}>
        {primary && (
          <a className="vl-btn vl-btn--primary" href={primary.href}>
            <span className="caret">&gt;</span> {primary.label}
          </a>
        )}
        {secondary && (
          <a className="vl-btn" href={secondary.href}>{secondary.label}</a>
        )}
      </div>
    )}
  </section>
);

window.Hero = Hero;
