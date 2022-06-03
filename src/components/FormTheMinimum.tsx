const FormTheMinimum = () => {
  const minValue = (values: number[]) => {
    return Number(Array.from(new Set(values)).sort().join(""));
  };

  return (
    <>
      Given a list of digits, return the smallest number that could be formed
      from these digits, using the digits only once (ignore duplicates).
      <br />
      Notes:
      <br />
      Only positive integers will be passed to the function (&gt; 0 ), no
      negatives or zeros.
      <br />
      <br />
      {[1, 3, 1]} = {minValue([1, 3, 1])}
      <br />
      {[4, 7, 5, 7]} = {minValue([4, 7, 5, 7])}
      <br />
      {[4, 8, 1, 4]} = {minValue([4, 8, 1, 4])}
      <br />
      {[5, 7, 9, 5, 7]} = {minValue([5, 7, 9, 5, 7])}
      <br />
      {[6, 7, 8, 7, 6, 6]} = {minValue([6, 7, 8, 7, 6, 6])}
      <br />
      {[5, 6, 9, 9, 7, 6, 4]} = {minValue([5, 6, 9, 9, 7, 6, 4])}
      <br />
      {[1, 9, 1, 3, 7, 4, 6, 6, 7]} = {minValue([1, 9, 1, 3, 7, 4, 6, 6, 7])}
      <br />
      {[3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]} =
      {minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9])}
      <br />
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]} =
      {minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])}
    </>
  );
};

export default FormTheMinimum;
