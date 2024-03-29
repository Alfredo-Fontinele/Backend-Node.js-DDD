import { Command } from "@application/commands/Command";
import { Observer } from "@infra/queues/Observer";

export class Publisher {
  observers: Observer[];

  constructor() {
    this.observers = [];
  }

  register(observer: Observer) {
    this.observers.push(observer);
  }

  publish(command: Command) {
    this.observers.forEach((observer) => {
      if (observer.operation === command.operation) {
        observer.notify(command);
      }
    });
  }
}
