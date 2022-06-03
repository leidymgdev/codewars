const Mumbling = () => {
  const accum = (s: string) => {
    const listS = s.split("");
    return listS
      .map(
        (element: string, index: number) =>
          element.toUpperCase() + element.toLowerCase().repeat(index)
      )
      .join("-");
  };

  return (
    <>
      This time no story, no theory. The examples below show you how to write
      function accum: <br /> <br />
      abcd = {accum("abcd")} <br />
      RqaEzty = {accum("RqaEzty")} <br />
      cwAt ={accum("cwAt")}
    </>
  );
};

export default Mumbling;
