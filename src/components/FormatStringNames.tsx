const FormatStringNames = () => {
  interface IName {
    name: string;
  }

  const stringNames = (names: IName[]) => {
    let namesString = "";

    if (!names.length) return namesString;

    const lastName = names.pop();

    namesString = names.map((item: IName) => item.name).join(", ");

    namesString += namesString === "" ? lastName?.name : " & " + lastName?.name;

    return namesString;
  };

  return (
    <>
      <span>Given: an array containing hashes of names</span> <br />
      <span>
        Return: a string formatted as a list of names separated by commas except
        for the last two names, which should be separated by an ampersand.
      </span>{" "}
      <br /> <br />
      {stringNames([
        { name: "Bart" },
        { name: "Lisa" },
        { name: "Maggie" },
      ])}{" "}
      <br />
      {stringNames([{ name: "Bart" }, { name: "Lisa" }])} <br />
      {stringNames([{ name: "Bart" }])} <br />
      {stringNames([])}
    </>
  );
};

export default FormatStringNames;
