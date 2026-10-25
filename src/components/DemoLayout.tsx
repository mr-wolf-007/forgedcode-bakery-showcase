import React, { useState } from 'react';
import { PresentationToolbar, DeviceMode } from './PresentationToolbar';
import { DeviceFrame } from './DeviceFrame';

interface DemoLayoutProps {
  demoId: string;
  children: React.ReactNode;
}

export const DemoLayout: React.FC<DemoLayoutProps> = ({ demoId, children }) => {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');

  return (
    <div className="min-h-screen flex flex-col bg-[#070A10]">
      {/* Presentation & Client Control Bar */}
      <PresentationToolbar
        currentDemoId={demoId}
        deviceMode={deviceMode}
        onDeviceModeChange={setDeviceMode}
      />

      {/* Main Demo Container with Optional Device Viewport Simulation */}
      <main className="flex-1 w-full">
        <DeviceFrame mode={deviceMode}>
          {children}
        </DeviceFrame>
      </main>
    </div>
  );
};
