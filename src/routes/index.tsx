@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Montserrat:wght@700;800;900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: oklch(0.09 0.018 85);
  --foreground: oklch(0.95 0.025 88);

  --card: oklch(0.145 0.025 85);
  --card-foreground: oklch(0.95 0.025 88);

  --popover: oklch(0.145 0.025 85);
  --popover-foreground: oklch(0.95 0.025 88);

  --primary: oklch(0.76 0.16 82);
  --primary-foreground: oklch(0.12 0.02 85);

  --secondary: oklch(0.20 0.035 85);
  --secondary-foreground: oklch(0.95 0.025 88);

  --muted: oklch(0.17 0.025 85);
  --muted-foreground: oklch(0.68 0.025 88);

  --accent: oklch(0.24 0.05 85);
  --accent-foreground: oklch(0.95 0.025 88);

  --destructive: oklch(0.62 0.20 25);
  --destructive-foreground: oklch(0.98 0 0);

  --border: oklch(0.76 0.16 82 / 22%);
  --input: oklch(0.76 0.16 82 / 25%);
  --ring: oklch(0.76 0.16 82);

  --radius: 0.75rem;

  --panel: oklch(0.145 0.025 85 / 90%);
  --panel-foreground: oklch(0.95 0.025 88);

  --gold-soft: oklch(0.82 0.12 88);
  --glow: oklch(0.76 0.16 82 / 34%);
  --gold-haze: oklch(0.72 0.155 86 / 24%);
}

* {
  border-color: var(--border);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background: var(--background);
  color: var(--foreground);
  font-family: "Inter", sans-serif;
  transition:
    background-color 300ms ease,
    color 300ms ease;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

::selection {
  background: var(--primary);
  color: var(--primary-foreground);
}

.font-display {
  font-family: "Montserrat", sans-serif;
}

.font-num {
  font-family: "Montserrat", sans-serif;
  font-variant-numeric: tabular-nums;
}

.bg-panel {
  background: var(--panel);
}

.text-panel-foreground {
  color: var(--panel-foreground);
}

.text-gold-soft {
  color: var(--gold-soft);
}

@keyframes star-pulse {
  0%,
  100% {
    opacity: 0.25;
    transform: scale(0.85);
    filter: drop-shadow(0 0 0 transparent);
  }

  50% {
    opacity: 1;
    transform: scale(1.15);
    filter: drop-shadow(0 0 10px var(--glow));
  }
}

.animate-star-pulse {
  animation: star-pulse 2.8s ease-in-out infinite;
}

.animate-star-pulse:nth-child(3) {
  animation-delay: 0.7s;
}

.animate-star-pulse:nth-child(4) {
  animation-delay: 1.4s;
}

.animate-star-pulse:nth-child(5) {
  animation-delay: 2.1s;
}

.soft-hover {
  box-shadow: 0 0 0 transparent;
  transition:
    box-shadow 250ms ease,
    transform 250ms ease,
    background-color 250ms ease,
    border-color 250ms ease;
}

.soft-hover:hover {
  box-shadow: 0 0 34px var(--glow);
  transform: translateY(-2px);
}

.theme-toggle {
  backdrop-filter: blur(10px);
  transition:
    background-color 300ms ease,
    border-color 300ms ease,
    color 300ms ease,
    box-shadow 300ms ease;
}

.theme-light {
  color-scheme: light;
}

.theme-dark {
  color-scheme: dark;
}

:root[data-theme="light"] {
  --background: oklch(0.96 0.025 88);
  --foreground: oklch(0.18 0.025 85);

  --card: oklch(0.985 0.018 88);
  --card-foreground: oklch(0.18 0.025 85);

  --popover: oklch(0.985 0.018 88);
  --popover-foreground: oklch(0.18 0.025 85);

  --primary: oklch(0.58 0.145 82);
  --primary-foreground: oklch(0.985 0.018 88);

  --secondary: oklch(0.91 0.045 88);
  --secondary-foreground: oklch(0.24 0.03 85);

  --muted: oklch(0.92 0.035 88);
  --muted-foreground: oklch(0.42 0.025 85);

  --accent: oklch(0.90 0.055 88);
  --accent-foreground: oklch(0.20 0.025 85);

  --border: oklch(0.58 0.145 82 / 24%);
  --input: oklch(0.58 0.145 82 / 30%);
  --ring: oklch(0.58 0.145 82);

  --panel: oklch(0.98 0.025 88 / 92%);
  --panel-foreground: oklch(0.20 0.025 85);

  --gold-soft: oklch(0.55 0.13 82);
  --glow: oklch(0.65 0.16 82 / 28%);
  --gold-haze: oklch(0.72 0.155 86 / 20%);
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .animate-star-pulse {
    animation: none;
  }

  .soft-hover,
  .theme-toggle {
    transition: none;
  }
}
