export default function Chip({ label, color, className = '', variant = 'default' }) {
  if (variant === 'banner') {
    return `
      <div class="flex items-center gap-1 px-2 py-0.5 rounded bg-macchiato-surface0/80 border border-macchiato-surface1/70 font-code-inline text-[11px] text-${color} shadow-xs font-medium ${className}">
        <span class="w-1.5 h-1.5 rounded-full bg-${color}"></span>${label}
      </div>
    `;
  }
  
  return `
    <span class="inline-flex items-center gap-1.5 px-space-xs py-1 rounded bg-macchiato-mantle font-code-inline text-label-sm text-macchiato-text border border-macchiato-surface0/80 shadow-xs ${className}">
      <span class="w-1.5 h-1.5 rounded-full bg-${color}"></span>${label}
    </span>
  `;
}
