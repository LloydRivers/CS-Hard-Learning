class HashMap {
  hashMap: string[];
  constructor(size: number) {
    this.hashMap = new Array(size).fill(null);
  }

  hash(key: string) {
    let hashCode = 0;

    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode % this.hashMap.length;
  }

  assign(key: string, value: string) {
    const index: number = this.hash(key);
    this.hashMap[index] = value;
  }

  retrieve(key: string) {
    const index = this.hash(key);
    return this.hashMap[index];
  }
}

const glossary = new HashMap(3);
glossary.assign("semordnilap", "Words that form different words when reversed");
console.log(glossary.hashMap);
