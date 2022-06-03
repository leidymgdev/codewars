const FunctionalAddition = () => {
  const add = (n: number) => {
    return (n2: number) => n + n2;
  };

  const addOne = add(1);
  const addThree = add(3);

  return (
    <>
      Create a function add(n)/Add(n) which returns a function that always adds
      n to any number. <br /> <br />
      { addOne(3) } <br />
      { addThree(3) }
    </>
  );
};

export default FunctionalAddition;
