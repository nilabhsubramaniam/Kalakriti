import { type ComponentPropsWithoutRef } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * A native select wearing the site's own chevron.
 *
 * It stays a real `<select>` so phones keep their picker and keyboards keep
 * type-ahead; only the browser's arrow is replaced, because it cannot be
 * positioned or themed. The icon ignores the pointer, so it opens too.
 */
export default function SelectField({ children, ...props }: ComponentPropsWithoutRef<'select'>) {
  return (
    <span className="kk-select">
      <select {...props}>{children}</select>
      <ChevronDown className="kk-select-icon" size={18} aria-hidden="true" />
    </span>
  );
}
