import React from "react";
import { Bell, AlertTriangle, CheckCircle, Info } from "lucide-react";
const NotificationItem = ({
  icon: Icon,
  title,
  description,
  time,
  type
}: any) => <div className="p-4 hover:bg-gray-50">
    <div className="flex items-start">
      <div className={`p-2 rounded-lg ${type === "urgent" ? "bg-red-100" : type === "success" ? "bg-green-100" : "bg-blue-100"}`}>
        <Icon className={`w-5 h-5 ${type === "urgent" ? "text-red-500" : type === "success" ? "text-green-500" : "text-blue-500"}`} />
      </div>
      <div className="ml-3 flex-1">
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-xs text-gray-400 mt-1">{time}</p>
      </div>
    </div>
  </div>;
export const Notifications = () => {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Notifications</h1>
        <button className="text-blue-500 text-sm">Mark all as read</button>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">
              Recent Notifications
            </h2>
            <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
              12 New
            </span>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          <NotificationItem icon={AlertTriangle} title="Urgent Case: Medical Attention Required" description="Sarah Johnson needs immediate medical assistance." time="2 hours ago" type="urgent" />
          <NotificationItem icon={CheckCircle} title="Report Approved" description="Monthly report for John Doe has been approved." time="4 hours ago" type="success" />
          <NotificationItem icon={Info} title="New Message" description="You have a new message from the mentor coordinator." time="6 hours ago" type="info" />
          <NotificationItem icon={Bell} title="Upcoming Video Call" description="Scheduled video call with Emma Davis tomorrow at 2 PM." time="8 hours ago" type="info" />
        </div>
        <div className="p-4 border-t border-gray-200">
          <button className="text-blue-500 text-sm">
            View all notifications
          </button>
        </div>
      </div>
    </div>;
};