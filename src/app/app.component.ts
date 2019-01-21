import { Component } from "@angular/core";
import { Post } from "./models/post";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "Posts";
    posts = [];

    ngOnInit() {
        this.initPosts();
    }

    private initPosts() {
        let names = ["Mon premier post", "Mon deuxieme post", "Encore un post"];
        let lorem =
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla porta tortor, in auctor massa consectetur non. Nulla ut libero ut ante semper vehicula. Integer eu eros lacinia, dapibus enim posuere, viverra arcu. Cras pulvinar, nibh non bibendum imperdiet, mi nulla aliquet eros, eu scelerisque arcu arcu eu tortor. Praesent et urna id lacus hendrerit tempus ac in risus. Donec tincidunt tempor libero, vitae varius odio molestie ac. Phasellus a faucibus quam. Aliquam dignissim mi id eros efficitur, nec gravida lectus fringilla. In in feugiat nulla. ";
        function grandom() {
            let res = Math.floor(Math.random() * 41) - 20;
            return res;
        }
        for (let name of names) {
            this.posts.push(new Post(name, lorem, grandom(), new Date()));
        }
    }
}
