// <div class="example-container">
//   <div class="example-list" cdkDropListGroup>
//     <div class="title" (cdkDropListDropped)="drop($event)" cdkDropList [cdkDropListData]="item.name"
//       *ngFor="let item of arrayOfObjects; let i = index">
//       <h3>{{item.title}}</h3>
//       <div class="example-list" *ngFor="let name of item.name" cdkDrag>
//         {{name}}
//       </div>
//     </div>
//   </div>
// </div>

// <div class="newSection">
//   <div class="addItem">
//     <input
//       #pushed
//       type="text"
//       (keyup.enter)="newItem(pushed.value); pushed.value = ''"
//     />

//     <button (click)="newItem(pushed.value); pushed.value = ''">
//       Add new item
//     </button>
//     <div cdkDropList [cdkDropListData]="newArrayofItem" class="title" (cdkDropListDropped)="drop($event)">
//       <div class="example-list" *ngFor="let item of newArrayofItem" cdkDrag>
//         {{item}}
//       </div>
//     </div>
//   </div>
// </div>