import { Button, ButtonProps } from "./button";
export interface HeaderProps {
    size: 'large' | 'small';
    heading: string;
    category?: string;
    cta?: ButtonProps;
    filters?:[];
}

export function Header({
    size = 'large',
    heading,
    category,
    cta,
    filters,
}:HeaderProps) {
  return (
      <div className="container">
            <div className="row">
            <header className="header">
                <div className="col-8 col-md-5 header__container">
                        {category && <div className="header__category">&#47;&#47;{category}</div>}
                        <h1 className={`header__heading header__heading--${size}`}>{heading}</h1>
                </div>
                <div className="col-7 col-md-2 header__actions">
                        {filters && <div className="header__filters">{filters}</div>}
                        {cta && <Button {...cta} />}
                </div>
            </header>
            </div>
        </div>
  );
};
