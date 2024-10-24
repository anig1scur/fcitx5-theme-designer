export interface ThemeConfig {
  inputPanelFont: string;
  menuFont: string;
  trayFont: string;

  normalColor: string;
  highlightColor: string;
  backgroundColor: string;
  highlightBackgroundColor: string;
  highlightCandidateColor: string;
  highlightCandidateBackgroundColor: string;
  borderColor: string;

  contentMargin: number;
  textMargin: number;
  spacing: number;
  borderWidth: number;
  pageButtonAlignment: 'Top' | 'Bottom' | 'Left' | 'Right';
}

export const defaultTheme: ThemeConfig = {
  inputPanelFont: 'Sans 10',
  menuFont: 'Sans 10',
  trayFont: 'Sans 10',
  normalColor: '#000000',
  highlightColor: '#ffffff',
  backgroundColor: '#ffffff',
  highlightBackgroundColor: '#0000ff',
  highlightCandidateColor: '#ffffff',
  highlightCandidateBackgroundColor: '#0000ff',
  borderColor: '#cccccc',
  contentMargin: 4,
  textMargin: 4,
  spacing: 4,
  borderWidth: 1,
  pageButtonAlignment: 'Bottom',
};
