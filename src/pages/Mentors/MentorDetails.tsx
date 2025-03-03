import React, { Children } from "react";
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Users, Edit, FileText, Clock } from "lucide-react";
import { Link } from "react-router-dom";
export const MentorDetails = () => {
  const mentor = {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1234567890",
    country: "Serbia",
    status: "Active",
    type: "Paid",
    background: "Child Psychology",
    experience: "5 years",
    assignedChildren: [{
      id: 1,
      name: "Sarah Johnson",
      age: 8
    }, {
      id: 2,
      name: "Mike Davis",
      age: 10
    }, {
      id: 3,
      name: "Emma Wilson",
      age: 7
    }],
    nextCall: "2023-06-20",
    recentReports: [{
      id: 1,
      child: "Sarah Johnson",
      date: "2023-06-15",
      type: "Monthly Report"
    }, {
      id: 2,
      child: "Mike Davis",
      date: "2023-06-14",
      type: "Progress Report"
    }]
  };
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/mentors" className="text-gray-500 hover:text-gray-700">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900">
            Mentor Profile
          </h1>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center">
          <Edit className="w-4 h-4 mr-2" />
          Edit Profile
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-semibold">
                  {mentor.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {mentor.name}
                  </h2>
                  <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {mentor.country}
                    </span>
                    <span>•</span>
                    <span>{mentor.background}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {mentor.status}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {mentor.type}
                </span>
              </div>
            </div>
          </div>
          {/* Assigned Children */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Assigned Children
            </h3>
            <div className="divide-y divide-gray-200">
              {mentor.assignedChildren.map(child => <div key={child.id} className="py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium">
                      {child.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        {child.name}
                      </p>
                      <p className="text-sm text-gray-500">Age: {child.age}</p>
                    </div>
                  </div>
                  <Link to={`/children/${child.id}`} className="text-blue-500 text-sm">
                    View Profile
                  </Link>
                </div>)}
            </div>
          </div>
          {/* Recent Reports */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Recent Reports
            </h3>
            <div className="space-y-4">
              {mentor.recentReports.map(report => <div key={report.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {report.type}
                      </p>
                      <p className="text-sm text-gray-500">{report.child}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{report.date}</span>
                </div>)}
            </div>
          </div>
        </div>
        {/* Sidebar Information */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-gray-900">{mentor.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-gray-900">{mentor.phone}</span>
              </div>
            </div>
          </div>
          {/* Schedule */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Schedule</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Next Call
                </label>
                <p className="mt-1 flex items-center text-gray-900">
                  <Calendar className="w-4 h-4 mr-2" />
                  {mentor.nextCall}
                </p>
              </div>
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Call
              </button>
            </div>
          </div>
          {/* Statistics */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Statistics
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Experience
                </label>
                <p className="mt-1 flex items-center text-gray-900">
                  <Clock className="w-4 h-4 mr-2" />
                  {mentor.experience}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Assigned Children
                </label>
                <p className="mt-1 flex items-center text-gray-900">
                  <Users className="w-4 h-4 mr-2" />
                  {mentor.assignedChildren.length} children
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};