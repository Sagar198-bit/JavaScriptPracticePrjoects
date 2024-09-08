const EnddDate = "10 September 2024 12:00 AM";

document.getElementById("SecondsHeadings").innerHTML = EnddDate;

setInterval(() => {
  const NowwDate = new Date();
  const OlddDate = new Date(EnddDate);
  const Milliseconds = OlddDate - NowwDate;
  const Days = Math.floor(Milliseconds / (1000 * 60 * 60 * 24));
  const Hours = Math.floor(Milliseconds / (1000 * 60 * 60)) % 60;
  const Minutes = Math.floor(Milliseconds / (1000 * 60)) % 60;
  const Seconds = Math.floor(Milliseconds / 1000) % 60;

  document.getElementById("FirstSpanBox").innerHTML = Days;
  document.getElementById("SeocondSpanBox").innerHTML = Hours;
  document.getElementById("ThirdSpanBox").innerHTML = Minutes;
  document.getElementById("FourthSpanBox").innerHTML = Seconds;
}, 1000);
