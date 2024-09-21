"use client";
import Header from '@/components/Navbar';
import { Login } from '@/services/user';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';


const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  //const router = useRouter(); // ทำไมมันไม่ถูก moute งงมาก

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // ป้องกันหน้า refresh

    try {
      const response = await Login(formData);
      if (response.status === 200) {
        alert('Login successful!');
        //router.push('/'); // ใช้ router.push 
      }
    } catch (error: any) {
      alert(`ล็อกอินไม่สำเร็จ: ${JSON.stringify(error.response.data.message)}`);
    }
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Edit Budget Request</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-lg font-medium ">
                  username
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
                />
            
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  className="block text-lg font-medium "
                >
                  password
                </label>
                <input
                   type="text"
                   id="password"
                   name="password"
                   value={formData.password}
                   onChange={handleChange}
                   required
                   className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
                />
              </div>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit
                  </button>
                <Link href="/">
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">Back</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default LoginPage;