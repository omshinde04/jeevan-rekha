import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  ChevronDown,
  User,
  CalendarCheck,
  FlaskConical,
  Boxes,
  FileText,
  ClipboardList,
  Menu,
  X,
} from "lucide-react";

const menu = [
  { title: "Dashboard", icon: LayoutDashboard },
  { section: "USER ROLE", title: "User Role", icon: Users },
  { section: "FRANCHISE", title: "Franchise", icon: User },
  { section: "PATIENT", title: "Patient", icon: User },
  { section: "APPOINTMENTS", title: "Appointments", icon: CalendarCheck },
  { section: "LAB MODULE", title: "Lab Module", icon: FlaskConical },
  { section: "INVENTORY", title: "Inventory", icon: Boxes },
  { section: "BILLING", title: "Billing", icon: FileText },
  { section: "REPORTS", title: "Reports", icon: ClipboardList },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden bg-[#063b2a] text-white p-2 rounded-lg shadow-lg"
      >
        <Menu size={22} />
      </button>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72
        bg-gradient-to-b from-[#063b2a] to-[#042d20]
        text-white shadow-2xl
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <img
            src="https://dummyimage.com/140x40/ffffff/0a7c4a&text=Jeevanrekha"
            alt="logo"
          />
          <button
            onClick={() => setOpen(false)}
            className="md:hidden"
          >
            <X size={22} />
          </button>
        </div>

        {/* MENU */}
        <nav className="px-4 py-5 space-y-4 overflow-y-auto h-[calc(100vh-72px)] scrollbar-thin scrollbar-thumb-green-800">
          {menu.map((item, i) => {
            const Icon = item.icon;
            const isActive = active === i;

            return (
              <div key={i}>
                {/* SECTION TITLE */}
                {item.section && (
                  <p className="text-xs text-green-300 uppercase px-2 mb-2 tracking-wide">
                    {item.section}
                  </p>
                )}

                {/* MENU ITEM */}
                <button
                  onClick={() => setActive(isActive ? null : i)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg
                  transition-all duration-200
                  ${isActive ? "bg-white/15" : "hover:bg-white/10"}`}
                >
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <Icon size={18} className="text-white" />
                    {item.title}
                  </div>

                  {item.section && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300
                      ${isActive ? "rotate-180" : ""}`}
                    />
                  )}
                </button>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
