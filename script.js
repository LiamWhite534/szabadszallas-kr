// ORFK RP - Szabadszállás KR Web Script
// alap UI funkciók + kis interaktivitás

document.addEventListener("DOMContentLoaded", () => {

  // 🚨 üdvözlő konzol üzenet
  console.log("ORFK RP Weboldal betöltve ✔");

  // 📰 smooth scroll menü (csak # linkekhez)
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      if (!href.startsWith("#")) return;

      e.preventDefault();

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // 🔔 hivatalos értesítés (egyszer)
  setTimeout(() => {
    alert("📢 ORFK RP: Üdvözlünk a Szabadszállás Készenléti Rendőrség portálon!");
  }, 1200);

});
