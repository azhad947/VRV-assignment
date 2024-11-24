import React, { useState } from 'react';
import Modal from './Modal';

const AddUserModal = ({ isOpen, onClose, onSave, userToEdit }) => {
  const [name, setName] = useState(userToEdit?.name || '');
  const [email, setEmail] = useState(userToEdit?.email || '');
  const [roles, setRoles] = useState(userToEdit?.roles || []);
  const [status, setStatus] = useState(userToEdit?.status || 'Active');

  const handleSubmit = () => {
    const userData = { id: userToEdit?.id || Date.now(), name, email, roles, status };
    onSave(userData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={userToEdit ? 'Edit User' : 'Add User'}>
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Roles (comma separated)"
          value={roles.join(', ')}
          onChange={(e) => setRoles(e.target.value.split(',').map((role) => role.trim()))}
          className="border px-3 py-2 rounded"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </Modal>
  );
};

export default AddUserModal;
