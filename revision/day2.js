function subString(str, startIndex, lastIndex) {
  let newString = " ";
  for (let i = 0; i < str.length; i++) {
    if (i >= startIndex && i <= lastIndex) {
      newString = newString + str[i];
    }
  }
  return newString;
}

let result = subString("Deepanshu", 0, 5);
console.log(result);

class Laptop {
  constructor(name, RAM, Processor, SSD) {
    this.name = name;
    this.RAM = RAM;
    this.Processor = Processor;
    this.SSD = SSD;
  }
}

const laptop1 = new Laptop("Asus", "16GB", "i5", 512);
console.log(laptop1);
