import React from "react";
import { BarChart3, PieChart as PieChartIcon, TrendingUp, Users, Clock, Download, FileText, DollarSign, Heart } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from "recharts";
const barData = [{
  country: "Serbia",
  reports: 120,
  approved: 100,
  pending: 20
}, {
  country: "Skopje",
  reports: 80,
  approved: 65,
  pending: 15
}, {
  country: "Sri Lanka",
  reports: 200,
  approved: 160,
  pending: 40
}];
const pieData = [{
  name: "Education",
  value: 35
}, {
  name: "Health",
  value: 25
}, {
  name: "Financial",
  value: 20
}, {
  name: "Social",
  value: 20
}];
const developmentData = [{
  month: "Jan",
  academic: 75,
  social: 65,
  health: 80
}, {
  month: "Feb",
  academic: 78,
  social: 68,
  health: 82
}, {
  month: "Mar",
  academic: 80,
  social: 72,
  health: 85
}, {
  month: "Apr",
  academic: 85,
  social: 75,
  health: 88
}, {
  month: "May",
  academic: 88,
  social: 80,
  health: 90
}, {
  month: "Jun",
  academic: 90,
  social: 85,
  health: 92
}];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
export const Statistics = () => {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Statistics</h1>
        <div className="flex space-x-3">
          <select className="border rounded-md px-3 py-2">
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last 12 months</option>
          </select>
          <button className="flex items-center px-4 py-2 border rounded-md text-gray-600">
            <Download className="w-5 h-5 mr-2" />
            Export Report
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm">Total Reports</h3>
            <FileText className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-2xl font-semibold">1,234</p>
          <p className="text-sm text-green-500 flex items-center mt-2">
            <TrendingUp className="w-4 h-4 mr-1" />
            +12.5% from last month
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm">Response Time</h3>
            <Clock className="w-5 h-5 text-yellow-500" />
          </div>
          <p className="text-2xl font-semibold">4.2h</p>
          <p className="text-sm text-green-500 flex items-center mt-2">
            <TrendingUp className="w-4 h-4 mr-1" />
            -0.5h improvement
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm">Aid Approvals</h3>
            <DollarSign className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-2xl font-semibold">92%</p>
          <p className="text-sm text-green-500 flex items-center mt-2">
            <TrendingUp className="w-4 h-4 mr-1" />
            +5% success rate
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm">Program Success</h3>
            <Heart className="w-5 h-5 text-red-500" />
          </div>
          <p className="text-2xl font-semibold">88%</p>
          <p className="text-sm text-green-500 flex items-center mt-2">
            <TrendingUp className="w-4 h-4 mr-1" />
            +3% improvement
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">
            Reports by Country
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="approved" fill="#0088FE" name="Approved" />
                <Bar dataKey="pending" fill="#FFBB28" name="Pending" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">Case Categories</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value" label>
                  {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-4">
            Child Development Tracking
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={developmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="academic" stroke="#0088FE" name="Academic Progress" />
                <Line type="monotone" dataKey="social" stroke="#00C49F" name="Social Integration" />
                <Line type="monotone" dataKey="health" stroke="#FFBB28" name="Health Status" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>;
};