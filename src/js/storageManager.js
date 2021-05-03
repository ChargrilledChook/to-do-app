class StorageManager {
  constructor() {
    this.data = checkStorage();
  }

  checkStorage() {
    if (!localStorage.getItem("todos")) {
      const data = {};
    } else {
      const data = JSON.parse(localStorage.getItem("todos"));
    }
    return data;
  }
}
