class Comment {
    constructor(content, children = []) {
        this.content = content;
        this.children = children;
    }

    *[Symbol.iterator]() {
        yield this.content;
        for (const child of this.children) {
            yield* child;
        }
    }
}

const children = [
    new Comment("child-01"),
    new Comment("child-02"),
    new Comment("child-03", [new Comment("child-03-01"), new Comment("child-03-02")]),
];

const tree = new Comment("Great post!", children);

const comments = [];
for (const child of tree) {
    comments.push(child);
}

console.log("🚀 ~ comments", comments);
