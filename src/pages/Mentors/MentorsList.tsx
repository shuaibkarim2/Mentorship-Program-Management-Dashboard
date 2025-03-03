import React, { Children } from "react";
import { Plus, Search, Filter, MoreVertical, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
export const MentorsList = () => {
  const mentors = [{
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1234567890",
    country: "Serbia",
    status: "Active",
    type: "Paid",
    assignedChildren: 12,
    experience: "5 years",
    background: "Child Psychology"
  }, {
    id: 2,
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    phone: "+1234567891",
    country: "Sri Lanka",
    status: "Active",
    type: "Volunteer",
    assignedChildren: 8,
    experience: "3 years",
    background: "Social Work"
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Mentors</h1>
        <Link to="/mentors/new" className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Add Mentor
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input type="text" placeholder="Search mentors..." className="pl-10 pr-4 py-2 border rounded-md w-full" />
            </div>
            <select className="border rounded-md px-3 py-2">
              <option value="">All Countries</option>
              <option>Serbia</option>
              <option>Skopje</option>
              <option>Sri Lanka</option>
            </select>
            <select className="border rounded-md px-3 py-2">
              <option value="">All Types</option>
              <option>Paid</option>
              <option>Volunteer</option>
            </select>
            <button className="px-4 py-2 border rounded-md flex items-center text-gray-600">
              <Filter className="w-5 h-5 mr-2" />
              More Filters
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mentor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned Children
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mentors.map(mentor => <tr key={mentor.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/mentors/${mentor.id}`} className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                          {mentor.name.charAt(0)}
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">
                          {mentor.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {mentor.background}
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <Mail className="w-4 h-4 mr-1" />
                      {mentor.email}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Phone className="w-4 h-4 mr-1" />
                      {mentor.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      {mentor.country}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${mentor.type === "Paid" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}`}>
                      {mentor.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {mentor.assignedChildren} children
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {mentor.status}
                    </span>
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
              Showing 1 to 2 of 2 results
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border rounded-md text-sm">
                Previous
              </button>
              <button className="px-3 py-1 border rounded-md text-sm bg-blue-50 text-blue-600">
                1
              </button>
              <button className="px-3 py-1 border rounded-md text-sm">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};