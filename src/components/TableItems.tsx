'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Eraser, Pencil } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


interface Item {
  id: number;
  title: string;
  amount: number;
  quantity: number;
  status: string;
  owner_id: number;
}

const Page: React.FC = () => {
const [items, setItems] = useState<Item[]>([]);
const [filteredItems, setFilteredItems] = useState<Item[]>([]);
const [loading, setLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);
const [filter, setFilter] = useState<string>('');
const [statusFilter, setStatusFilter] = useState<string>('');
const [selectedItems, setSelectedItems] = useState<number[]>([]);
const [showSelectedItems, setShowSelectedItems] = useState<boolean>(false);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = useRouter();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/items`,{withCredentials: true});
        const itemslist = response.data.data;

        if (itemslist) {
          setItems(itemslist);
          setFilteredItems(itemslist);
        } else {
          setError('Unexpected response format');
        }
      } catch (error) {
        setError('Failed to fetch items');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    let results = items;

    if (filter) {
      results = results.filter(item =>
        item.title.toLowerCase().includes(filter.toLowerCase())
      );
    }

    if (statusFilter) {
      results = results.filter(item =>
        item.status.toLowerCase() === statusFilter.toLowerCase()
      );
    }

    setFilteredItems(results);
  }, [filter, statusFilter, items]);

  const formatDecimal = (amount: number): string => {
    return amount.toFixed(2);
  };

  const handleSelectItem = (id: number) => {
    setSelectedItems(prevSelectedItems =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter(itemId => itemId !== id)
        : [...prevSelectedItems, id]
    );
  };

  const handleDeleteSelected = () => {
    if (selectedItems.length === 0) return;
    setShowSelectedItems(true);
  };

  const handleDeleteItem = async (id: number) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`,{withCredentials: true});
      setItems(items.filter(item => item.id !== id));
      setFilteredItems(filteredItems.filter(item => item.id !== id));
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } catch (error) {
      setError('Failed to delete item');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
        <div className="overflow-x-auto p-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search by title..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Statuses</option>
              <option value="PENDING">PENDING</option>
              <option value="APPROVED">APPROVED</option>
            </select>
          </div>
          <button
            onClick={handleDeleteSelected}
            className="mb-4 px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600"
          >
            Delete Selected
          </button>
          {showSelectedItems && (
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Selected Items for Deletion</h3>
        <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((id) => {
              const item = items.find(item => item.id === id);
              return (
                <tr key={id} className="hover:bg-gray-100 transition-colors">
                  <td className="px-6 py-4 border">{item?.title ?? "N/A"}</td>
                  <td className="px-6 py-4 border">{item?.amount ?? "N/A"}</td>
                  <td className="px-6 py-4 border">{item?.quantity ?? "N/A"}</td>
                  <td className="px-6 py-4 border">{item?.status ?? "N/A"}</td>
                  <td className="px-6 py-4 border">
                    <button
                      onClick={() => handleDeleteItem(id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )}

    {/* Full Items Table */}
    <table className="min-w-full bg-white divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Select</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner ID</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {filteredItems.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap">
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleSelectItem(item.id)}
                className="rounded focus:ring-2 focus:ring-indigo-500"
              />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center space-x-4">
                <Link href={`/Edit/${item.id}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Pencil className="w-5 h-5" />
                  <span className="sr-only">Edit</span>
                </Link>
                <Link href={`/Delete/${item.id}`} className="text-gray-600 hover:text-red-600 transition-colors">
                  <Eraser className="w-5 h-5" />
                  <span className="sr-only">Delete</span>
                </Link>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
            <td className="px-6 py-4 whitespace-nowrap">{formatDecimal(item.amount)}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.owner_id}</td>
          </tr>
        ))}
      </tbody>
    </table>

   
    </div>
  );
};

export default Page;
