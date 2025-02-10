import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Multiple Calculators</h1>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><Link to="/loan-calculator" style={styles.navLink}>Loan Calculator</Link></li>
          <li style={styles.navItem}><Link to="/tax-calculator" style={styles.navLink}>Tax Calculator</Link></li>
          <li style={styles.navItem}><Link to="/age-calculator" style={styles.navLink}>Age Calculator</Link></li>
          <li style={styles.navItem}><Link to="/bmi-calculator" style={styles.navLink}>BMI Calculator</Link></li>
          <li style={styles.navItem}><Link to="/calorie-calculator" style={styles.navLink}>Calorie Calculator</Link></li>
          <li style={styles.navItem}><Link to="/adsense-earning" style={styles.navLink}>AdSense Earnings</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "15px",
    textAlign: "center",
  },
  title: {
    margin: "0",
    fontSize: "24px",
  },
  nav: {
    marginTop: "10px",
  },
  navList: {
    listStyle: "none",
    padding: "0",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  navItem: {
    display: "inline",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "background 0.3s",
  },
  navLinkHover: {
    backgroundColor: "#555",
  }
};

export default Header;
