
class Page {
  id;
  name;
  url;
  constructor(id = "EX", name = "Example", url = "index") {
    this.id = id;
    this.name = name;
    this.url = url;
  }
  // 📌 Getters / Setters
  get Id() {
    return this.id;
  }
  get Name() {
    return this.name;
  }
  get Url() {
    return this.url;
  }
  set Id(id) {
    this.id = id;
  }
  set Name(name) {
    this.name = name;
  }
  set Url(url) {
    this.url = url;
  }

  // ⭐ Methods ⭐
  setAll(id, name, url) {
    this.id = id;
    this.name = name;
    this.url = url;
  }
  toShow() {
    console.log(`
      > id    : ${this.id}
      > name  : ${this.name}
      > url   : ${this.url}
      `);
  }
}

class Theme extends Page {
  // 📦 atributos de Page
  subThemes;
  constructor(id = "Ex", name = "Example", url = "index", subThemes = []) {
    super(id, name, url);
    this.subThemes = subThemes;
  }
  // 📌 Getters / Setters
  get SubThemes() {
    return this.subThemes;
  }
  set SubThemes(subThemes) {
    this.subThemes = subThemes;
  }
  // ⭐ Methods ⭐
  setAllT(id, name, url, subThemes) {
    super.setAll(id, name, url);
    this.subThemes = subThemes;
  }
  getE_index(index) {
    try {
      return this.subThemes[index];
    } catch (error) {
      return new Page();
    }
  }
  getE_name(name) {
    this.subThemes.forEach((e) => {
      if (e.Name == name) {
        return e;
      }
    });
    return new Page();
  }
  getE_id(id) {
    this.subThemes.forEach((e) => {
      if (e.Id == id) {
        return e;
      }
    });
    return new Page();
  }
  toShow() {
    super.toShow();
    console.log(">>>>Subthemes<<<<");
    this.subThemes.forEach((e) => {
      e.toShow();
    });
  }
}

class Matter extends Page {
  // 📦 atributos de Page
  themes;
  constructor(id = "Ex", name = "Example", url = "index", themes = []) {
    super(id, name, url);
    this.themes = themes;
  }
  // 📌 Getters / Setters
  get Themes() {
    return this.themes;
  }
  set Themes(themes) {
    this.themes = themes;
  }

  // ⭐ Methods ⭐
  setAllT(id, name, url, themes) {
    super.setAll(id, name, url);
    this.themes = themes;
  }
  getE_index(index) {
    try {
      return this.themes[index];
    } catch (error) {
      return new Page();
    }
  }
  getE_name(name) {
    this.themes.forEach((e) => {
      if (e.Name == name) {
        return e;
      }
    });
    return new Page();
  }
  getE_id(id) {
    this.themes.forEach((e) => {
      if (e.Id == id) {
        return e;
      }
    });
    return new Page();
  }

  toShow() {
    super.toShow();
    console.log(">>>>Themes<<<<");
    this.themes.forEach((e) => {
      e.toShow();
    });
  }
}
