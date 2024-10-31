export interface Margin {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

export interface Background {
  image?: string;
  color: string;
  overlay?: string;
  gravity: string;
  overlayOffsetX?: number;
  overlayOffsetY?: number;
  hideOverlayIfOversize?: boolean;
  margin: Margin;
  overlayClipMargin?: Margin;
}

export interface Highlight extends Background {
  highlightClickMargin?: Margin;
}

export interface PageButton {
  image?: string;
  clickMargin: Margin;
}

export interface ThemeConfig {
  // Metadata
  name: string;
  author: string;
  description: string;

  // InputPanel
  normalColor: string;
  highlightColor: string;
  highlightBackgroundColor: string;
  highlightCandidateColor: string;
  enableBlur: boolean;
  blurMask?: string;
  fullWidthHighlight: boolean;
  pageButtonAlignment: 'Top' | 'Bottom' | 'Left' | 'Right';

  // Margins
  blurMargin: Margin;
  textMargin: Margin;
  shadowMargin: Margin;

  // Backgrounds and Highlights
  background: Background;
  highlight: Highlight;

  // Navigation
  prevPage?: PageButton;
  nextPage?: PageButton;
}

export const defaultConfig: ThemeConfig = {
  // Metadata
  name: 'default',
  author: '',
  description: '',

  normalColor: '#81a1c1',
  highlightColor: '#5e81ac',
  highlightBackgroundColor: '#eceff4',
  highlightCandidateColor: '#5e81ac',
  enableBlur: false,
  fullWidthHighlight: false,
  pageButtonAlignment: 'Right',

  // Margins
  blurMargin: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  textMargin: {
    left: 10,
    right: 10,
    top: 6,
    bottom: 6,
  },
  shadowMargin: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  background: {
    color: '#e5e9f0',
    gravity: '',
    margin: {
      left: 2,
      right: 2,
      top: 2,
      bottom: 2,
    },
  },

  highlight: {
    color: '#d8dee9',
    gravity: '',
    margin: {
      left: 10,
      right: 10,
      top: 7,
      bottom: 7,
    },
  },
};
