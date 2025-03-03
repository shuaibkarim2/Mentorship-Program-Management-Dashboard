import React from "react";
import { ArrowLeft, Save } from "lucide-react";
import { Link } from "react-router-dom";
export const ReportSubmission = () => {
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/reports" className="text-gray-500 hover:text-gray-700">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900">New Report</h1>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 border rounded-md text-gray-600 flex items-center">
            <Save className="w-4 h-4 mr-2" />
            Save as Draft
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Submit Report
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Child Name
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
                Report Type
              </label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Regular Check-in</option>
                <option>Monthly Report</option>
                <option>Emergency Report</option>
                <option>Special Event</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Urgency Level
              </label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>Normal</option>
                <option>Important</option>
                <option>Urgent</option>
                <option>Emergency</option>
              </select>
            </div>
          </div>
          {/* Health Status */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">Health Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  General Condition
                </label>
                <textarea rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Describe the child's general health condition..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Recent Doctor Visits
                </label>
                <textarea rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="List any recent medical appointments..." />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nutrition Status
                </label>
                <textarea rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Describe eating habits and nutrition..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Physical Activities
                </label>
                <textarea rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="List sports and physical activities..." />
              </div>
            </div>
          </div>
          {/* Educational Progress */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">
              Educational Progress
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Academic Performance
                </label>
                <textarea rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Describe grades and academic achievements..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Attendance & Participation
                </label>
                <textarea rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Report on school attendance and class participation..." />
              </div>
            </div>
          </div>
          {/* Emotional Development */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">
              Emotional Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mental State
                </label>
                <textarea rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Describe emotional wellbeing and mental state..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Social Integration
                </label>
                <textarea rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Describe social interactions and relationships..." />
              </div>
            </div>
          </div>
          {/* Financial Situation */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">
              Financial Situation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Current Needs
                </label>
                <textarea rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="List current financial needs..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Existing Support
                </label>
                <textarea rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Describe current financial support..." />
              </div>
            </div>
          </div>
          {/* Special Events */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">
              Special Events
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Notable Events or Achievements
              </label>
              <textarea rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Describe any special events, achievements, or concerns..." />
            </div>
          </div>
          {/* Additional Notes */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">
              Additional Notes
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Other Observations
              </label>
              <textarea rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Any additional notes or observations..." />
            </div>
          </div>
        </div>
      </div>
    </div>;
};