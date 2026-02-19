const point = {
  x: 10,
  y: 20,

  print: function() {
    console.log(`Point at (${this.x}, ${this.y})`);
  },
  
  // Same as above
  printPoint() {
    console.log(`Point at (${this.x}, ${this.y})`);
  }
}

point.print(); // Point at (10, 20)
point.printPoint(); // Point at (10, 20)