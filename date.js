 function showTimePassed() {
      const fixedDate = new Date("2025-09-20T00:00:00"); // Fixed start date
      const now = new Date();

      let diff = now - fixedDate; // difference in milliseconds

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);

      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);

      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);

      const seconds = Math.floor(diff / 1000);

      document.getElementById("date").textContent = 
        `${days}d ${hours}h ${minutes}m ${seconds}s past`;
    }

    // Update every second
    setInterval(showTimePassed, 1000);
    showTimePassed(); // run once immediately