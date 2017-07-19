import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor() {}

	node = {
		name: 'root',
		layout : 'column', 
		children: [
	    	{	
	    		name: 'a',
	    		layout : 'row', 
	    		children: [
		    		{	name: 'a', children: [] },
		    		{	name: 'b', children: [] },
		    		{	
		    			name: 'c',
		    			layout : 'column', 
		    			children: [
		      				{	name: 'd', children: [] },
		      				{	name: 'e', children: [] },
		      				{	name: 'f', children: [] },
		     			]
		     		}
		     	]
		    },
	    	{name: 'b', children: [] },
	    	{
	    		name: 'c',
	    		layout : 'row', 
	    		children: [
	      			{name: 'd', children: [] },
	      			{name: 'e', children: [] },
	      			{name: 'f', children: [] },
	     		]
	     	}
		]
	};  
}
