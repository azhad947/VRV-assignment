import React, { useState } from 'react';
import Modal from './Modal';
import toast from 'react-hot-toast';
import { Loader } from 'lucide-react';

const AddRoleModal = ({ isOpen, onClose, onSave, roleToEdit }) => {
  const [name, setName] = useState(roleToEdit?.name || '');
  const [permissions, setPermissions] = useState(roleToEdit?.permissions || []);

  const handleSubmit = () => {
    const roleData = { id: roleToEdit?.id || Date.now(), name, permissions };
    onSave(roleData);
    onClose();
  };
 
  const isFormValid = name && permissions.length > 0 && !permissions.includes("");
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={roleToEdit ? 'Edit Role' : 'Add Role'}>
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Role Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-2 rounded dark:bg-black"
        />
        <input
          type="text"
          placeholder="Permissions (comma separated)"
          value={permissions.join(',')}
          onChange={(e) => setPermissions(e.target.value.split(',').map((perm) => perm.trim()))}
          className="border px-3 py-2 rounded dark:bg-black"
        />
              {  !isFormValid ?  <button
          onClick={()=> toast.error("Fill All The Fields")}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 "

        >
          <Loader className=' animate-spin mx-auto ' size={24} />
        </button>
          : <button
          onClick={handleSubmit}
          className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 `}

        >
          Save
        </button>}
      </div>
    </Modal>
  );
};

export default AddRoleModal;
