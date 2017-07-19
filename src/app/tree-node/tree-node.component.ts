import { Component, Input, OnInit } from '@angular/core';

@Component({
  	selector: 'tree-node',
  	template : `
  		<div *ngFor="let node of node.children" [class]="node.layout">
			<div>{{node.name}}</div>
			<tree-node  [node]="node"></tree-node>	
		</div>`,
	styles: [`
		.row{
			display : flex;
			flex-direction : row;
			border : 1px solid orange;
		}
		.column{
			display : flex;
			flex-direction : column;
			border : 1px solid cornflowerblue;
		}
		`
	]  
})
export class TreeNodeComponent implements OnInit{

  constructor() { }

  @Input() node : any;

  ngOnInit(){
  	console.log(this.node);
  }

}
