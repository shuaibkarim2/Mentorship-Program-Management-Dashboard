import React from "react";
import { Search, Filter, Plus } from "lucide-react";
import { Link } from "react-router-dom";
export const Reports = () => {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
        <Link to="/reports/new" className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          New Report
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input type="text" placeholder="Search reports..." className="pl-10 pr-4 py-2 border rounded-md w-full" />
            </div>
            <button className="px-4 py-2 border rounded-md flex items-center text-gray-600">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Child Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Country
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Urgency
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map(i => <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/reports/${i}`} className="group">
                      <div className="font-medium text-gray-900 group-hover:text-blue-600">
                        John Doe
                      </div>
                      <div className="text-sm text-gray-500">ID: #1234</div>
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Monthly Check-in
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2023-06-01
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Serbia
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Urgent
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing 1 to 5 of 50 results
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border rounded-md text-sm">
                Previous
              </button>
              <button className="px-3 py-1 border rounded-md text-sm bg-blue-50 text-blue-600">
                1
              </button>
              <button className="px-3 py-1 border rounded-md text-sm">2</button>
              <button className="px-3 py-1 border rounded-md text-sm">3</button>
              <button className="px-3 py-1 border rounded-md text-sm">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};