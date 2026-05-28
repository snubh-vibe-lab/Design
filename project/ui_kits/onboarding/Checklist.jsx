// Interactive checklist row — checks persist in React state for the click-thru.
const { useState } = React;

function ChecklistRow({ children, defaultChecked = false }) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <label className={'checkrow ' + (checked ? 'is-checked' : '')}>
      <button
        type="button"
        className="checkbox"
        aria-pressed={checked}
        onClick={() => setChecked(c => !c)}>
        {checked ? '✓' : ''}
      </button>
      <span className="checkrow-body">{children}</span>
    </label>
  );
}

const Checklist = ({ title, items }) => (
  <div className="checklist">
    {title && <div className="vl-meta" style={{ marginBottom: 14 }}>// {title}</div>}
    <div className="checklist-rows">
      {items.map((it, i) => <ChecklistRow key={i}>{it}</ChecklistRow>)}
    </div>
  </div>
);

window.Checklist = Checklist;
window.ChecklistRow = ChecklistRow;
