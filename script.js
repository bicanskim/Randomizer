function generisi() {
            const min = parseInt(document.getElementById("min").value);
            const max = parseInt(document.getElementById("max").value);
            const tip = document.querySelector('input[name="tip"]:checked').value;
            const rezultatEl = document.getElementById("rezultat");
            const opisEl = document.getElementById("opis");
            const btn = document.getElementById("btn");

            if (isNaN(min) || isNaN(max) || min > max) {
                alert("Unesi validan opseg!");
                return;
            }

            let brojevi = [];
            for (let i = min; i <= max; i++) {
                if (
                    tip === "svi" ||
                    (tip === "parni" && i % 2 === 0) ||
                    (tip === "neparni" && i % 2 !== 0)
                ) {
                    brojevi.push(i);
                }
            }

            if (brojevi.length === 0) {
                alert("Nema brojeva za izabrane uslove!");
                return;
            }

            btn.disabled = true;

            let brojac = 0;

            const interval = setInterval(() => {
                const randomIndex = Math.floor(Math.random() * brojevi.length);
                rezultatEl.textContent = brojevi[randomIndex];

                rezultatEl.classList.add("animacija");
                setTimeout(() => rezultatEl.classList.remove("animacija"), 100);

                brojac++;

                if (brojac > 10) {
                    clearInterval(interval);

                    const finalIndex = Math.floor(Math.random() * brojevi.length);
                    const broj = brojevi[finalIndex];

                    rezultatEl.textContent = broj;
                    opisEl.textContent = "Izvučen broj: " + broj;

                    btn.disabled = false;
                }

            }, 100);
        }
