import {Margin, ThemeConfig} from '@/types/theme';

const NORD_LIGHT = `
  [Metadata]
  Name=Nord-Light
  Version=0.1
  Author=MiraculousMoon
  Description=Nord Color Theme (Light)
  ScaleWithDPI=True
  URL=https://github.com/tonyfettes/fcitx5-nord

  [InputPanel]
  # 字体
  Font=Sans 13
  # 非选中候选字颜色
  NormalColor=#81a1c1
  # 选中候选字颜色
  HighlightCandidateColor=#5e81ac
  # 高亮前景颜色(输入字符颜色)
  HighlightColor=#5e81ac
  # 输入字符背景颜色
  HighlightBackgroundColor=#eceff4
  Spacing=3

  [InputPanel/TextMargin]
  # 候选字对左边距
  Left=10
  # 候选字对右边距
  Right=10
  # 候选字向上边距
  Top=6
  # 候选字向下边距
  Bottom=6

  [InputPanel/Background]
  Color=#e5e9f0

  [InputPanel/Background/Margin]
  Left=2
  Right=2
  Top=2
  Bottom=2

  [InputPanel/Highlight]
  Color=#d8dee9

  [InputPanel/Highlight/Margin]
  # 高亮区域左边距
  Left=10
  # 高亮区域右边距
  Right=10
  # 高亮区域上边距
  Top=7
  # 高亮区域下边距
  Bottom=7
  `;

const SPRING = `
  [Metadata]
  Name=Spring
  Version=0.1
  Author=thepoy
  Description=Fctix5 Spring Theme
  ScaleWithDPI=True
  URL=https://github.com/thep0y/fcitx5-themes-candlelight/

  [InputPanel]
  # 字体
  Font=Sans 13
  # 非选中候选字颜色
  NormalColor=#ffffff
  # 选中候选字颜色
  HighlightCandidateColor=#ffffff
  # 高亮前景颜色(输入字符颜色)
  HighlightColor=#ffffff
  # 输入字符背景颜色
  HighlightBackgroundColor=#00000000
  Spacing=3

  [InputPanel/TextMargin]
  # 候选字对左边距
  Left=20
  # 候选字对右边距
  Right=20
  # 候选字向上边距
  Top=10
  # 候选字向下边距
  Bottom=10

  [InputPanel/Background]
  Color=#000000

  [InputPanel/Background/Margin]
  Left=2
  Right=2
  Top=2
  Bottom=2

  [InputPanel/Highlight]
  Color=#407434

  [InputPanel/Highlight/Margin]
  # 高亮区域左边距
  Left=20
  # 高亮区域右边距
  Right=20
  # 高亮区域上边距
  Top=10
  # 高亮区域下边距
  Bottom=10
  `;

const DRACULA = `
  [Metadata]
  Name=Dracula
  Author=
  Description=Dracula Theme
  ScaleWithDPI=True

  [InputPanel]
  Font=Sans 13
  NormalColor=#f8f8f2
  HighlightColor=#ff79c6
  HighlightBackgroundColor=#44475a
  HighlightCandidateColor=#ff79c6
  Spacing=3

  [InputPanel/TextMargin]
  Left=10
  Right=10
  Top=6
  Bottom=6

  [InputPanel/Background]
  Color=#282a36

  [InputPanel/Highlight]
  Color=#44475a

  [InputPanel/Highlight/Margin]
  Left=10
  Right=10
  Top=6
  Bottom=6
  `;


const PINK = `
[Metadata]
Name=Pink
Author=Eunice
Description=pink!pink!pink!
ScaleWithDPI=True

[InputPanel]
Font=Sans 13
NormalColor=#c0688b
HighlightColor=#b6253b
HighlightBackgroundColor=#eceff4
Spacing=3

[InputPanel/TextMargin]
Left=10
Right=10
Top=6
Bottom=6

[InputPanel/Background]
Color=#fed7e1

[InputPanel/Highlight]
Color=#ec98a4

[InputPanel/Highlight/Margin]
Left=10
Right=10
Top=6
Bottom=6
`
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

  //   // Background Margin section
  //   sections.push(`[InputPanel/Background/Margin]
  // Left=${config.background.margin.left}
  // Right=${config.background.margin.right}
  // Top=${config.background.margin.top}
  // Bottom=${config.background.margin.bottom}`);

  // Highlight section
  sections.push(`[InputPanel/Highlight]
  Color=${config.highlight.color}`);

  //   // Highlight Margin section
  //   sections.push(`[InputPanel/Highlight/Margin]
  // Left=${config.highlight.margin.left}
  // Right=${config.highlight.margin.right}
  // Top=${config.highlight.margin.top}
  // Bottom=${config.highlight.margin.bottom}`);

  // Highlight Margin section
  sections.push(`[InputPanel/Highlight/Margin]
  Left=${config.textMargin.left}
  Right=${config.textMargin.right}
  Top=${config.textMargin.top}
  Bottom=${config.textMargin.bottom}`);
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
    url: sections['Metadata']?.['URL'] || '',
    description: sections['Metadata']?.['Description'] || '',

    // Colors
    normalColor: sections['InputPanel']?.['NormalColor'] || '#000000',
    highlightColor: sections['InputPanel']?.['HighlightColor'] || '#ffffff',
    highlightBackgroundColor: sections['InputPanel']?.['HighlightBackgroundColor'] || '#ffffff',
    highlightCandidateColor: sections['InputPanel']?.['HighlightCandidateColor'] || '#000000',

    // Defaults
    enableBlur: false,
    fullWidthHighlight: false,
    pageButtonAlignment: 'Right',

    // Margins
    blurMargin: {left: 0, right: 0, top: 0, bottom: 0},
    textMargin: parseMargin(sections['InputPanel/TextMargin'] || {}),
    shadowMargin: {left: 0, right: 0, top: 0, bottom: 0},

    // Background
    background: {
      color: sections['InputPanel/Background']?.['Color'] || '#ffffff',
      gravity: 'Center',
      margin: parseMargin(sections['InputPanel/Background/Margin'] || {}),
    },

    // Highlight
    highlight: {
      color: sections['InputPanel/Highlight']?.['Color'] || '#ffffff',
      gravity: 'Center',
      margin: parseMargin(sections['InputPanel/Highlight/Margin'] || {}),
    },
  };
}

export const DEFAULT_THEMES = [NORD_LIGHT, SPRING, DRACULA, PINK].map(parseThemeFile);
