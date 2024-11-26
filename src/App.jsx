import React, { useState } from "react";
import UserTable from "./components/UserTable";
import RoleTable from "./components/RoleTable";
import AddUserModal from "./components/AddUserModal";
import AddRoleModal from "./components/AddRoleModal";

import DarkLightToggle from "./components/DarkLight.jsx";
import toast, { Toaster } from "react-hot-toast";

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
    {
      id: 3,
      name: "Charlie",
      email: "charlie@example.com",
      roles: ["Viewer"],
      status: "Active",
    },
    {
      id: 4,
      name: "Diana",
      email: "diana@example.com",
      roles: ["Editor"],
      status: "Inactive",
    },
    {
      id: 5,
      name: "Eve",
      email: "eve@example.com",
      roles: ["Admin", "Editor"],
      status: "Active",
    },
    {
      id: 6,
      name: "Frank",
      email: "frank@example.com",
      roles: ["Viewer"],
      status: "Active",
    },
    {
      id: 7,
      name: "Grace",
      email: "grace@example.com",
      roles: ["Editor"],
      status: "Inactive",
    },
    {
      id: 8,
      name: "Henry",
      email: "henry@example.com",
      roles: ["Admin"],
      status: "Active",
    },
  ]);
  

  const [roles, setRoles] = useState([
    {
      id: "admin",
      name: "Admin",
      permissions: ["Manage Users", "View Reports", "Edit Settings"],
    },
    {
      id: "editor",
      name: "Editor",
      permissions: ["Edit Content", "View Reports"],
    },
    {
      id: "viewer",
      name: "Viewer",
      permissions: ["View Reports"],
    },
    {
      id: "super-admin",
      name: "Super Admin",
      permissions: [
        "Manage Users",
        "View Reports",
        "Edit Settings",
        "Access Logs",
        "Manage Roles",
      ],
    },
  ]);
  

  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  
  const [loading, setLoading] = useState(true)

  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [roleToEdit, setRoleToEdit] = useState(null);


  const handleSaveUser = (user) => {
    try {
     
      
      setUsers((prevUsers) =>
      prevUsers.some((u) => u.id === user.id)
        ? prevUsers.map((u) => (u.id === user.id ? user : u))
        : [...prevUsers, user] 

        

    );
    toast.success("User saved successfully")
    } catch (error) {
      console.error('Error saving user:', error);
    }
    
    
  };

  const handleSaveRole = (role) => {
    try {
     
       setRoles((prevRoles) =>
      prevRoles.some((r) => r.id === role.id)
        ? prevRoles.map((r) => (r.id === role.id ? role : r))
        : [...prevRoles, role]
    );
    toast.success("Role saved successfully")
    } catch (error) {
      console.error('Error saving role:', error);
      
    }
   
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-6">
          Role-Based Access Control (RBAC){" "}
        </h1>

        <DarkLightToggle />
      </div>

      <section className="mb-10 ">
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
          onEdit={(id) => {
            const userToEdit = users.find((user) => user.id === id);
            setUserToEdit(userToEdit);
            
            setIsUserModalOpen(true);
          }}
          onDelete={(id) => setUsers(users.filter((u) => u.id !== id))}
        />
      </section>

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

      <AddUserModal
        isOpen={isUserModalOpen}
        onClose={() => {
          setIsUserModalOpen(false);
          setUserToEdit(null);
        }}
        onSave={handleSaveUser}
        userToEdit={userToEdit}
      />
      <AddRoleModal
       key={roleToEdit?.id || 'new'}  
        isOpen={isRoleModalOpen}
        onClose={() => {
          setIsRoleModalOpen(false);
          setRoleToEdit(null);
        }}
        
        onSave={handleSaveRole}
        roleToEdit={roleToEdit}
      />
      <Toaster />
    </div>
  );
};

export default App;
