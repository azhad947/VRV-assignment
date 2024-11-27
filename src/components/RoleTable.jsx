import React from "react";

const RoleTable = ({ roles, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-scroll sm:overflow-x-auto">
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
            <tr key={role.id} className="hover:bg-gray-100  dark:hover:bg-gray-700">
              <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 text-left">
                {role.name}
              </td>
              <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 text-left">
                {role.permissions.join(", ")}
              </td>
              <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 text-center">
                <button
                  onClick={() => onEdit(role)}
                  className=" bg-green-500 hover:bg-green-600 text-white px-2 mb-1 sm:py-1 sm:px-3 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(role.id)}
                  className=" bg-red-500 hover:bg-red-600 text-white px-2 mb-1 sm:py-1 sm:px-3 rounded"
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
