import React, { useState } from "react";
import { Calendar as CalendarIcon, Clock, Video, Phone, Plus, Users, Download } from "lucide-react";
export const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showNewCallModal, setShowNewCallModal] = useState(false);
  const upcomingCalls = [{
    type: "donor",
    name: "Sarah Johnson",
    date: "June 15, 2023",
    time: "2:00 PM - 3:00 PM",
    callType: "video",
    participant: "John Donor"
  }, {
    type: "mentor",
    name: "Mike Smith",
    date: "June 16, 2023",
    time: "10:00 AM - 11:00 AM",
    callType: "phone",
    participant: "Mary Mentor"
  }, {
    type: "donor",
    name: "Emma Davis",
    date: "June 17, 2023",
    time: "3:00 PM - 4:00 PM",
    callType: "video",
    participant: "Robert Donor"
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Schedule</h1>
        <button onClick={() => setShowNewCallModal(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Schedule Call
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-gray-900">Calendar</h2>
              <div className="flex space-x-2">
                <select className="border rounded-md px-3 py-1 text-sm">
                  <option>All Calls</option>
                  <option>Donor Calls</option>
                  <option>Mentor Calls</option>
                </select>
                <button className="flex items-center text-blue-500 text-sm">
                  <Download className="w-4 h-4 mr-1" />
                  Export
                </button>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="mb-4 flex justify-between items-center">
              <button className="text-gray-600 hover:text-gray-900">←</button>
              <h3 className="text-lg font-medium">June 2023</h3>
              <button className="text-gray-600 hover:text-gray-900">→</button>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => <div key={day} className="text-center text-sm text-gray-500 py-2">
                  {day}
                </div>)}
              {Array.from({
              length: 35
            }).map((_, i) => <div key={i} className={`aspect-square border rounded-md flex flex-col items-center justify-start p-1 cursor-pointer hover:bg-gray-50 ${i === 14 ? "bg-blue-50 border-blue-200" : ""}`}>
                  <span className="text-sm">{i + 1}</span>
                  {i === 14 && <div className="w-2 h-2 rounded-full bg-blue-500 mt-1"></div>}
                </div>)}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-semibold text-gray-900">Today's Calls</h2>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center">
                  <Video className="w-5 h-5 text-blue-500 mr-2" />
                  <div>
                    <p className="font-medium text-gray-900">Upcoming in 30m</p>
                    <p className="text-sm text-gray-500">
                      Call with Sarah Johnson
                    </p>
                  </div>
                </div>
                <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-semibold text-gray-900">Upcoming Calls</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {upcomingCalls.map((call, i) => <div key={i} className="p-4">
                  <div className="flex items-center mb-2">
                    {call.callType === "video" ? <Video className="w-5 h-5 text-blue-500 mr-2" /> : <Phone className="w-5 h-5 text-green-500 mr-2" />}
                    <span className="font-medium text-gray-900">
                      Call with {call.name}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <span>{call.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{call.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{call.participant}</span>
                    <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {call.type === "donor" ? "Donor" : "Mentor"}
                    </span>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};