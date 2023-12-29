'use client'

import React, { useState, useEffect, FC } from 'react';
import styles from './Users.module.css';

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
    // Include other relevant fields
  };
  // Other user fields
}

const Users = () =>{
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data as User[]));
  }, []);

  return (
    <div className="card mt-5 bg-white shadow-lg shadow-indigo-500/40 ">
      <div className={'overflow-x-auto'}>
        <table className={'table pb-6'}>
          <thead className="bg-indigo-800">
            <tr className="border-b border-gray-500 text-[25px]">
              <th className="text-white text-semibold">Name</th>
              <th className="text-white text-semibold">Email</th>
              <th className="text-white text-semibold">City</th>
              {/* Other headings */}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {users.map(user => (
              <tr key={user.id}>
                <td  className="text-slate-800 border-t-[1px] border-black border-solid">{user.name}</td>
                <td className="text-slate-800 border-t-[1px] border-black border-solid" >{user.email}</td>
                <td className="text-slate-800 border-t-[1px] border-black border-solid">{user.address.city}</td>
                {/* Other data */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;