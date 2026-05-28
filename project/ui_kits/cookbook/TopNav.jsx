// Top navigation strip — used across all cookbook pages.
const TopNav = ({ active = 'cookbook' }) => (
  <header className="vl-topnav">
    <a className="brand" href="#">
      <img className="mark" src="../../assets/vibe_lab_avatar.png" alt="VL" />
      <span>vibe<span className="light"> lab</span></span>
    </a>
    <nav>
      <a href="#" className={active === 'cookbook' ? 'is-active' : ''}>Cookbook</a>
      <a href="#" className={active === 'workflows' ? 'is-active' : ''}>Workflows</a>
      <a href="#" className={active === 'tools' ? 'is-active' : ''}>Tools</a>
      <a href="#" className={active === 'cases' ? 'is-active' : ''}>Case studies</a>
      <a href="https://github.com/snubh-vibe-lab" target="_blank" rel="noreferrer">GitHub ↗</a>
    </nav>
  </header>
);

window.TopNav = TopNav;
