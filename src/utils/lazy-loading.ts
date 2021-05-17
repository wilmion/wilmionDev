interface IEntry {
  callback: (element: HTMLElement) => any;
  element: HTMLElement;
}

class LazyLoading {
  observed: IEntry[];
  observer: IntersectionObserver;

  constructor() {
    this.observed = [];
    this.init();
  }

  init() {
    this.observer = new IntersectionObserver((entries, observer) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          const index: number = this.observed.indexOf(
            this.observed.find((o) => o.element == entry.target)
          );
          this.observed[index].callback(<any>entry.target);
          observer.unobserve(entry.target);
        });
    });
  }
  observe(element: HTMLElement, callback: (element: HTMLElement) => any): void {
    this.observer.observe(element);
    this.observed.push({
      element,
      callback,
    });
  }
}

export const lazyLoading = new LazyLoading();
