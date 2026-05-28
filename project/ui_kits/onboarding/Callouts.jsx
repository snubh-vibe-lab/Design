// Inline callouts: note (cream-on-cream rule) and warn (green left bar).
const Note = ({ children }) => (
  <aside className="callout callout--note">
    <span className="callout-mark">//</span>
    <div>{children}</div>
  </aside>
);

const Warn = ({ children }) => (
  <aside className="callout callout--warn">
    <span className="callout-mark">&gt;</span>
    <div>{children}</div>
  </aside>
);

window.Note = Note;
window.Warn = Warn;
