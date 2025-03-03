import React from "react";
import { User, Bell, Shield, Globe } from "lucide-react";
export const Settings = () => {
  return <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900 flex items-center">
              <User className="w-5 h-5 mr-2" />
              Profile Settings
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
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900 flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Notification Preferences
            </h2>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-blue-500" />
                <span className="ml-2 text-gray-700">Email notifications</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-blue-500" />
                <span className="ml-2 text-gray-700">Push notifications</span>
              </label>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Security
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Location Settings
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Serbia</option>
                <option>Skopje</option>
                <option>Sri Lanka</option>
              </select>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
          <button className="px-4 py-2 border rounded-md text-gray-600">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>;
};