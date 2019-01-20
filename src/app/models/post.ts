export class Post {
    constructor(
        private title: string,
        private content: string,
        private loveIts: number,
        private created_at: Date
    ) {
        this.loveIts = 0;
    }

    public love() {
        this.loveIts += 1;
    }

    public hate() {
        this.loveIts -= 1;
    }

    public getLoveIts() {
        return this.loveIts;
    }
}
