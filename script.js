const surahs = [
      { "surah_number": 1, "name": "Al-Fatihah", "ayat_count": 7, "complete": "done" },
      { "surah_number": 2, "name": "Al-Baqarah", "ayat_count": 286,},
      { "surah_number": 3, "name": "Al-Imran", "ayat_count": 200,},
      { "surah_number": 4, "name": "An-Nisa", "ayat_count": 176,},
      { "surah_number": 5, "name": "Al-Maidah", "ayat_count": 120 },
      { "surah_number": 6, "name": "Al-Anam", "ayat_count": 165 },
      { "surah_number": 7, "name": "Al-Araf", "ayat_count": 206 },
      { "surah_number": 8, "name": "Al-Anfal", "ayat_count": 75 },
      { "surah_number": 9, "name": "At-Tawbah", "ayat_count": 129 },
      { "surah_number": 10, "name": "Yunus", "ayat_count": 109 },
      { "surah_number": 11, "name": "Hud", "ayat_count": 123 },
      { "surah_number": 12, "name": "Yusuf", "ayat_count": 111 },
      { "surah_number": 13, "name": "Ar-Rad", "ayat_count": 43 },
      { "surah_number": 14, "name": "Ibrahim", "ayat_count": 52 },
      { "surah_number": 15, "name": "Al-Hijr", "ayat_count": 99 },
      { "surah_number": 16, "name": "An-Nahl", "ayat_count": 128 },
      { "surah_number": 17, "name": "Al-Isra", "ayat_count": 111 },
      { "surah_number": 18, "name": "Al-Kahf", "ayat_count": 110 },
      { "surah_number": 19, "name": "Maryam", "ayat_count": 98 },
      { "surah_number": 20, "name": "Ta-Ha", "ayat_count": 135 },
      { "surah_number": 21, "name": "Al-Anbiya", "ayat_count": 112 },
      { "surah_number": 22, "name": "Al-Hajj", "ayat_count": 78 },
      { "surah_number": 23, "name": "Al-Muminun", "ayat_count": 118 },
      { "surah_number": 24, "name": "An-Nur", "ayat_count": 64 },
      { "surah_number": 25, "name": "Al-Furqan", "ayat_count": 77 },
      { "surah_number": 26, "name": "Ash-Shu'ara", "ayat_count": 227 },
      { "surah_number": 27, "name": "An-Naml", "ayat_count": 93 },
      { "surah_number": 28, "name": "Al-Qasas", "ayat_count": 88 },
      { "surah_number": 29, "name": "Al-Ankabut", "ayat_count": 69 },
      { "surah_number": 30, "name": "Ar-Rum", "ayat_count": 60 },
      { "surah_number": 31, "name": "Luqman", "ayat_count": 34 },
      { "surah_number": 32, "name": "As-Sajda", "ayat_count": 30 },
      { "surah_number": 33, "name": "Al-Ahzab", "ayat_count": 73 },
      { "surah_number": 34, "name": "Saba", "ayat_count": 54 },
      { "surah_number": 35, "name": "Fatir", "ayat_count": 45 },
      { "surah_number": 36, "name": "Ya-Sin", "ayat_count": 83 },
      { "surah_number": 37, "name": "As-Saffat", "ayat_count": 182 },
      { "surah_number": 38, "name": "Sad", "ayat_count": 88 },
      { "surah_number": 39, "name": "Az-Zumar", "ayat_count": 75 },
      { "surah_number": 40, "name": "Ghafir", "ayat_count": 85 },
      { "surah_number": 41, "name": "Fussilat", "ayat_count": 54 },
      { "surah_number": 42, "name": "Ash-Shura", "ayat_count": 53 },
      { "surah_number": 43, "name": "Az-Zukhruf", "ayat_count": 89 },
      { "surah_number": 44, "name": "Ad-Dukhan", "ayat_count": 59 },
      { "surah_number": 45, "name": "Al-Jathiya", "ayat_count": 37 },
      { "surah_number": 46, "name": "Al-Ahqaf", "ayat_count": 35 },
      { "surah_number": 47, "name": "Muhammad", "ayat_count": 38 },
      { "surah_number": 48, "name": "Al-Fath", "ayat_count": 29 },
      { "surah_number": 49, "name": "Al-Hujurat", "ayat_count": 18 },
      { "surah_number": 50, "name": "Qaf", "ayat_count": 45 },
      { "surah_number": 51, "name": "Adh-Dhariyat", "ayat_count": 60 },
      { "surah_number": 52, "name": "At-Tur", "ayat_count": 49 },
      { "surah_number": 53, "name": "An-Najm", "ayat_count": 62 },
      { "surah_number": 54, "name": "Al-Qamar", "ayat_count": 55 },
      { "surah_number": 55, "name": "Ar-Rahman", "ayat_count": 78 },
      { "surah_number": 56, "name": "Al-Waqia", "ayat_count": 96 },
      { "surah_number": 57, "name": "Al-Hadid", "ayat_count": 29 },
      { "surah_number": 58, "name": "Al-Mujadila", "ayat_count": 22 },
      { "surah_number": 59, "name": "Al-Hashr", "ayat_count": 24 },
      { "surah_number": 60, "name": "Al-Mumtahina", "ayat_count": 13 },
      { "surah_number": 61, "name": "As-Saff", "ayat_count": 14 },
      { "surah_number": 62, "name": "Al-Jumua", "ayat_count": 11 },
      { "surah_number": 63, "name": "Al-Munafiqun", "ayat_count": 11 },
      { "surah_number": 64, "name": "At-Taghabun", "ayat_count": 18 },
      { "surah_number": 65, "name": "At-Talaq", "ayat_count": 12 },
      { "surah_number": 66, "name": "At-Tahrim", "ayat_count": 12 },
      { "surah_number": 67, "name": "Al-Mulk", "ayat_count": 30 },
      { "surah_number": 68, "name": "Al-Qalam", "ayat_count": 52 },
      { "surah_number": 69, "name": "Al-Haaqqa", "ayat_count": 52 },
      { "surah_number": 70, "name": "Al-Maarij", "ayat_count": 44 },
      { "surah_number": 71, "name": "Nuh", "ayat_count": 28 },
      { "surah_number": 72, "name": "Al-Jinn", "ayat_count": 28 },
      { "surah_number": 73, "name": "Al-Muzzammil", "ayat_count": 20 },
      { "surah_number": 74, "name": "Al-Muddaththir", "ayat_count": 56 },
      { "surah_number": 75, "name": "Al-Qiyama", "ayat_count": 40 },
      { "surah_number": 76, "name": "Al-Insan", "ayat_count": 31 },
      { "surah_number": 77, "name": "Al-Mursalat", "ayat_count": 50 },
      { "surah_number": 78, "name": "An-Naba", "ayat_count": 40 },
      { "surah_number": 79, "name": "An-Naziat", "ayat_count": 46 },
      { "surah_number": 80, "name": "Abasa", "ayat_count": 42 },
      { "surah_number": 81, "name": "At-Takwir", "ayat_count": 29 },
      { "surah_number": 82, "name": "Al-Infitar", "ayat_count": 19 },
      { "surah_number": 83, "name": "Al-Mutaffifin", "ayat_count": 36 },
      { "surah_number": 84, "name": "Al-Inshiqaq", "ayat_count": 25 },
      { "surah_number": 85, "name": "Al-Burooj", "ayat_count": 22 },
      { "surah_number": 86, "name": "At-Tariq", "ayat_count": 17 },
      { "surah_number": 87, "name": "Al-Ala", "ayat_count": 19 },
      { "surah_number": 88, "name": "Al-Ghashiya", "ayat_count": 26 },
      { "surah_number": 89, "name": "Al-Fajr", "ayat_count": 30 },
      { "surah_number": 90, "name": "Al-Balad", "ayat_count": 20 },
      { "surah_number": 91, "name": "Ash-Shams", "ayat_count": 15 },
      { "surah_number": 92, "name": "Al-Lail", "ayat_count": 21 },
      { "surah_number": 93, "name": "Ad-Duha", "ayat_count": 11 },
      { "surah_number": 94, "name": "Ash-Sharh", "ayat_count": 8 },
      { "surah_number": 95, "name": "At-Tin", "ayat_count": 8 },
      { "surah_number": 96, "name": "Al-Alaq", "ayat_count": 19 },
      { "surah_number": 97, "name": "Al-Qadr", "ayat_count": 5 },
      { "surah_number": 98, "name": "Al-Bayyina", "ayat_count": 8 },
      { "surah_number": 99, "name": "Az-Zalzala", "ayat_count": 8 },
      { "surah_number": 100, "name": "Al-Adiyat", "ayat_count": 11 },
      { "surah_number": 101, "name": "Al-Qaria", "ayat_count": 11 },
      { "surah_number": 102, "name": "At-Takathur", "ayat_count": 8 },
      { "surah_number": 103, "name": "Al-Asr", "ayat_count": 3 },
      { "surah_number": 104, "name": "Al-Humaza", "ayat_count": 9 },
      { "surah_number": 105, "name": "Al-Fil", "ayat_count": 5 },
      { "surah_number": 106, "name": "Quraish", "ayat_count": 4 },
      { "surah_number": 107, "name": "Al-Maun", "ayat_count": 7 },
      { "surah_number": 108, "name": "Al-Kawthar", "ayat_count": 3 },
      { "surah_number": 109, "name": "Al-Kafiroon", "ayat_count": 6 },
      { "surah_number": 110, "name": "An-Nasr", "ayat_count": 3 },
      { "surah_number": 111, "name": "Al-Masad", "ayat_count": 5 },
      { "surah_number": 112, "name": "Al-Ikhlas", "ayat_count": 4 },
      { "surah_number": 113, "name": "Al-Falaq", "ayat_count": 5 },
      { "surah_number": 114, "name": "An-Nas", "ayat_count": 6, "complete": "done"}
    ];

    // fucntion

    function calculateProgress(data) {
      let totalAyat = 0;
      let completedAyat = 0;

      data.forEach(surah => {
        totalAyat += surah.ayat_count;
        if (surah.complete === "done") {
          completedAyat += surah.ayat_count;
        }
      });

      const percent = ((completedAyat / totalAyat) * 100).toFixed(2);

      // Progress bar update
      const progressBar = document.getElementById("progressBar");
      progressBar.style.width = percent + "%";
      progressBar.textContent = percent + "%";

      // Stats update
      document.getElementById("stats").textContent =
        `Completed: ${completedAyat} / ${totalAyat} Ayat`;
    }
    // Run on page load
    calculateProgress(surahs);