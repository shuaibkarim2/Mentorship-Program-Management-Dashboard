import React from "react";
import { AlertTriangle, Users, FileText, Calendar, ArrowRight } from "lucide-react";
const DashboardCard = ({
  title,
  value,
  icon: Icon,
  color
}: any) => <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
    <div className="flex items-center">
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="ml-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  </div>;
const UrgentCase = ({
  name,
  issue,
  time
}: any) => <div className="flex items-center justify-between p-4 border-b">
    <div className="flex items-center">
      <AlertTriangle className="w-5 h-5 text-red-500 mr-3" />
      <div>
        <p className="font-medium text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">{issue}</p>
      </div>
    </div>
    <div className="text-sm text-gray-400">{time}</div>
  </div>;
export const Dashboard = () => {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="flex space-x-3">
          <select className="border rounded-md px-3 py-2 text-sm">
            <option>Serbia (200)</option>
            <option>Skopje (100)</option>
            <option>Sri Lanka (500)</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard title="Total Orphans" value="800" icon={Users} color="bg-blue-500" />
        <DashboardCard title="Pending Reports" value="12" icon={FileText} color="bg-yellow-500" />
        <DashboardCard title="Upcoming Calls" value="8" icon={Calendar} color="bg-green-500" />
        <DashboardCard title="Urgent Cases" value="3" icon={AlertTriangle} color="bg-red-500" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-gray-900">Urgent Cases</h2>
              <button className="text-blue-500 text-sm flex items-center">
                View all <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            <UrgentCase name="Sarah Johnson" issue="Medical attention needed" time="2h ago" />
            <UrgentCase name="Mike Smith" issue="Financial assistance required" time="3h ago" />
            <UrgentCase name="Emma Davis" issue="Educational support needed" time="5h ago" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-gray-900">Recent Activities</h2>
              <button className="text-blue-500 text-sm flex items-center">
                View all <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
          <div className="p-4 space-y-4">
            {[1, 2, 3, 4].map(i => <div key={i} className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600">
                    New report submitted for{" "}
                    <span className="font-medium text-gray-900">John Doe</span>
                  </p>
                  <p className="text-xs text-gray-400">30 minutes ago</p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};