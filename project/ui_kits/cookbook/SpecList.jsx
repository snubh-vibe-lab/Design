// Bulleted spec list — > caret + bold lead-in + body-dim rest
const SpecList = ({ items }) => (
  <ul className="vl-list">
    {items.map((it, i) => (
      <li key={i}>
        <span className="caret">&gt;</span>
        <div>
          <span className="lead-in">{it.lead}</span>
          <span className="rest">{it.rest}</span>
        </div>
      </li>
    ))}
  </ul>
);

window.SpecList = SpecList;
