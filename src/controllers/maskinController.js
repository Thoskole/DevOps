import { registrerMaskiner } from "../models/maskinModels.js";
import { hentMaskinListe } from "../models/maskinModels.js";

export async function regMaskin(req, res)
{
    const {regMaskinNavn, regSerienummer} = req.body;

    console.log("maskinController maskinnavn: ", regMaskinNavn);
    console.log("maskinController serienummer: ", regSerienummer);


    const { data: registrerMaskin } = await registrerMaskiner(regMaskinNavn, regSerienummer);

    console.log("maskinController test levering av database", registrerMaskin);

    if(registrerMaskin)
    {
        console.log("maskinController registrer: Maskin registrert");
        return res.json({ success: true });
    }
    else
    {
        console.log("maskinController registrer: Maskin ikke registrert");
        return res.json({ success: false });
    }   
}

export async function listMaskin(req, res)
{
    const {maskinListe} = req.body;

    console.log("maskinController maskinliste: ", maskinListe);


    const { data: hentListe } = await hentMaskinListe(maskinListe);

    console.log("maskinController test levering av database", hentListe);

    if(hentListe)
    {
        console.log("maskinController maskin liste: Liste hentet");
        return res.json({ success: true, hentListe });
    }
    else
    {
        console.log("maskinController registrer: Liste ikke hentet");
        return res.json({ success: false });
    }   
}