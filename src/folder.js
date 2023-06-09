import { createHtmlElement, setId } from "./dom";

const folder = document.querySelector("#folders .card");

class Folder {
  constructor(title) {
    this.title = title;
    this.id = setId();
    this.tasks = [];
  }

  render() {
    const div = createHtmlElement("div", this.id, ["folder"], null);
    const title = createHtmlElement("p", null, null, this.title);
    const $delete = createHtmlElement("img", null, ["delete"], null);
    $delete.src = "./img/delete.svg";
    $delete.addEventListener("click", () => {
      this.delete();
    });

    div.appendChild(title);
    div.appendChild($delete);

    folder.appendChild(div);
    div.addEventListener("click", () => {
      currentFolder = this;
      currentFolder.active = false;
      this.renderTasks();
      let foldersClass = document.querySelectorAll(".folder");
      foldersClass.forEach((f) => {
        f.classList.value = "folder";
        f.style.border = "none";
      });
      let delButtons = document.querySelectorAll(".delete");
      delButtons.forEach((button) => (button.src = "./img/delete.svg"));
      if (!div.classList.value.includes("active")) {
        div.classList.add("active");
        div.style.border = "solid #508e8d";
        $delete.src = "./img/delete.svg";
      } else return;
    });
  }

  delete() {
    foldersArray = foldersArray.filter((folder) => folder.id !== this.id);
    Folder.renderFolders();
  }

  renderTasks() {
    const tasks = document.querySelector("#task-container");
    tasks.innerHTML = ``;
    this.tasks.forEach((task) => task.render());
  }

  static renderFolders() {
    folder.innerHTML = "";
    foldersArray.forEach((folder) => {
        folder.render();
    });
  }
  static setCurrentFolder(folder) {
    currentFolder = folder;
  }
}

let foldersArray = [new Folder("First Folder")];
let currentFolder = foldersArray[0];

export { Folder, foldersArray, currentFolder };