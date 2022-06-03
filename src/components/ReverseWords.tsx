const ReverseWords = () => {
  const reverseWords = (str: string) => {
    return str
      .split(" ")
      .map((text) => text.split("").reverse().join(""))
      .join(" ");
  };

  return (
    <>
      Complete the function that accepts a string parameter, and reverses each
      word in the string. All spaces in the string should be retained. <br /><br />

      The quick brown fox jumps over the lazy dog. = { reverseWords('The quick brown fox jumps over the lazy dog.') }<br />
      apple = { reverseWords('apple') }<br />
      a b c d = { reverseWords('a b c d') }<br />
      double  spaced  words = { reverseWords('double  spaced  words') }
    </>
  );
};

export default ReverseWords;
