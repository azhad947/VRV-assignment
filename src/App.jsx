import React, { useState } from "react";
import UserTable from "./components/UserTable";
import RoleTable from "./components/RoleTable";
import AddUserModal from "./components/AddUserModal";
import AddRoleModal from "./components/AddRoleModal";


import DarkLightToggle from "./components/DarkLight.jsx";

const App = () => {


  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      roles: ["Admin"],
      status: "Active",
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@example.com",
      roles: ["Editor"],
      status: "Inactive",
    },
  ]);

  const [roles, setRoles] = useState([
    {
      id: "admin",
      name: "Admin",
      permissions: ["Manage Users", "View Reports"],
    },
    {
      id: "editor",
      name: "Editor",
      permissions: ["Edit Content", "View Reports"],
    },
  ]);

  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [roleToEdit, setRoleToEdit] = useState(null);

  const handleSaveUser = (user) => {
    setUsers((prevUsers) =>
      prevUsers.some((u) => u.id === user.id)
        ? prevUsers.map((u) => (u.id === user.id ? user : u))
        : [...prevUsers, user]
    );
  };

  const handleSaveRole = (role) => {
    setRoles((prevRoles) =>
      prevRoles.some((r) => r.id === role.id)
        ? prevRoles.map((r) => (r.id === role.id ? role : r))
        : [...prevRoles, role]
    );
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition">
     
      <div className="flex justify-between">
        
        <h1 className="text-2xl font-bold mb-6">
          Role-Based Access Control (RBAC){" "}
        </h1>
        {/* <button className="size-6 bg-blend-color-burn mr-4 bg-red-600" onClick={toggleTheme}>
        {isDarkMode ? <Sun /> : <Moon />} 
        </button> */}
        <DarkLightToggle />
      </div>

      {/* User Management */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Users</h2>
        <button
          onClick={() => {
            setUserToEdit(null);
            setIsUserModalOpen(true);
          }}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
        >
          Add User
        </button>
        <UserTable
          users={users}
          onEdit={(user) => {
            setUserToEdit(user);
            setIsUserModalOpen(true);
          }}
          onDelete={(id) => setUsers(users.filter((u) => u.id !== id))}
        />
      </section>

      {/* Role Management */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Roles</h2>
        <button
          onClick={() => {
            setRoleToEdit(null);
            setIsRoleModalOpen(true);
          }}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-4"
        >
          Add Role
        </button>
        <RoleTable
          roles={roles}
          onEdit={(role) => {
            setRoleToEdit(role);
            setIsRoleModalOpen(true);
          }}
          onDelete={(id) => setRoles(roles.filter((r) => r.id !== id))}
        />
      </section>

      {/* Modals */}
      <AddUserModal
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
        onSave={handleSaveUser}
        userToEdit={userToEdit}
      />
      <AddRoleModal
        isOpen={isRoleModalOpen}
        onClose={() => setIsRoleModalOpen(false)}
        onSave={handleSaveRole}
        roleToEdit={roleToEdit}
      />
    </div>
  );
};

export default App;
