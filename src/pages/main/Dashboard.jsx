import React from 'react';

import FolderSection from './FolderSection';
import Card from './card';

const Dashboard = () => {
  return (
    <div className="flex-1 p-6 bg-gray-950 text-white overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">Team Space</h1>

      <div className="flex flex-wrap gap-4">
        <Card title="Recent" items={['Project 1 - in Projects', 'Projects - in Team Space', 'Project 2 - in Projects']} />
        <Card title="Docs" items={['Project 1 - in Projects']} />
        <Card title="Bookmarks" items={['No bookmarks yet.']} />
      </div>

      <FolderSection />
    </div>
  );
};

export default Dashboard;
