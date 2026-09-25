export const themeConfig = {
  brandName: 'Mr. Shose',
  tagline: 'STEP INTO STYLE',
  colors: {
    // Primary brand colors derived from the official logo
    primary: 'var(--color-primary)',         // Dark Neutral background/text
    accent: 'var(--color-accent)',           // Logo Signature Gold
    accentHover: 'var(--color-accent-hover)', // Deepened Warm Gold
    surface: 'var(--color-surface)',         // Off-white / Soft Gray
    surfaceDark: 'var(--color-surface-dark)', // Onyx / Dark Gray for dark contrast sections
    textPrimary: 'var(--color-text-primary)',
    textMuted: 'var(--color-text-muted)',
    border: 'var(--color-border)',
  },
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '',
};