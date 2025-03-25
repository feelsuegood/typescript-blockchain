type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  //   Word class assigned as a type
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  static hello() {
    return 'hello';
  }
}

class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

const kimch = new Word('kimchi', '한국의 음식');

const dict = new Dict();

dict.add(kimch);
dict.def('kimchi');
Dict.hello();
