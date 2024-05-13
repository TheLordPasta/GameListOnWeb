class gameClass {
  #title;
  #thumbnail;
  #short_description;

  constructor(name, flag, native) {
    this.title = this.title;
    this.thumbnail = this.thumbnail;
    this.short_description = this.short_description;
  }

  get short_description() {
    return this.short_description;
  }

  get title() {
    return this.#title;
  }

  get thumbnail() {
    return this.#thumbnail;
  }

  set title(value) {
    this.#title = value;
  }

  set short_description(value) {
    this.#short_description = value;
  }

  set thumbnail(value) {
    this.#thumbnail = value;
  }
}
