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
		children: [
	    	{	
	    		name: 'a', 
	    		children: [
		    		{	name: 'a', children: []},
		    		{	name: 'b', children: []},
		    		{	
		    			name: 'c', 
		    			children: [
		      				{	name: 'd', children: []},
		      				{	name: 'e', children: []},
		      				{	name: 'f', children: []},
		     			]
		     		}
		     	]
		    },
	    	{name: 'b', children: []},
	    	{
	    		name: 'c', 
	    		children: [
	      			{name: 'd', children: []},
	      			{name: 'e', children: []},
	      			{name: 'f', children: []},
	     		]
	     	}
		]
	};  
}
