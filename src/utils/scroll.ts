export const smoothScrollToElement = (href: string, isExternal?: boolean) => {
  if (href.startsWith("#")) {
    const element = document.querySelector(href);
    if (element instanceof HTMLElement) {
      let offset = 0;
      let parent: HTMLElement | null = element;
      while (parent) {
        offset += parent.offsetTop;
        parent = parent.offsetParent as HTMLElement;
      }
      window.scrollTo({
        top: offset - 180,
        behavior: "smooth",
      });
    }
  } else if (href && !isExternal) {
    window.location.href = href;
  } else if (href && isExternal) {
    window.open(href, "_blank");
  }
};
