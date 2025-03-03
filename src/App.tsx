import React, { Children } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Reports } from "./pages/Reports";
import { ReportSubmission } from "./pages/Reports/ReportSubmission";
import { ReportDetails } from "./pages/Reports/ReportDetails";
import { Schedule } from "./pages/Schedule";
import { Statistics } from "./pages/Statistics";
import { Notifications } from "./pages/Notifications";
import { Settings } from "./pages/Settings";
import { ChildrenList } from "./pages/Children/ChildrenList";
import { ChildRegistration } from "./pages/Children/ChildRegistration";
import { ChildDetails } from "./pages/Children/ChildDetails";
import { MentorsList } from "./pages/Mentors/MentorsList";
import { MentorRegistration } from "./pages/Mentors/MentorRegistration";
import { MentorDetails } from "./pages/Mentors/MentorDetails";
import { ScheduleCreate } from "./pages/Schedule/ScheduleCreate";
export function App() {
  return <Router>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/children" element={<ChildrenList />} />
          <Route path="/children/new" element={<ChildRegistration />} />
          <Route path="/children/:id" element={<ChildDetails />} />
          <Route path="/mentors" element={<MentorsList />} />
          <Route path="/mentors/new" element={<MentorRegistration />} />
          <Route path="/mentors/:id" element={<MentorDetails />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/reports/new" element={<ReportSubmission />} />
          <Route path="/reports/:id" element={<ReportDetails />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/schedule/new" element={<ScheduleCreate />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Layout>
    </Router>;
}