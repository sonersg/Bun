// write
const data = "I love JavaScript";
await Bun.write("output.txt", data);

// read
const file = await Bun.file("output.txt");
console.log(file.size);
console.log(await file.text());
console.log(await file.stream());
console.log(await file.arrayBuffer());
