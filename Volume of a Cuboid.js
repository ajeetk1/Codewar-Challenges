//Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

// My Solution 

class Kata {
    static getVolumeOfCuboid(length, width, height) {
      let volume = length * width * height;
      return volume;
    }
  }
//
  const Kata = {
    getVolumeOfCuboid : (length, width, height) => length * width * height
  }

  //
  var Kata = (() => {
    this.getVolumeOfCuboid = (l, w, h) => l * w * h;
    return this;
  })();
