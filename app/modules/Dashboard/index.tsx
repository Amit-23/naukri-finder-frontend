import Header from "./header";

import Footer from "./footer";
import DashboardBody from "./body";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-800">
      <Header />
      
      <main className="flex-grow">
        <DashboardBody />
      </main>
      
      <Footer />
    </div>
  );
}