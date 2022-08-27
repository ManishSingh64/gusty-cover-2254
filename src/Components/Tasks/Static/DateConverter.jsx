export const ShowTime = (deadline) => {
  let milliseconds = Number(deadline.deadline);
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString().split(",")[0];

  if (deadline.deadline === undefined) {
    return "-";
  }
  if (humanDateFormat) {
    return humanDateFormat;
  }
};

export const showEditedTime = (deadline) => {
  let milliseconds = Number(deadline.deadline);
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString().split(",")[0];

  if (deadline.deadline === undefined) {
    return "-";
  }
  if (humanDateFormat) {
    return humanDateFormat;
  }
};
