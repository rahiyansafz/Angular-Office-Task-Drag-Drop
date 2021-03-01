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
  catagoryOne: string[] = ["TypeScript", "Go", "Python", "Rust", "Elixir"];

  catagoryTwo: string[] = [
    "Angular",
    "NestJS",
    "Fastify",
    "Socket.io",
    "Express"
  ];

  catagoryThree: string[] = [
    "Football",
    "Cricket",
    "Tennis",
    "Billiard",
    "Basketball"
  ];

  catagoryFour: string[] = ["Linux", "Docker", "AWS", "Android", "MacOS"];

  catagoryFive: string[] = [
    "Graph search",
    "Selection algorithms",
    "Bellman-Ford Algorithm",
    "QuickSort",
    "HeapSort"
  ];

  catagorySix: string[] = [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Oracle",
    "MariaDB"
  ];

  catagorySeven: string[] = ["PHP", "C", "React", "JQuery", "Windows"];

  catagoryNew: string[] = [];

  deleteItem: string[] = [];

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
}
