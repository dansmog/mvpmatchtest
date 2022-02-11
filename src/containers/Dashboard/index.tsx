import { Outlet } from "react-router";
import Header from "../../components/Header";
import SidebarNav from "../../components/SidebarNavigation";
import DashboardHeader from "./components/DashboardHeader";

import "./dashboard.styles.css";

const Dashboard = () => {
  return (
    <section className="dashboard__wrapper">
      <Header />
      <section className="main__content">
        <section className="app__wrapper d-flex">
          <SidebarNav />
          <section className="main__content--right margin--left--33">
            <DashboardHeader />

            <Outlet />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Dashboard;
