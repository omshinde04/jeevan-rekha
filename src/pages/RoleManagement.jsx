import { Eye, Pencil } from "lucide-react";

const roles = [
  {
    id: 1,
    name: "SuperAdmin",
    status: "Active",
    patient: "Yes",
    lab: "Yes",
    billing: "Yes",
    user: "Yes",
    appointment: "Yes",
    inventory: "Yes",
    reports: "Yes",
  },
  {
    id: 2,
    name: "Doctor",
    status: "Active",
    patient: "Yes",
    lab: "No",
    billing: "No",
    user: "No",
    appointment: "Yes",
    inventory: "No",
    reports: "Yes",
  },
  {
    id: 3,
    name: "Lab Technician",
    status: "Active",
    patient: "No",
    lab: "Yes",
    billing: "No",
    user: "No",
    appointment: "No",
    inventory: "No",
    reports: "Yes",
  },
  {
    id: 4,
    name: "Inventory Staff",
    status: "Active",
    patient: "No",
    lab: "No",
    billing: "No",
    user: "No",
    appointment: "No",
    inventory: "Yes",
    reports: "No",
  },
  {
    id: 5,
    name: "Accountant",
    status: "Active",
    patient: "No",
    lab: "No",
    billing: "Yes",
    user: "No",
    appointment: "No",
    inventory: "No",
    reports: "No",
  },
  {
    id: 6,
    name: "Clinic Admin",
    status: "Active",
    patient: "Yes",
    lab: "Yes",
    billing: "Yes",
    user: "Yes",
    appointment: "Yes",
    inventory: "Yes",
    reports: "Yes",
  },
  {
    id: 7,
    name: "Receptionist",
    status: "Active",
    patient: "Yes",
    lab: "No",
    billing: "Yes",
    user: "No",
    appointment: "Yes",
    inventory: "No",
    reports: "No",
  },
];

export default function RoleManagement() {
  return (
    <div className="p-6 bg-[#f3fbf7] min-h-screen">
      
      {/* PAGE TITLE */}
      <div className="bg-linear-to-r from-[#063b2a] to-[#0a7c4a] text-white rounded-xl px-6 py-3 font-semibold mb-6">
        User & Role Management
      </div>

      {/* CARD */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        
        {/* CARD HEADER */}
        <div className="relative grid grid-cols-2 bg-linear-to-r from-[#063b2a] to-[#0a7c4a] text-white text-sm font-medium">
          
          {/* ORANGE UNDERLINE (LEFT HALF ONLY) */}
          <span className="absolute bottom-0 left-0 h-0.75 w-1/2 bg-linear-to-r from-[#f5a623] to-[#f08c00]" />

          <div className="px-6 py-3 text-center relative z-10">
            List of Roles
          </div>

          <div className="px-6 py-3 text-center relative z-10 opacity-90">
            List of Users
          </div>
        </div>

        {/* TABLE + FOOTER WRAPPER */}
        <div className="relative mt-5">

          {/* LEFT ORANGE VERTICAL LINE */}
          <span className="absolute left-0 top-0 h-full w-0.75 rounded-full bg-linear-to-b from-[#f5a623] to-[#f08c00]" />

          {/* TABLE */}
          <div className="overflow-x-auto ml-0.75">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#063b2a] text-white">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Role Name</th>
                  <th className="px-4 py-3">Role Code</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Patient Mgmt</th>
                  <th className="px-4 py-3">Lab Module</th>
                  <th className="px-4 py-3">Billing</th>
                  <th className="px-4 py-3">User Mgmt</th>
                  <th className="px-4 py-3">Appointments</th>
                  <th className="px-4 py-3">Inventory</th>
                  <th className="px-4 py-3">Reports</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {roles.map((role, i) => (
                  <tr
                    key={role.id}
                    className={`border-b ${
                      i % 2 === 0 ? "bg-[#f6fffb]" : "bg-white"
                    }`}
                  >
                    <td className="px-4 py-3">{role.id}</td>
                    <td className="px-4 py-3">{role.name}</td>
                    <td className="px-4 py-3">-</td>
                    <td className="px-4 py-3">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">
                        {role.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">{role.patient}</td>
                    <td className="px-4 py-3">{role.lab}</td>
                    <td className="px-4 py-3">{role.billing}</td>
                    <td className="px-4 py-3">{role.user}</td>
                    <td className="px-4 py-3">{role.appointment}</td>
                    <td className="px-4 py-3">{role.inventory}</td>
                    <td className="px-4 py-3">{role.reports}</td>
                    <td className="px-4 py-3 flex gap-2">
                      <button className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                        <Eye size={16} />
                      </button>
                      <button className="bg-green-100 text-green-700 p-2 rounded-lg">
                        <Pencil size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FOOTER */}
          <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 text-sm text-gray-600 ml-0.75">
            <p>Showing 7 roles</p>

            <div className="flex items-center gap-4">
              <div>
                Items per page:
                <select className="ml-2 border rounded px-2 py-1">
                  <option>10</option>
                </select>
              </div>
              <p>1 – 7 of 7</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
