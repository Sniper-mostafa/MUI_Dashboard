import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../page/dashboard/Dashboard";
import Team from "../page/team/Team";
import NotFound from "../page/notFound/NotFound"
import Contact from "../page/contact/Contact";
import Invoices from "../page/invoices/Invoices";
import FAQ from "../page/faq/FAQ";
import Form from "../page/form/Form";
import BarChart from "../page/barChart/BarChart";
import PieChart from "../page/pieChart/PieChart"
import LineChart from "../page/lineChart/LineChart";
import Geography from "../page/geography/GeoGraphy";
import Calendar from "../page/calendar/Calendar";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/team",
                element: <Team />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/form",
                element: <Form />
            },
            {
                path: "/calendar",
                element: <Calendar />
            },
            {
                path: "/invoices",
                element: <Invoices />
            },
            {
                path: "/faq",
                element: <FAQ />
            },
            {
                path: "/bar",
                element: <BarChart />
            },
            {
                path: "/pie",
                element: <PieChart />
            },
            {
                path: "/bar",
                element: <BarChart />
            },
            {
                path: "/line",
                element: <LineChart />
            },
            {
                path: "/geography",
                element: <Geography />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])

export default router;