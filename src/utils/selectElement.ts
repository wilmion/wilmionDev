export function selectElement(
  element: HTMLElement,
  id: string,
  callback: (elSelect: HTMLElement) => void
): void {
  let el: HTMLElement = element;

  while (el.id !== id) {
    el = el.parentElement;
    if (el.tagName === "BODY") {
      return null;
    }
  }

  callback(el);
}
