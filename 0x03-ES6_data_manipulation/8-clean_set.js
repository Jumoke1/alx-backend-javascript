export default function cleanSet(set, startString){
  const str = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== "string"){
    return "";
  }
  for (const value of set.values()){
    if (typeof value === "string" && value.startsWith(startString)) {
      const data = value.substring(startString.length);
        if (data && data !== value) {
          str.push(data);
        }
    }
  } 
  return str.join("-")
}