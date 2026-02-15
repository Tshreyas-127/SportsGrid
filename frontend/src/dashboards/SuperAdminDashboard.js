// src/dashboards/SuperAdminHome.js
import React from "react";
import Navbar from "../components/Navbar";

export default function SuperAdminHome() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <h1>Sports Club Management</h1>
        <p>Full access to all modules and settings</p>
      </div>

      <section>
        <h2>System Controls</h2>
        <ul>
          <li>Manage Administrators</li>
          <li>View Reports & Analytics</li>
          <li>System Configurations</li>
        </ul>
      </section>
    </>
  );
}
