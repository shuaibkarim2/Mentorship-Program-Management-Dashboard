import React, { Children } from "react";
import { Link, useLocation } from "react-router-dom";
import { Users, ClipboardList, Calendar, BarChart3, Bell, Settings, LogOut, Heart, UserPlus } from "lucide-react";
export const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50";
  };
  return <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-xl font-semibold text-gray-900">
            Mentor Program
          </h1>
        </div>
        <nav className="mt-2 px-3">
          <Link to="/dashboard" className={`flex items-center px-3 py-2 rounded-md mb-1 ${isActive("/dashboard")}`}>
            <Users className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link to="/children" className={`flex items-center px-3 py-2 rounded-md mb-1 ${isActive("/children")}`}>
            <Heart className="w-5 h-5 mr-3" />
            Children
          </Link>
          <Link to="/mentors" className={`flex items-center px-3 py-2 rounded-md mb-1 ${isActive("/mentors")}`}>
            <UserPlus className="w-5 h-5 mr-3" />
            Mentors
          </Link>
          <Link to="/reports" className={`flex items-center px-3 py-2 rounded-md mb-1 ${isActive("/reports")}`}>
            <ClipboardList className="w-5 h-5 mr-3" />
            Reports
          </Link>
          <Link to="/schedule" className={`flex items-center px-3 py-2 rounded-md mb-1 ${isActive("/schedule")}`}>
            <Calendar className="w-5 h-5 mr-3" />
            Schedule
          </Link>
          <Link to="/statistics" className={`flex items-center px-3 py-2 rounded-md mb-1 ${isActive("/statistics")}`}>
            <BarChart3 className="w-5 h-5 mr-3" />
            Statistics
          </Link>
        </nav>
        <div className="absolute bottom-0 w-64 border-t border-gray-200">
          <div className="p-4">
            <Link to="/notifications" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
              <Bell className="w-5 h-5 mr-3" />
              Notifications
            </Link>
            <Link to="/settings" className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </Link>
            <button className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md w-full">
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>;
};