import React from "react";
import { ArrowLeft, Calendar, Clock, Users, Video, Phone } from "lucide-react";
import { Link } from "react-router-dom";
export const ScheduleCreate = () => {
  return <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/schedule" className="text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-semibold text-gray-900">
          Schedule New Call
        </h1>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 space-y-6">
          {/* Basic Call Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">Call Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Call Type
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Select type</option>
                  <option>Donor Call</option>
                  <option>Mentor Call</option>
                  <option>Guardian Call</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Communication Method
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Select method</option>
                  <option>Video Call</option>
                  <option>Phone Call</option>
                </select>
              </div>
            </div>
          </div>
          {/* Participants */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">Participants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Child
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Select child</option>
                  <option>Sarah Johnson</option>
                  <option>Mike Smith</option>
                  <option>Emma Davis</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Other Participant
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Select participant</option>
                  <option>John Smith (Mentor)</option>
                  <option>Robert Donor (Donor)</option>
                  <option>Maria Johnson (Guardian)</option>
                </select>
              </div>
            </div>
          </div>
          {/* Date and Time */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">Date & Time</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <input type="time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Duration
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>30 minutes</option>
                  <option>45 minutes</option>
                  <option>1 hour</option>
                  <option>1.5 hours</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Time Zone
                </label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>UTC+01:00 (CET)</option>
                  <option>UTC+02:00 (EET)</option>
                  <option>UTC+05:30 (IST)</option>
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
                Purpose of Call
              </label>
              <textarea rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Describe the purpose of this call..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Notes
              </label>
              <textarea rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Any additional notes or requirements..." />
            </div>
          </div>
        </div>
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
          <Link to="/schedule" className="px-4 py-2 border rounded-md text-gray-600">
            Cancel
          </Link>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Schedule Call
          </button>
        </div>
      </div>
    </div>;
};