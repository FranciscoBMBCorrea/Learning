type QueueItem = () => Promise<void>;

export default class Typewriter {
  #queue: QueueItem[] = [];
  element: HTMLElement;
  loop: boolean;
  typingSpeed: number;
  deletingSpeed: number;

  constructor(
    parent: HTMLElement,
    { loop = false, typingSpeed = 50, deletingSpeed = 50 } = {}
  ) {
    this.element = document.createElement("div");
    parent.append(this.element);
    this.loop = loop;
    this.typingSpeed = typingSpeed;
    this.deletingSpeed = deletingSpeed;
  }

  typeString(string: string) {
    this.#addToQueue(resolve => {
      let i = 0;
      const interval = setInterval(() => {
        this.element.append(string[i]);
        i++;

        if (i >= string.length) {
          clearInterval(interval);
          resolve();
        }
      }, this.typingSpeed);
    });

    return this;
  };

  deleteChars(number: number) {
    return this;
  }

  deleteAll(deleteSpeed = this.deletingSpeed) {
    return this;
  }

  pauseFor(duration: number) {
    return this;
  }

  async start() {
    for (let cb of this.#queue) {
      await cb();
    }
    return this;
  }

  #addToQueue(cb: (resolve: () => void) => void) {
    this.#queue.push(() => new Promise(cb));
  }
};
