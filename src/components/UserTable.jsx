const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-scroll">
      <table className="min-w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md rounded">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
              Name
            </th>
            <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
              Email
            </th>
            <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
              Role
            </th>
            <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
              Status
            </th>
            <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700  bg-gray-100 dark:bg-gray-900">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">{user.name}</td>
              <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">{user.email}</td>
              <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">{user.roles.join(', ')}</td>
              <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">{user.status}</td>
              <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex-col justify-between sm:flex-row sm:justify-between">
                <button className="bg-blue-500 dark:bg-blue-600 text-white px-2 mb-1 sm:py-1 sm:px-3 rounded mr-2" onClick={() => onEdit(user)}>
                  Edit
                </button>
                <button className="bg-red-500 dark:bg-red-600 text-white px-2  sm:py-1 sm:px-3 rounded" onClick={()=> onDelete(user.id)}>
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
export default UserTable;
