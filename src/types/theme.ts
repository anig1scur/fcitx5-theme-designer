export interface Margin {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

export interface Background {
  image?: string;
  color: string;
  borderColor: string;
  borderWidth: number;
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
  contentMargin: Margin;
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
  name: 'default',
  author: '',
  description: '',
  normalColor: '#000000',
  highlightColor: '#FFFFFF',
  highlightBackgroundColor: '#0066FF',
  highlightCandidateColor: '#0066FF',
  enableBlur: false,
  fullWidthHighlight: false,
  pageButtonAlignment: 'Bottom',

  blurMargin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },

  contentMargin: {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  },

  textMargin: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
  },

  shadowMargin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  background: {
    color: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    gravity: 'Top Left',
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },

  highlight: {
    color: '#E5F3FF',
    borderColor: '#0066FF',
    borderWidth: 1,
    gravity: 'Top Left',
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};
