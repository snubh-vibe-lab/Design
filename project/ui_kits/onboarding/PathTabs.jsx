// Tab switcher for the Windows / Mac path choice.
const { useState: useTabState } = React;

function PathTabs({ tabs, active, onChange, children }) {
  return (
    <div className="pathtabs">
      <div className="pathtabs-bar">
        {tabs.map(t => (
          <button key={t.id} type="button"
            className={'pathtab ' + (active === t.id ? 'is-active' : '')}
            onClick={() => onChange(t.id)}>
            <span className="pathtab-meta">{t.meta}</span>
            <span className="pathtab-label">{t.label}</span>
          </button>
        ))}
      </div>
      <div className="pathtabs-body">
        {children}
      </div>
    </div>
  );
}

window.PathTabs = PathTabs;
