const FunctionInAFunction = () => {
  const always = (n: Number) => {
    return () => n;
  };

  const three = always(3);
  return (
    <>
      Given an input n, write a function always that returns a function which
      returns n. <br /><br />
      {three()}
    </>
  );
};

export default FunctionInAFunction;
