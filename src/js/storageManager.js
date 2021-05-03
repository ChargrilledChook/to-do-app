class StorageManager {
  constructor() {
    this.data = checkStorage();
  }

  checkStorage() {
    if (!localStorage.getItem("todos")) {
      const storage = {};
    } else {
      const storage = JSON.parse(localStorage.getItem("todos"));
    }
    return storage;
  }
}
