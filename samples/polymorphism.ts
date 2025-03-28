interface PrivateStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: PrivateStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();

stringStorage.get('cat');
stringStorage.set('puppy', 'is cute');

const booleanStorage = new LocalStorage<boolean>();

booleanStorage.get('hi');
booleanStorage.set('hello', true);
