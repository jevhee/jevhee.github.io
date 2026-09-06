export default function Chip({ label, className = '' }) {
  return `
    <span class="inline-flex items-center px-space-xs py-1 rounded bg-macchiato-mantle font-code-inline text-label-sm text-macchiato-text border border-macchiato-surface0/80 shadow-xs ${className}">
      ${label}
    </span>
  `;
}
