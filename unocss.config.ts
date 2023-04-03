import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
  ],
  rules: [
    [/^w-(\d)\/(\d)$/, ([_, n1, n2]) => ({ width: `${(Number(n1) / Number(n2)) * 100}%` })],
    ['text-2xs', { 'font-size': '0.625rem', 'line-height': '1rem' }],
    [/item-bg-(.+)/, ([, c], { theme }: { theme: Record<any, any> }) => {
      if (theme.colors[c])
        return { background: `radial-gradient(${theme.colors[c]}, #222222)` };
    }],
  ],
  theme: {
    colors: {
      common: '#96A6A6',
      uncommon: '#71BC39',
      legendary: '#DF4D39',
      void: '#C678B4',
      boss: '#AEBA23',
      lunar: '#36B8E0',
      equipment: '#C78536',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
});
