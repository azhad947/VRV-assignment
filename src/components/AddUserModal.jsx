import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import { Loader } from 'lucide-react';
import toast from 'react-hot-toast';

const AddUserModal = ({ isOpen, onClose, onSave, userToEdit }) => {
  const [name, setName] = useState ('');
  const [email, setEmail] = useState('');
  const [roles, setRoles] = useState([]);
  const [status, setStatus] = useState( 'Active');
 
  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name);
      setEmail(userToEdit.email);
      setRoles(userToEdit.roles);
      setStatus(userToEdit.status);
    } else {
      
      setName('');
      setEmail('');
      setRoles([]);
      setStatus('Active');
    }
  }, [userToEdit]);

  const handleSubmit = () => {   
    try {
    const userData = { id: userToEdit?.id || Date.now(), name, email, roles, status };
    onSave(userData);
    onClose();
   
    
    
    } catch (error) {
      console.log(error);
    }
    
  };
  const isFormValid = name && email && roles.length > 0  && !roles.includes("");
 console.log(isFormValid);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={userToEdit ? 'Edit User' : 'Add User'}>
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-2 rounded dark:bg-black"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-3 py-2 rounded dark:bg-black"
        />
        <input
          type="text"
          placeholder="Roles (comma separated)"
          value={roles.join(',')}
          onChange={(e) => setRoles(e.target.value.split(',').map((role) => role.trim()))}
          className="border px-3 py-2 rounded dark:bg-black"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border px-3 py-2 rounded dark:bg-black"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
       {  !isFormValid ?  <button
          onClick={()=> toast.error("Fill All The Fields")}
          className="bg-blue-500  text-white py-2 px-4 rounded hover:bg-blue-600 "

        >
          <Loader className=' animate-spin mx-auto ' size={24} />
        </button>
          : <button
          onClick={handleSubmit}
          className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 
              `}

        >
          Save
        </button>}
      </div>
    </Modal>
  );
};

export default AddUserModal;
