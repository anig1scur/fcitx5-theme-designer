import {ThemeConfig} from '@/types/theme';

export function generateThemeContent(config: ThemeConfig): string {
  return `[Fcitx Theme]
InputPanelFont=${config.inputPanelFont}
MenuFont=${config.menuFont}
TrayFont=${config.trayFont}
NormalColor=${config.normalColor}
HighlightColor=${config.highlightColor}
...
`;
}

export function parseThemeFile(content: string): ThemeConfig {
  return {
  };
}
