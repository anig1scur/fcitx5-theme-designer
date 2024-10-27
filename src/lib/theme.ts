import {Margin, ThemeConfig} from '@/types/theme';

export function generateThemeContent(config: ThemeConfig): string {
  const sections: string[] = [];

  // Metadata section
  sections.push(`[Metadata]
Name=${config.name}
Author=${config.author}
Description=${config.description}
ScaleWithDPI=True`);

  // InputPanel section
  const inputPanelProps = [
    `Font=Sans 13`,
    `NormalColor=${config.normalColor}`,
    `HighlightColor=${config.highlightColor}`,
    `HighlightBackgroundColor=${config.highlightBackgroundColor}`,
    `HighlightCandidateColor=${config.highlightCandidateColor}`,
    `Spacing=3`,
  ];
  sections.push(`[InputPanel]\n${inputPanelProps.join('\n')}`);

  // TextMargin section
  sections.push(`[InputPanel/TextMargin]
Left=${config.textMargin.left}
Right=${config.textMargin.right}
Top=${config.textMargin.top}
Bottom=${config.textMargin.bottom}`);

  // Background section
  sections.push(`[InputPanel/Background]
Color=${config.background.color}`);

  // Background Margin section
  sections.push(`[InputPanel/Background/Margin]
Left=${config.background.margin.left}
Right=${config.background.margin.right}
Top=${config.background.margin.top}
Bottom=${config.background.margin.bottom}`);

  // Highlight section
  sections.push(`[InputPanel/Highlight]
Color=${config.highlight.color}`);

  // Highlight Margin section
  sections.push(`[InputPanel/Highlight/Margin]
Left=${config.highlight.margin.left}
Right=${config.highlight.margin.right}
Top=${config.highlight.margin.top}
Bottom=${config.highlight.margin.bottom}`);

  return sections.join('\n\n');
}

export function parseThemeFile(content: string): ThemeConfig {
  const lines = content.split('\n');
  let currentSection = '';
  const sections: Record<string, Record<string, string>> = {};

  for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine === '' || trimmedLine.startsWith('#')) continue;

    if (trimmedLine.startsWith('[') && trimmedLine.endsWith(']')) {
      currentSection = trimmedLine.slice(1, -1);
      sections[currentSection] = {};
    } else {
      const [key, value] = trimmedLine.split('=');
      if (key && value && currentSection) {
        sections[currentSection][key.trim()] = value.trim();
      }
    }
  }

  const parseMargin = (obj: Record<string, string>): Margin => ({
    left: parseInt(obj['Left'] || '0'),
    right: parseInt(obj['Right'] || '0'),
    top: parseInt(obj['Top'] || '0'),
    bottom: parseInt(obj['Bottom'] || '0'),
  });

  return {
    // Metadata
    name: sections['Metadata']?.['Name'] || '',
    author: sections['Metadata']?.['Author'] || '',
    description: sections['Metadata']?.['Description'] || '',

    // Colors
    normalColor: sections['InputPanel']?.['NormalColor'] || '#000000',
    highlightColor: sections['InputPanel']?.['HighlightColor'] || '#000000',
    highlightBackgroundColor: sections['InputPanel']?.['HighlightBackgroundColor'] || '#ffffff',
    highlightCandidateColor: sections['InputPanel']?.['HighlightCandidateColor'] || '#000000',

    // Defaults
    enableBlur: false,
    fullWidthHighlight: false,
    pageButtonAlignment: 'Right',

    // Margins
    blurMargin: {left: 0, right: 0, top: 0, bottom: 0},
    contentMargin: {left: 0, right: 0, top: 0, bottom: 0},
    textMargin: parseMargin(sections['InputPanel/TextMargin'] || {}),
    shadowMargin: {left: 0, right: 0, top: 0, bottom: 0},

    // Background
    background: {
      color: sections['InputPanel/Background']?.['Color'] || '#ffffff',
      borderColor: '#000000',
      borderWidth: 0,
      gravity: 'Center',
      margin: parseMargin(sections['InputPanel/Background/Margin'] || {}),
    },

    // Highlight
    highlight: {
      color: sections['InputPanel/Highlight']?.['Color'] || '#ffffff',
      borderColor: '#000000',
      borderWidth: 0,
      gravity: 'Center',
      margin: parseMargin(sections['InputPanel/Highlight/Margin'] || {}),
    },
  };
}
