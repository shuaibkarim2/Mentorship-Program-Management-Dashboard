import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
export const MentorRegistration = () => {
  return <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/mentors" className="text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-semibold text-gray-900">
          Register New Mentor
        </h1>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Select country</option>
                  <option>Serbia</option>
                  <option>Skopje</option>
                  <option>Sri Lanka</option>
                </select>
              </div>
            </div>
          </div>
          {/* Professional Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">
              Professional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Employment Type
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Select type</option>
                  <option>Paid</option>
                  <option>Volunteer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Years of Experience
                </label>
                <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Professional Background
                </label>
                <textarea rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Describe your relevant experience and qualifications..." />
              </div>
            </div>
          </div>
          {/* Assignments */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">Assignments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Maximum Case Load
                </label>
                <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Preferred Age Group
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Select age group</option>
                  <option>5-8 years</option>
                  <option>9-12 years</option>
                  <option>13-16 years</option>
                  <option>All ages</option>
                </select>
              </div>
            </div>
          </div>
          {/* Additional Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">
              Additional Information
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Special Skills or Qualifications
              </label>
              <textarea rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="List any special skills, certifications, or qualifications..." />
            </div>
          </div>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
          <Link to="/mentors" className="px-4 py-2 border rounded-md text-gray-600">
            Cancel
          </Link>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Register Mentor
          </button>
        </div>
      </div>
    </div>;
};