import React from "react";
import { ArrowLeft, Calendar, Mail, Phone, MapPin, Heart, Edit, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
export const ChildDetails = () => {
  const child = {
    id: 1,
    name: "Sarah Johnson",
    age: 8,
    gender: "Female",
    location: "Serbia",
    guardian: {
      name: "Maria Johnson",
      relationship: "Mother",
      contact: "+1234567890",
      email: "maria.j@example.com"
    },
    mentor: {
      name: "John Smith",
      contact: "+1234567891",
      email: "john.s@example.com"
    },
    status: "Active",
    healthStatus: "Good",
    educationalStatus: "Primary School",
    lastCheckup: "2023-06-15",
    nextCheckup: "2023-07-15"
  };
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/children" className="text-gray-500 hover:text-gray-700">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900">
            Child Profile
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
                  {child.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {child.name}
                  </h2>
                  <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                    <span>Age: {child.age}</span>
                    <span>•</span>
                    <span>{child.gender}</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {child.location}
                    </span>
                  </div>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {child.status}
              </span>
            </div>
          </div>
          {/* Health & Education Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Health Status
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Current Status
                  </label>
                  <p className="mt-1 text-gray-900">{child.healthStatus}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Last Checkup
                  </label>
                  <p className="mt-1 text-gray-900">{child.lastCheckup}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Next Checkup
                  </label>
                  <p className="mt-1 text-gray-900">{child.nextCheckup}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Educational Status
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Current Level
                  </label>
                  <p className="mt-1 text-gray-900">
                    {child.educationalStatus}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    School Performance
                  </label>
                  <p className="mt-1 text-gray-900">Above Average</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Attendance Rate
                  </label>
                  <p className="mt-1 text-gray-900">95%</p>
                </div>
              </div>
            </div>
          </div>
          {/* Recent Activities */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Recent Activities
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map(activity => <div key={activity} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <div>
                    <p className="text-gray-900">Monthly checkup completed</p>
                    <p className="text-sm text-gray-500">June 15, 2023</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        {/* Sidebar Information */}
        <div className="space-y-6">
          {/* Guardian Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Guardian Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Name
                </label>
                <p className="mt-1 text-gray-900">{child.guardian.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Relationship
                </label>
                <p className="mt-1 text-gray-900">
                  {child.guardian.relationship}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Contact
                </label>
                <div className="mt-1 space-y-2">
                  <p className="flex items-center text-gray-900">
                    <Phone className="w-4 h-4 mr-2" />
                    {child.guardian.contact}
                  </p>
                  <p className="flex items-center text-gray-900">
                    <Mail className="w-4 h-4 mr-2" />
                    {child.guardian.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Assigned Mentor */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Assigned Mentor
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Name
                </label>
                <p className="mt-1 text-gray-900">{child.mentor.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">
                  Contact
                </label>
                <div className="mt-1 space-y-2">
                  <p className="flex items-center text-gray-900">
                    <Phone className="w-4 h-4 mr-2" />
                    {child.mentor.contact}
                  </p>
                  <p className="flex items-center text-gray-900">
                    <Mail className="w-4 h-4 mr-2" />
                    {child.mentor.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-blue-50 text-blue-600 rounded-md flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Checkup
              </button>
              <button className="w-full px-4 py-2 bg-green-50 text-green-600 rounded-md flex items-center justify-center">
                <Heart className="w-4 h-4 mr-2" />
                Add Health Record
              </button>
              <button className="w-full px-4 py-2 bg-red-50 text-red-600 rounded-md flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Report Issue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};