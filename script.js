const googleFormUrl = "";
const phone = "5521992600261";
const message = [
  "Oi, Leandro e Marta! Tenho uma dúvida sobre o aniversário do Théo.",
  "",
  "Nome:"
].join("\n");

const rsvpLink = document.querySelector("#rsvp-link");
const whatsappLink = document.querySelector("#whatsapp-link");
const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

if (rsvpLink && googleFormUrl) {
  rsvpLink.href = googleFormUrl;
} else if (rsvpLink) {
  rsvpLink.href = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent([
    "Oi, Leandro e Marta! Confirmo presença no aniversário do Théo.",
    "",
    "Nome:",
    "Adultos:",
    "Crianças:"
  ].join("\n"))}`;
}

if (whatsappLink) {
  whatsappLink.href = whatsappUrl;
}

const loader = document.querySelector("#race-loader");
const inviteVideo = document.querySelector(".invite-video");
const soundToggle = document.querySelector("#sound-toggle");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const playInviteVideo = async () => {
  if (!inviteVideo) return;

  try {
    await inviteVideo.play();
  } catch {
    soundToggle?.classList.remove("is-hidden");
  }
};

const finishIntro = async () => {
  document.body.classList.remove("intro-active");
  document.body.classList.add("ready");
  loader?.classList.add("is-done");

  if (inviteVideo) {
    inviteVideo.currentTime = 0;
    inviteVideo.muted = true;
    await playInviteVideo();
  }
};

const startRaceIntro = async () => {
  if (!loader) {
    await finishIntro();
    return;
  }

  await sleep(2600);
  loader.classList.add("lights-phase");
  await sleep(420);
  loader.classList.add("red-one");
  await sleep(620);
  loader.classList.add("red-two");
  await sleep(620);
  loader.classList.add("red-three");
  await sleep(760);
  loader.classList.add("go");
  await sleep(760);
  await finishIntro();
};

window.addEventListener("load", () => {
  startRaceIntro();
});

soundToggle?.addEventListener("click", async () => {
  if (!inviteVideo) return;

  inviteVideo.muted = false;
  await playInviteVideo();
  soundToggle.classList.add("is-hidden");
});

document.querySelector(".scroll-cue")?.addEventListener("click", () => {
  document.querySelector(".details")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

const countdown = document.querySelector("#countdown");
const partyDate = new Date("2026-07-25T13:00:00-03:00");
const now = new Date();
const diff = partyDate.getTime() - now.getTime();
const oneDay = 24 * 60 * 60 * 1000;

if (countdown && diff > oneDay) {
  const days = Math.ceil(diff / oneDay);
  countdown.textContent = `Faltam ${days} dias para a largada.`;
} else if (countdown && diff > 0) {
  countdown.textContent = "É amanhã a nossa largada.";
} else if (countdown) {
  countdown.textContent = "Hoje é dia de festa.";
}
