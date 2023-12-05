console.log("Hello world!");
let blogPost = {
  title: "My first blog post",
  author: {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "This is my blog post about learning objects and arrays.",
};
console.log(blogPost.author.name);
console.log(blogPost.tags[0]);
console.log(blogPost.tags.length);
console.log(
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
);
let text = "";
for (let i = 0; i < blogPost.tags.length; i++) {
  text = text + `${blogPost.tags[i]} `;
}
console.log(text);
console.log(`Tags for post "${blogPost.title}":`);
for (let tag of blogPost.tags) {
  console.log(tag);
}
