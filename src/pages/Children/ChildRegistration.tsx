import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
export const ChildRegistration = () => {
  return <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/children" className="text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-semibold text-gray-900">
          Register New Child
        </h1>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900">
                Personal Information
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Age
                </label>
                <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Select location</option>
                  <option>Serbia</option>
                  <option>Skopje</option>
                  <option>Sri Lanka</option>
                </select>
              </div>
            </div>
            {/* Guardian Information */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900">
                Legal Guardian
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Guardian Name
                </label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Relationship
                </label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
            </div>
          </div>
          {/* Health and Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900">
                Health Status
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  General Condition
                </label>
                <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" rows={3}></textarea>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-900">
                Educational Status
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Current Education Level
                </label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  School Name
                </label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
            </div>
          </div>
          {/* Additional Information */}
          <div className="pt-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Additional Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Psychological Support Needs
                </label>
                <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" rows={3}></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Financial Situation
                </label>
                <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" rows={3}></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Additional Notes
                </label>
                <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" rows={3}></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
          <Link to="/children" className="px-4 py-2 border rounded-md text-gray-600">
            Cancel
          </Link>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Register Child
          </button>
        </div>
      </div>
    </div>;
};