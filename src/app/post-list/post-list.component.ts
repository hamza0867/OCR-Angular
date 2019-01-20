import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../models/post";

@Component({
    selector: "app-post-list",
    templateUrl: "./post-list.component.html",
    styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent implements OnInit {
    @Input() private posts: Post[];
    constructor() {}

    ngOnInit() {}
}
