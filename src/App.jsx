import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import RoleManagement from "./pages/RoleManagement";

function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 min-h-screen bg-[#f3fbf7] md:ml-72">
        {children}
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* DASHBOARD PAGES */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <RoleManagement />
            </DashboardLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
