import React from 'react';
import Dashboard from '../components/Dashboard';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Admin Dashboard</h1>
      <div className="w-full max-w-2xl">
        <Dashboard />
      </div>
    </div>
  );
};

export default Admin;
