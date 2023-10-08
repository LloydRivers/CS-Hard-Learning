function whatIsInAName(collection, source) {
  const newArray = [];
  for (let index = 0; index < collection.length; index++) {
    const collectionObject = collection[index];

    let isComplete = false;
    for (const key in source) {
      if (
        collectionObject.hasOwnProperty(key) &&
        source[key] === collectionObject[key]
      ) {
        isComplete = true;
      } else {
        isComplete = false;
        break;
      }
    }
    isComplete && newArray.push(collectionObject);
  }
  return newArray;
}

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);
