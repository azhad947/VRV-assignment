import React from "react";

const RoleTable = ({ roles, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md rounded">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
              Role Name
            </th>
            <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
              Permissions
            </th>
            <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="hover:bg-gray-100">
              <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                {role.name}
              </td>
              <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                {role.permissions.join(", ")}
              </td>
              <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => onEdit(role)}
                  className="text-sm bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(role.id)}
                  className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleTable;
