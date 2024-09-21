"use client";
import Link from "next/link";
import React, { useState } from 'react';
import { Login } from '@/services/user'; 

function Header() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ฟังก์ชันจัดการการล็อกอิน
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await Login(formData);
      if (response.status === 200) {
        alert('Login successful!');
        setIsLoggedIn(true); // ตั้งค่าสถานะว่าล็อกอินแล้ว
      }
    } catch (error: any) {
      alert('ล็อกอินไม่สำเร็จ: ' + error.response.data.message);
    }
  };

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <nav className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold">
            Budget App
          </Link>
          <Link href="/add" className="text-sm">
            ขอตั้งงบประมาณ
          </Link>
        </nav>
        <div className="text-sm">
          {isLoggedIn ? (
            <span>{formData.username}</span>
          ) : (
            <form onSubmit={handleSubmit} className="inline-flex items-center space-x-2">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="p-1 border border-gray-300 rounded"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="p-1 border border-gray-300 rounded"
                required
              />
              <button
                type="submit"
                className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Login
              </button>
              <Link href="/signup" className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700">
                Signup
              </Link>
            </form>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;