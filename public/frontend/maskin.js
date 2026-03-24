async function regMaskin() {
    const regMaskinNavn = document.getElementById("maskinNavn").value;
    const regSerienummer = document.getElementById("serienummer").value;

    const maskinStatusMsg = document.getElementById("regStatus");

    console.log("Dette er maskinnavnet som er skrevet inn:", regMaskinNavn);
    console.log("Dette er serienummeret som er skrevet inn:", regSerienummer);

    if (!regMaskinNavn || !regSerienummer) {
        console.log("mangler maskinnavn eller serienummer");
    }


    try {
        const maskinReq = await fetch("http://localhost:3000/api/maskin/regMaskin",
            {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ regMaskinNavn, regSerienummer })
            });

        const maskinRes = await maskinReq.json();
        console.log(maskinRes);

        if (maskinRes.success === true) {
            maskinStatusMsg.textContent = "Maskin registrert";
            maskinStatusMsg.style.color = "green";
        }
        else {
            maskinStatusMsg.textContent = "Maskin ikke registrert";
            maskinStatusMsg.style.color = "red";
        }
    }
    catch (error) {
        console.log("try virket ikke");
    }
}

async function listMaskin() {
    const maskinListe = document.getElementById("maskinDiv");

    try {
        const listeReq = await fetch("http://localhost:3000/api/maskin/listMaskin",
            {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ maskinListe })
            });

        const listeRes = await listeReq.json();

        if (listeRes.success === true) {
            maskinListe.textContent = listeRes.hentListe;
        }
        else {
            maskinListe.textContent = "Maskinliste ikke hentet, noe gikk galt";
            maskinStatusMsg.style.color = "red";
        }
    }
    catch {
        console.log("try virket ikke");
    }
}