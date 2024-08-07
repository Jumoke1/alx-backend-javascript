export default function createInt8TypedArray(length, position, value){
  if(position >= length){
    throw new Error("Position outside range");
  }
  const range = new DataView(new ArrayBuffer(length), 0, length);
  range.setInt8(position, value);
  return range;
}
