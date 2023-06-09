/**
 * Generate a random number betwen min and max (inclusive)
 *  */
const random = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export default random;
