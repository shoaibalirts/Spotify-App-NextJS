export default function GetDurationInMinAndSec(miliseconds) {
  let seconds = miliseconds / 1000;
  let minutes = Math.trunc(seconds / 60);
  seconds = Math.floor(seconds % 60);
  return ` ${minutes} : ${seconds}`;
}
