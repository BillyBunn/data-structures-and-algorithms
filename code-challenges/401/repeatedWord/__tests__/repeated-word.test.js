'use strict';

const repeatedWord = require('../repeated-word.js');

describe('repeated-word.js', () => {

  it('returns null if given a string with no repeating words', () => {
    expect(repeatedWord('hello there, my name is billy')).toBe(null);
  });

  it('returns null if given a string with no spaces (only one word)', () => {
    expect(repeatedWord('hellothere,mynameisbillyhello')).toBe(null);
  });

  it('returns an error if called with a non-string as a parameter', () => {
    expect(repeatedWord({hello: 'my name is billy'})).toBe('input must be string');
  });

  it('returns the first repeated word in a lengthy string (sentence)', () => {
    let str1 = 'Once upon a time, there was a brave princess who...';
    let str2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    let str3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

    expect(repeatedWord(str1)).toBe('a');
    expect(repeatedWord(str2)).toBe('it');
    expect(repeatedWord(str3)).toBe('summer');
  });

  it('ignores punctuation and cases in strings passed in', () => {
    let str = '!!hello?? there HELLO_ how do you do?';
    expect(repeatedWord(str)).toBe('hello');
  });

});