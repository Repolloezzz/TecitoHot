import moment from 'moment';
// Obtener el estilo de la hora, para HeroSection
const getStyle = () => {
  const time = moment().hour();
  if (time >= 5 && time <= 10) {
    return 'morning';
  }
  if (time >= 10 && time <= 13) {
    return 'day';
  }
  if (time >= 13 && time <= 16) {
    return 'magic';
  }
  if (time >= 16 && time <= 19) {
    return 'sunset';
  }
  return 'night';
};

export { getStyle };
