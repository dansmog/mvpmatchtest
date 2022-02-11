
import "./dashboardheader.styles.css";

const DashboardHeader = () => {
  return (
    <section className="dashboard__header">
      <section className="dashboard__header--left">
        <h6>Reports</h6>
        <p>Easily generate report of your transactions</p>
      </section>
      <section className="dashboard__header--right">
        <button className="button main">Generate report</button>
      </section>
    </section>
  );
};

export default DashboardHeader;
