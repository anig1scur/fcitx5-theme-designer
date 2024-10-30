"use client";

import { useState } from 'react';
import { ThemeConfigForm } from '@/components/ThemeConfigForm';
import { Preview as ThemePreview } from '@/components/ThemePreview';
import { ThemeConfig, defaultConfig } from '@/types/theme';

export default function Home() {
  const [config, setConfig] = useState<ThemeConfig>(defaultConfig);

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 p-6 border-r overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">fcitx5 theme designer</h2>
        <ThemeConfigForm
          initialConfig={ config }
          onConfigChange={ setConfig }
          onConfigExport={()=>{}}
        />
      </div>
      <div className="w-1/2 p-6 sticky top-20 h-fit">
        <h2 className="text-2xl font-bold mb-6">preview</h2>
        <ThemePreview config={ config } />
      </div>
    </div>
  );
}
