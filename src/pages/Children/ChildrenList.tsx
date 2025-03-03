import React, { Children } from "react";
import { Plus, Search, Filter, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
export const ChildrenList = () => {
  const children = [{
    id: 1,
    name: "Sarah Johnson",
    age: 8,
    location: "Serbia",
    guardian: "Maria Johnson",
    status: "Active",
    healthStatus: "Good",
    educationalStatus: "Primary School"
  }
  // Add more mock data as needed
  ];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Children</h1>
        <Link to="/children/new" className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Register Child
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input type="text" placeholder="Search children..." className="pl-10 pr-4 py-2 border rounded-md w-full" />
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
                  Child Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guardian
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Health
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Education
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {children.map(child => <tr key={child.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/children/${child.id}`} className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          {child.name.charAt(0)}
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">
                          {child.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          Age: {child.age}
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {child.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {child.guardian}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {child.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {child.healthStatus}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {child.educationalStatus}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-500">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing 1 to 10 of 20 results
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border rounded-md text-sm">
                Previous
              </button>
              <button className="px-3 py-1 border rounded-md text-sm bg-blue-50 text-blue-600">
                1
              </button>
              <button className="px-3 py-1 border rounded-md text-sm">2</button>
              <button className="px-3 py-1 border rounded-md text-sm">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};