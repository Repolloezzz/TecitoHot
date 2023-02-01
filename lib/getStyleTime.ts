const getStyle = () => {
  const time = new Date();
  if (time.getHours() >= 5 && time.getHours() <= 10) {
    return "morning";
  }
  if (time.getHours() >= 10 && time.getHours() <= 13) {
    return "day";
  }
  if (time.getHours() >= 13 && time.getHours() <= 16) {
    return "magic";
  }
  if (time.getHours() >= 16 && time.getHours() <= 19) {
    return "sunset";
  }
  return "night";
};

export { getStyle };
