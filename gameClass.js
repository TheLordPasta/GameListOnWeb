class gameClass {
  #name;
  #flag;
  #native;

  constructor(name, flag, native) {
    this.name = name;
    this.flag = flag;
    this.native = native;
  }

  get native() {
    return this.#native;
  }

  get name() {
    return this.#name;
  }

  get flag() {
    return this.#flag;
  }

  set name(newName) {
    this.#name = newName;
  }

  set native(newNative) {
    this.#native = newNative;
  }

  set flag(newFlag) {
    this.#flag = newFlag;
  }
}
