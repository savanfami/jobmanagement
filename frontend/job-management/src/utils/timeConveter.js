export const getTimeAgo = (timestamps) => {
  const now = new Date();
  const past = new Date(timestamps);
  const diff = now - past;
  const diffsec = Math.floor(diff / 1000);

  if (diffsec < 60) {
    return `${diffsec} seconds Ago`;
  } else if (diffsec < 3600) {
    const minutes = Math.floor(diffsec / 60);
    return `${minutes} min${minutes > 1 ? " " : ""}Ago`;
  } else if (diffsec < 86400) {
    const hours = Math.floor(diffsec / 3600);
    return `${hours} h${hours > 1 ? "" : " "} Ago`;
  } else {
    const days = Math.floor(diffsec / 86400);
    return `${days} day${days > 1 ? "" : " "} Ago`;
  }
};
