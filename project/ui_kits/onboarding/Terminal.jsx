// Code block with mac-window dot strip — frames terminal commands.
const Terminal = ({ shell = 'powershell', children, label }) => (
  <figure className="terminal">
    <header className="terminal-head">
      <span className="vl-mac-dots"><i></i><i></i><i></i></span>
      <span className="terminal-label">{label || `${shell}`}</span>
    </header>
    <pre><code>{children}</code></pre>
  </figure>
);

window.Terminal = Terminal;
