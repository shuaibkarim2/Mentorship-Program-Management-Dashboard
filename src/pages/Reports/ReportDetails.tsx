import React from "react";
import { ArrowLeft, Calendar, Clock, User, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
export const ReportDetails = () => {
  return <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/reports" className="text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-semibold text-gray-900">Report Details</h1>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Report Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Monthly Report - Sarah Johnson
              </h2>
              <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  June 15, 2023
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  2:30 PM
                </span>
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  Submitted by: John Smith
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Urgent
                </span>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Edit Report
            </button>
          </div>
        </div>
        {/* Report Content */}
        <div className="p-6 space-y-8">
          {/* Health Status */}
          <section className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Health Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700">
                  General Condition
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Good overall health, regular check-ups maintained.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700">
                  Doctor Visits
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Regular dental check-up completed on June 10th.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700">Nutrition</h4>
                <p className="mt-1 text-sm text-gray-600">
                  Balanced diet, good eating habits.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700">
                  Physical Activities
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Regular participation in school sports.
                </p>
              </div>
            </div>
          </section>
          {/* Educational Progress */}
          <section className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">
              Educational Progress
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700">
                  Academic Performance
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Above average performance in mathematics and science.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700">
                  Attendance
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  95% attendance rate this month.
                </p>
              </div>
            </div>
          </section>
          {/* Emotional Development */}
          <section className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">
              Emotional Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700">
                  Mental State
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Generally positive attitude, some anxiety about upcoming
                  exams.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700">
                  Social Integration
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Well integrated with peers, participates in group activities.
                </p>
              </div>
            </div>
          </section>
          {/* Financial Situation */}
          <section className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">
              Financial Situation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700">
                  Current Needs
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Additional support needed for school supplies and winter
                  clothing.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700">
                  Existing Support
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Currently receiving monthly educational support and meal
                  assistance.
                </p>
              </div>
            </div>
          </section>
          {/* Special Events */}
          <section className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">
              Special Events
            </h3>
            <p className="text-sm text-gray-600">
              Won first prize in school science fair project.
            </p>
          </section>
          {/* Additional Notes */}
          <section className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">
              Additional Notes
            </h3>
            <p className="text-sm text-gray-600">
              Showing great improvement in social confidence. Recommend
              continued encouragement in academic pursuits.
            </p>
          </section>
        </div>
      </div>
    </div>;
};