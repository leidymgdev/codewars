const ReduceButGrow = () => {
  const grow = (x: number[]) => {
    let multiplier: number = Number(x.shift());
    x.map((item: number) => (multiplier *= item));
    return multiplier;
  };
  return (
    <>
      Given a non-empty array of integers, return the result of multiplying the
      values together in order. <br /> <br />
      { [1, 2, 3] } = { grow([1, 2, 3]) } <br />
      { [4, 1, 1, 1, 4] } = { grow([4, 1, 1, 1, 4]) } <br />
      { [2, 2, 2, 2, 2, 2] } = { grow([2, 2, 2, 2, 2, 2]) } <br />
    </>
  );
};

export default ReduceButGrow;
