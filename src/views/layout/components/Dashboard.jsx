// import { Link } from "react-router-dom";
import Card from "./dashboard/Card";
import Reports from "./dashboard/Reports";
import ClientCharts from "./dashboard/ClientCharts";
import BudgetReports from "./dashboard/BudgetReports";
import WebTraffic from "./dashboard/WebTraffic";
import NewsUpdates from "./dashboard/NewsUpdates";
import RecentActivity from "./dashboard/RecentActivity";
import RecentSales from "./dashboard/RecentSales";
import TopSelling from "./dashboard/TopSelling";
import PageTitle from "./PageTitle";

export default function Dashboard(){
      
    return(
        <>
          <PageTitle page="Dashboard"/>
          {/* End Page Title */}
          <section className="section dashboard">
            <div className="row">
              {/* Left side columns */}
              <div className="col-lg-8">
                <div className="row">

                  {/* Sales Card */}
                  <div div className="col-xxl-4 col-md-6">
                    <Card cssClass="sales-card" title="Sales" icon="bi-cart" valueCount="14" percentCount="12%" subTitle="increase"/>
                  </div>{/* End Sales Card */}

                  {/* Revenue Card */}
                  <div className="col-xxl-4 col-md-6">
                    <Card cssClass="revenue-card" title="Revenue" icon="bi-currency-dollar" valueCount="$3,264" percentCount="8%" subTitle="increase"/>
                  </div>{/* End Revenue Card */}

                  {/* Customers Card */}
                  <div className="col-xxl-4 col-xl-12">
                    <Card cssClass="customers-card" title="Customers" icon="bi-people" valueCount="1244" percentCount="12%" subTitle="decrease"/>
                  </div>{/* End Customers Card */}

                  {/* Reports */}
                  <div className="col-12">
                    <Reports/>
                  </div>{/* End Reports */}

                  {/* Reports */}
                  <div className="col-12">
                    <ClientCharts/>
                  </div>{/* End Reports */}

                  {/* Recent Sales */}
                  <div className="col-12">
                    <RecentSales/>
                  </div>{/* End Recent Sales */}

                  {/* Top Selling */}
                  <div className="col-12">
                    <TopSelling/>
                  </div>{/* End Top Selling */}
                </div>
              </div>{/* End Left side columns */}

              {/* Right side columns */}
              <div className="col-lg-4">

                {/* Recent Activity */}
                <RecentActivity/>
                {/* End Recent Activity */}

                {/* Budget Report */}
                <BudgetReports/>
                {/* End Budget Report */}

                {/* Website Traffic */}
                <WebTraffic/>
                {/* End Website Traffic */}

                {/* News & Updates Traffic */}
                <NewsUpdates/>
                {/* End News & Updates */}

              </div>{/* End Right side columns */}
            </div>
          </section>
        </>

    );
}