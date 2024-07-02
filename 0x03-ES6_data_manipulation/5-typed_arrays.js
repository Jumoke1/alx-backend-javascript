export default createInt8TypedArray(length, position, value) {
  if (position >= lenght){
    throw new Error("Position outside range");
  }
  const range = new DataView(new ArrayBuffer(length), 0,lenght);
  range.setInt8(positon, value);
  return range;
}
