class HyArray extends Array {
  fristname() {
    return this[0]
  }

  lastname() {
    return this[this.length - 1]
  }
}

var arr = new HyArray(1, 2, 3)
console.log(arr.fristname());
