import { useState } from "react";
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { UploadTab } from "@/components/dashboard/UploadTab";
import { VideosTab } from "@/components/dashboard/VideosTab";
import { SettingsTab } from "@/components/dashboard/SettingsTab";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("upload");

  const renderContent = () => {
    switch (activeTab) {
      case "upload":
        return <UploadTab />;
      case "videos":
        return <VideosTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return <UploadTab />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;