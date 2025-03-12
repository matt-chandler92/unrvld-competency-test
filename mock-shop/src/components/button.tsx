export interface ButtonProps {
    type: 'primary' | 'secondary';
    label?: string;
    href?: string;
    active?: boolean;
    onClick?: () => void;
}


export function Button({
    type = 'primary',
    label,
    href,
    active = false,
    onClick
}:ButtonProps) {
  return (
    href
        ? <a href={href} className={`button button__${type} ${active ? `button__${type}--'active'` : ''}`}>{label}</a>
        : <button onClick={onClick} className={`button button__${type} ${active ? `button__${type}--'active'` : ''}`}>{label}</button>
  );
};
