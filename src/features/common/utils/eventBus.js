/**
 *
 */
export default class EventBus {
  /**
     *
     */
  constructor() {
    this.events = {};
  }

  /**
     *
     * @param {String} eventName
     * @param {any} data
     */
  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((fn) => fn(data));
    }
  }

  /**
     *
     * @param {String} eventName
     * @param {Function} fn
     */
  on(eventName, fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  }

  /**
     *
     * @param {String} eventName
     * @param {Function} fn
     */
  off(eventName, fn) {
    if (this.events[eventName]) {
      const spliceIdx = this.events[eventName].findIndex((i) => i === fn);
      if (spliceIdx >= -1) this.events[eventName].splice(spliceIdx, 1);
    }
  }
}

export const eventBus = (eventName) => {
  const eb = new EventBus();
  return {
    emit: (data) => eb.emit(eventName, data),
    on: (fn) => eb.on(eventName, fn),
    off: (fn) => eb.off(eventName, fn),
  };
};
