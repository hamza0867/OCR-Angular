import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/models/post";

@Component({
    selector: "app-post",
    templateUrl: "./post.component.html",
    styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
    @Input() post: Post;
    constructor() {}

    ngOnInit() {}

    onLike() {
        this.post.love();
    }

    onDislike() {
        this.post.hate();
    }
}
