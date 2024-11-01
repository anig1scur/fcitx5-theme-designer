"use client";

import { use, useEffect, useState } from 'react';
import { PresetTheme } from "@/components/PresetTheme";
import { ThemeConfigForm } from '@/components/ThemeConfigForm';
import { Preview as ThemePreview } from '@/components/ThemePreview';
import { ThemeConfig, defaultConfig } from '@/types/theme';
import { DEFAULT_THEMES } from '@/lib/theme';

export default function Home() {
  const [config, setConfig] = useState<ThemeConfig>(defaultConfig);
  const [selectedPreset, setSelectedPreset] = useState<number>(0);

  useEffect(() => {
    if (selectedPreset < 0 || selectedPreset >= DEFAULT_THEMES.length) {
      return;
    }
    setConfig(DEFAULT_THEMES[selectedPreset]);
  }, [selectedPreset])

  return (
    <div className="flex min-h-screen py-10">
      <div className="w-1/2 px-6 border-r overflow-y-auto">
        <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          fcitx5 theme designer
        </h2>
        <PresetTheme onSelect={ setSelectedPreset } selected={ selectedPreset } />
        <ThemeConfigForm
          initialConfig={ config }
          onConfigChange={ (c) => {
            setConfig(c);
            setSelectedPreset(-1);
          } }
          onConfigExport={ () => { } }
        />
      </div>
      <div className="w-1/2 p-6 sticky top-12 h-fit">
        <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-pink-400 via-orange-400 to-purple-600 inline-block text-transparent bg-clip-text">preview</h2>
        <ThemePreview config={ config } />
      </div>
    </div>
  );
}
