import { Component } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

/**
 * @title Drag&Drop connected sorting group
 */
@Component({
  selector: "cdk-drag-drop-connected-sorting-group-example",
  templateUrl: "cdk-drag-drop-connected-sorting-group-example.html",
  styleUrls: ["cdk-drag-drop-connected-sorting-group-example.css"]
})
export class CdkDragDropConnectedSortingGroupExample {
  titleCat = [
    "Programming Lang",
    "Web FrameWorks",
    "Platforms",
    "Algorithms",
    "Database",
    "Hated Things"
  ];
  // titleOne = "Programming Lang";
  // titleTwo = "Web FrameWorks";
  // titleThree = "Platforms";
  // titleFour = "Algorithms";
  // titleFive = "Database";
  // titleSix = "Hated Things";

  catagoryOne: string[] = ["TypeScript", "Go", "Python", "Rust", "Elixir"];

  catagoryTwo: string[] = [
    "Angular",
    "NestJS",
    "Fastify",
    "Socket.io",
    "Express"
  ];

  catagoryThree: string[] = ["Linux", "Docker", "AWS", "Android", "MacOS"];

  catagoryFour: string[] = [
    "Graph search",
    "Selection algorithms",
    "Bellman-Ford Algorithm",
    "QuickSort",
    "HeapSort"
  ];

  catagoryFive: string[] = [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Oracle",
    "MariaDB"
  ];

  catagorySix: string[] = ["PHP", "C", "React", "JQuery", "Windows"];

  catagoryNew: string[] = [];

  deleteItem: string[] = [];

  newCatagory: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.deleteItem = [];
    }
  }
  newItem(pushed: string): void {
    pushed = pushed.trim();
    if (pushed) {
      this.catagoryNew.push(pushed);
      console.log("abc");
    }
    pushed = "";
    console.log("abcd");
  }

  newCat(add: string): void {
    add = add.trim();
    if (add) {
      this.titleCat.push(add);
      console.log("asd");
    }
    add = "";
  }
}
