async function registrer()
{
    const regBrukernavn = document.getElementById("regBrukernavn").value;
    const regPassord = document.getElementById("regPassord").value;

    const regStatusMsg = document.getElementById("regStatus");

    console.log("Dette er brukernavnet som er skrevet inn:", regBrukernavn);
    console.log("Dette er passordet som er skrevet inn:", regPassord);

    if(!regBrukernavn || !regPassord)
    {
        console.log("mangler brukernavn eller passord");
    }
    

    try
    {
        const authReq = await fetch("http://localhost:3000/api/auth/registrer",
        {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({regBrukernavn, regPassord})
        });

        const authRes = await authReq.json();
        console.log(authRes);

        if(authRes.success === true)
        {
            regStatusMsg.textContent = "Bruker registrert";
            regStatusMsg.style.color = "green";
        }
        else
        {
            regStatusMsg.textContent = "Bruker ikke registrert";
            regStatusMsg.style.color = "red";
        }
    }
    catch (error)
    {
        console.log("try virket ikke");
    }
}


async function authenticate()
{
    const loggBrukernavn = document.getElementById("brukernavn").value;
    const loggPassord = document.getElementById("passord").value;

    const loggStatusMsg = document.getElementById("status");

    console.log("Dette er brukernavnet som er skrevet inn:", loggBrukernavn);
    console.log("Dette er passordet som er skrevet inn:", loggPassord);

    if(!loggBrukernavn || !loggPassord)
    {
        console.log("mangler brukernavn eller passord");
    }
    

    try
    {
        const loggReq = await fetch("http://localhost:3000/api/auth/logginn",
        {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({loggBrukernavn, loggPassord})
        });

        const loggRes = await loggReq.json();
        console.log(loggRes);

        if(loggRes.success === true)
        {
            window.location.href = "start";
            loggStatusMsg.textContent = "Bruker funnet!";
            loggStatusMsg.style.color = "green";
        }
        else
        {
            loggStatusMsg.textContent = "Bruker ikke funnet :(";
            loggStatusMsg.style.color = "red";
        }
    }
    catch (error)
    {
        console.log("try virket ikke");
    }
}
