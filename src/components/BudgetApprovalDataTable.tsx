import { formatDecimal } from "@/lib/format-decimal";

function BudgetApprovalDataTable() {
  const budgetRequests = [
    { id: 1, title: "Office Supplies", quantity: 1, amount: 500 },
    { id: 2, title: "Marketing Campaign", quantity: 2, amount: 2000 },
    // Add more budget requests as needed
  ];

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr className="">
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
            Id
          </th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
            Title
          </th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
            Budget
          </th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {budgetRequests.map((request) => (
          <tr key={request.id}>
            <td className="px-6 py-4 whitespace-nowrap space-x-2">
              <button className="px-4 py-2 disabled:bg-green-300 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Approve
              </button>
              <button className="px-4 py-2 disabled:bg-red-300 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Reject
              </button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right">
              {request.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="font-bold">{request.title}</span> x{" "}
              {request.quantity} Units
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right">
              {formatDecimal(request.amount)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">PENDING</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BudgetApprovalDataTable;
