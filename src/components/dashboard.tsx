"use client";
import { useState } from "react";
import {
  Menu,
  Home,
  Users,
  Settings,
  BarChart2,
  DollarSign,
} from "lucide-react";
import { motion } from "motion/react";

// Animation Orchestration
// Animation orchestration refers to the coordination and management of multiple animations
// working together in a synchronized manner. like child div acting when action is done on parent div

const sidebarVariants = {
  closed: {
    width: "4.5rem",
  },
  open: {
    width: "16rem",
  },
};

const parentVariants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const childVariants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: -10,
  },
};

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={isCollapsed ? "closed" : "open"}
        variants={sidebarVariants}
        // initial={{
        //   width: "4.5rem",
        // }}
        // animate={{
        //   width: isCollapsed ? "4.5rem" : "16rem",
        // }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="bg-white shadow-lg text-black"
      >
        {/* Rest of the sidebar content remains the same */}
        <div className="p-4 flex justify-between items-center">
          {!isCollapsed && (
            <h2 className="text-xl font-bold text-black">Dashboard</h2>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded text-black"
          >
            <Menu size={24} />
          </button>
        </div>

        <motion.nav variants={parentVariants} className="mt-6">
          {[
            { icon: <Home size={20} />, label: "Home" },
            { icon: <Users size={20} />, label: "Users" },
            { icon: <BarChart2 size={20} />, label: "Analytics" },
            { icon: <DollarSign size={20} />, label: "Revenue" },
            { icon: <Settings size={20} />, label: "Settings" },
          ].map((item, index) => (
            <motion.div
              variants={childVariants}
              key={index}
              className={`px-4 py-3 flex items-center hover:bg-gray-100 cursor-pointer text-black ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              {item.icon}
              {!isCollapsed && <span className="ml-3">{item.label}</span>}
            </motion.div>
          ))}
        </motion.nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6 text-black">
          Analytics Overview
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm">Total Users</h3>
            <p className="text-2xl font-bold">12,345</p>
            <span className="text-green-500 text-sm">+12% this week</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm">Active Users</h3>
            <p className="text-2xl font-bold">8,765</p>
            <span className="text-green-500 text-sm">+5% this week</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm">Revenue</h3>
            <p className="text-2xl font-bold">$34,567</p>
            <span className="text-red-500 text-sm">-2% this week</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm">Conversion Rate</h3>
            <p className="text-2xl font-bold">2.4%</p>
            <span className="text-green-500 text-sm">+0.5% this week</span>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-black">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">New user registration</p>
                <p className="text-sm text-gray-500">John Doe signed up</p>
              </div>
              <span className="text-sm text-gray-500">2 min ago</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Premium subscription</p>
                <p className="text-sm text-gray-500">
                  Jane Smith upgraded plan
                </p>
              </div>
              <span className="text-sm text-gray-500">1 hour ago</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Support ticket</p>
                <p className="text-sm text-gray-500">
                  Technical issue reported
                </p>
              </div>
              <span className="text-sm text-gray-500">3 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
