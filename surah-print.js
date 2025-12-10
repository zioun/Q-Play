const container = document.getElementById("surahList");

surahs.forEach(surah => {
  const card = document.createElement("div");
  card.classList.add("card");

  // যদি complete থাকে তাহলে gold class যোগ হবে
  if (surah.complete === "done") {
    card.classList.add("gold");
  }

  card.innerHTML = `
    <a class="play-icon" href="${surah.link}"><i class="fa-regular fa-circle-play"></i></a>
    <h3>${surah.surah_number}. ${surah.name}</h3>
    <p>Ayat: ${surah.ayat_count}</p>
    <p>Status: ${surah.complete ? surah.complete : "pending"}</p>
  `;

  container.appendChild(card);
});