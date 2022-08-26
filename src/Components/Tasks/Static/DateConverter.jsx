export const ShowTime = (deadline) => {
  let milliseconds = Number(deadline.deadline);
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString().split(",")[0];
  if (humanDateFormat) {
    return humanDateFormat;
  } else {
    return "-";
  }
};
