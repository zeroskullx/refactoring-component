const useText = () => {
  const boxTextX = "Hello, box X!";
  const boxTextY = "Hello, box Y!";
  const boxTextZ = "Hello, box Z!";
  const boxTextN = "Hello, box N!";

  const getText = (to: "X" | "Y" | "Z") => {
    switch (to) {
      case "X":
        return boxTextX;

      case "Y":
        return boxTextY;

      case "Z":
        return boxTextZ;

      default:
        return boxTextX;
    }
  };

  return { getText };
};

export { useText };
