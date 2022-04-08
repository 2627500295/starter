import { execSync } from "child_process";

// import dayjs from "dayjs";

export function exec(command: string) {
  return execSync(command).toString().trim();
}

// function padStart(str: string | number, length: number, pad: string) {
//   const s = String(str);
//   if (!s || s.length >= length) return str;
//   return s.padStart(length, pad);
// }

// function getTimeZone(date: any) {
//   // Because a bug at FF24, we're rounding the timezone offset around 15 minutes
//   // https://github.com/moment/moment/pull/1871
//   const $d = new Date(date);
//   var negMinutes = Math.round($d.getTimezoneOffset() / 15) * 15;
//   var minutes = Math.abs(negMinutes);
//   const hourOffset = Math.floor(minutes / 60);
//   const minuteOffset = minutes % 60;
//   const prefix = negMinutes <= 0 ? "+" : "-";
//   const hour = padStart(hourOffset, 2, "0");
//   const minute = padStart(minuteOffset, 2, "0");
//   return `${prefix}${hour}${minute}`;
// }

export const commit = {
  id: {
    long: exec("git show -s --format=%H"),
    short: exec("git show -s --format=%h"),
  },
  author: {
    name: exec("git show -s --format=%cn"),
    mail: exec("git show -s --format=%ce"),
  },
  date: exec("git show -s --format=%cd"),
};
