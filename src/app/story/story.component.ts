import { Component, OnInit } from '@angular/core';

export class Story{
  description: any;
  postImage: any;
}

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  story: Story[] | any;
  constructor() { }

  ngOnInit(): void {
  }

  saveStory(){
    
  }
}
