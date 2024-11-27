import { useMemo, useState } from "react";
import { 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight 
} from 'lucide-react';
const UserTable = ({ users, onEdit, onDelete }) => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [filterRole, setFilterRole] = useState("");
  // const [filterStatus, setFilterStatus] = useState("");
  // const [sortConfig, setSortConfig] = useState({ key: "name", direction: "asc" });
  // return (
  //   <div className="overflow-x-scroll sm:overflow-x-auto">
  //     <table className="min-w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md rounded">
  //       <thead>
  //         <tr>
  //           <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
  //             Name
  //           </th>
  //           <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
  //             Email
  //           </th>
  //           <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
  //             Role
  //           </th>
  //           <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
  //             Status
  //           </th>
  //           <th className="px-6 py-3 border-b border-gray-200 dark:border-gray-700  bg-gray-100 dark:bg-gray-900">
  //             Actions
  //           </th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {users.map((user) => (
  //           <tr key={user.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 ">
  //             <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 text-center">{user.name}</td>
  //             <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 text-center">{user.email}</td>
  //             <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 text-center">{user.roles.join(', ')}</td>
  //             <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 text-center">{user.status}</td>
  //             <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex-col justify-between sm:flex-row sm:justify-between text-center">
  //               <button className="bg-blue-500 dark:bg-blue-600 text-white px-2 mb-1 sm:py-1 sm:px-3 rounded mr-2" onClick={() => onEdit(user.id)}>
  //                 Edit
  //               </button>
  //               <button className="bg-red-500 dark:bg-red-600 text-white px-2  sm:py-1 sm:px-3 rounded" onClick={()=> onDelete(user.id)}>
  //                 Delete
  //               </button>
  //             </td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ 
    key: 'name', 
    direction: 'asc' 
  });
  const itemsPerPage = 5;


  const filteredUsers = useMemo(() => {
    let result = users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (statusFilter !== 'All') {
      result = result.filter(user => user.status === statusFilter);
    }

    return result.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [users, searchTerm, statusFilter, sortConfig]);

  
  const paginatedUsers = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return filteredUsers.slice(firstPageIndex, lastPageIndex);
  }, [filteredUsers, currentPage]);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      
      <div className="p-4 bg-gray-50 dark:bg-gray-900 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-grow w-full md:w-auto">
          <input 
            type="text" 
            placeholder="Search users..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border dark:border-gray-600 rounded-lg dark:bg-gray-900 dark:text-white"
          />
          <Search 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            size={20} 
          />
        </div>

        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white"
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th 
                className="px-6 py-3 border-b text-left cursor-pointer border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900"
                onClick={() => handleSort('name')}
              >
                Name 
                {sortConfig.key === 'name' && 
                  (sortConfig.direction === 'asc' ? ' ↑' : ' ↓')}
              </th>
              <th 
                className="px-6 py-3 border-b text-left cursor-pointer border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900"
                onClick={() => handleSort('email')}
              >
                Email
                {sortConfig.key === 'email' && 
                  (sortConfig.direction === 'asc' ? ' ↑' : ' ↓')}
              </th>
              <th className="px-6 py-3 border-b text-left  border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">Roles</th>
              <th className="px-6 py-3 border-b text-left  border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">Status</th>
              <th className="px-6 py-3 border-b text-center  border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map(user => (
              <tr 
                key={user.id} 
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">
                  {user.roles.join(', ')}
                </td>
                <td className="px-4 py-3">
                  <span 
                    className={`px-2 py-1 rounded-full text-xs ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex-col justify-between sm:flex-row sm:justify-between text-center">
                <button className="bg-blue-500 dark:bg-blue-600 text-white px-2 mb-1 sm:py-1 sm:px-3 rounded mr-2" onClick={() => onEdit(user.id)}>
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

      
      <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => setCurrentPage(1)} 
            disabled={currentPage === 1}
            className="p-2 disabled:opacity-50"
          >
            <ChevronsLeft />
          </button>
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
            disabled={currentPage === 1}
            className="p-2 disabled:opacity-50"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
            disabled={currentPage === totalPages}
            className="p-2 disabled:opacity-50"
          >
            <ChevronRight />
          </button>
          <button 
            onClick={() => setCurrentPage(totalPages)} 
            disabled={currentPage === totalPages}
            className="p-2 disabled:opacity-50"
          >
            <ChevronsRight />
          </button>
        </div>
      </div>
    </div>
)};
export default UserTable;
