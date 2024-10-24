import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';
import {ThemeConfig} from '@/types/theme';
import {generateThemeContent} from './theme';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function exportThemeFile(config: ThemeConfig) {
  const content = generateThemeContent(config);
  const blob = new Blob([content], {type: 'text/plain'});
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'theme.conf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
