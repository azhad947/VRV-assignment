import React, { useState } from 'react';
import Modal from './Modal';

const AddRoleModal = ({ isOpen, onClose, onSave, roleToEdit }) => {
  const [name, setName] = useState(roleToEdit?.name || '');
  const [permissions, setPermissions] = useState(roleToEdit?.permissions || []);

  const handleSubmit = () => {
    const roleData = { id: roleToEdit?.id || Date.now(), name, permissions };
    onSave(roleData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={roleToEdit ? 'Edit Role' : 'Add Role'}>
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Role Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Permissions (comma separated)"
          value={permissions.join(', ')}
          onChange={(e) => setPermissions(e.target.value.split(',').map((perm) => perm.trim()))}
          className="border px-3 py-2 rounded"
        />
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Save
        </button>
      </div>
    </Modal>
  );
};

export default AddRoleModal;
