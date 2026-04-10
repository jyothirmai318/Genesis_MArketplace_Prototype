const { useMemo, useState } = React;

const products = [
  "Synergy Portal",
  "Practice Deep Learn",
  "360 DeepLearn",
  "Referral Management",
  "AI Bot",
  "MIPS",
];

function LoginView({ onSelectRole }) {
  return (
    <div className="center-wrap">
      <div className="card">
        <h1>Sign In</h1>
        <p>Select your role to continue</p>
        <div className="role-list">
          <button className="btn-primary" onClick={() => onSelectRole("user")}>
            User
          </button>
          <button className="btn-soft" onClick={() => onSelectRole("admin")}>
            Admin
          </button>
          <button className="btn-soft" onClick={() => onSelectRole("vendor")}>
            Vendor
          </button>
        </div>
      </div>
    </div>
  );
}

function TopBar({ onLogout }) {
  return (
    <header className="topbar">
      <div className="logo">
        <div className="logo-mark">G</div>
        <div>
          <h2>GENESIS</h2>
          <small>Synergy Network</small>
        </div>
      </div>
      <nav className="nav-icons" aria-label="Main navigation">
        <button className="icon-btn" title="Home" aria-label="Home">
          🏠
        </button>
        <button className="icon-btn" title="Support" aria-label="Support">
          🛟
        </button>
        <button className="icon-btn" title="Profile" aria-label="Profile">
          👤
        </button>
      </nav>
      <button className="btn-soft" onClick={onLogout}>
        Sign Out
      </button>
    </header>
  );
}

function UserDashboard({ onLogout }) {
  const productCards = useMemo(
    () =>
      products.map((product) => (
        <article className="product-card" key={product}>
          <div>
            <h4>{product}</h4>
            <p>
              Explore {product} to view tools, insights, and workflow options in this demo
              marketplace.
            </p>
          </div>
          <button className="btn-primary">Open</button>
        </article>
      )),
    []
  );

  return (
    <div className="dashboard">
      <TopBar onLogout={onLogout} />
      <section className="section">
        <h3>Available Products</h3>
        <div className="products">{productCards}</div>
      </section>
    </div>
  );
}

function PlaceholderDashboard({ title, onLogout }) {
  return (
    <div className="center-wrap">
      <div className="placeholder-view">
        <h2>{title}</h2>
        <p>This is a placeholder dashboard for demo navigation.</p>
        <div className="top-actions">
          <button className="btn-primary" onClick={onLogout}>
            Back to Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [role, setRole] = useState(null);

  const handleRoleSelect = (selectedRole) => setRole(selectedRole);
  const handleLogout = () => setRole(null);

  if (!role) {
    return <LoginView onSelectRole={handleRoleSelect} />;
  }

  if (role === "admin") {
    return <PlaceholderDashboard title="Admin Dashboard" onLogout={handleLogout} />;
  }

  if (role === "vendor") {
    return <PlaceholderDashboard title="Vendor Dashboard" onLogout={handleLogout} />;
  }

  return <UserDashboard onLogout={handleLogout} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="app-shell">
      <App />
    </div>
  </React.StrictMode>
);
