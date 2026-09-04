export default function Badge({ text, className = '' }) {
  return `<span class="absolute bottom-2 right-3 font-code-inline text-label-sm text-macchiato-text px-2 py-0.5 rounded bg-macchiato-surface0 shadow-xs border border-macchiato-surface1/60 ${className}">${text}</span>`;
}
