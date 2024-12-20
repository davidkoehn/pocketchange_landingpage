import "../app/HamburgerMenu.css";

interface HamburgerMenuProps {
  navItems: Array<{ href: string; title: string; isExternal: boolean }>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HamburgerMenu = ({
  navItems,
  isOpen,
  setIsOpen,
}: HamburgerMenuProps) => {
  const HamburgerIcon = () => (
    <div className="p-1/2 ml-2 mt-4 text-black">
      <svg
        className="w-10 h-10 text-black"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </div>
  );

  const smoothScrollToElement = (selector: string) => {
    const element = document.querySelector(selector);
    if (element instanceof HTMLElement) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleNavItemClick = (href: string, isExternal: boolean) => {
    if (href.startsWith("#")) {
      smoothScrollToElement(href);
    } else if (!isExternal) {
      window.location.href = href;
    } else {
      window.open(href, "_blank");
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`hamburger-menu text-white ${
          isOpen ? "open hamburger-menu-open" : ""
        }`}
      >
        <HamburgerIcon />
      </button>
      {/* Mobile nav menu */}
      <nav
        className={`mobile-menu text-white backdrop-blur bg-opacity-30 border-t-4 border-r-4 ${
          isOpen ? "open" : ""
        }`}
      >
        <ul>
          {navItems.map(({ href, title, isExternal }, index) => (
            <li key={index}>
              <a
                key={index}
                href={href}
                className="mobile-menu-item"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavItemClick(href, isExternal);
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};