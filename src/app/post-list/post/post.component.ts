import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Post } from "src/app/models/post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;
  @Output() deletePost = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  onLike() {
    this.post.love();
  }

  onDislike() {
    this.post.hate();
  }

  onDelete() {
    this.deletePost.emit(this.index);
  }
}
