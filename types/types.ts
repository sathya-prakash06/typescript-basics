const today = new Date();

const person = {
  firstName: "Max",
};

class Color {
  red: number;
  green: number;
  blue = "blue";
}

const newColor = new Color();

console.log(newColor.blue);

const apple: string = "apple"; // type annotation

const orange = 1; // type inference

const nothing: null = null;
