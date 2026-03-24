import { registrerBrukere } from "../models/authModels.js";
import { loggInnBruker } from "../models/authModels.js";
import { hashThePassword } from "../services/authService.js";
import { checkHashedPassord } from "../services/authService.js";

export async function registrer(req, res)
{
    const {regBrukernavn, regPassord} = req.body;

    console.log("authController brukernavn: ", regBrukernavn);
    console.log("authController passord: ", regPassord);

    const hashPassord = await hashThePassword(regPassord);

    console.log("authController hashPassord", hashPassord);

    const { data: registrerBruker } = await registrerBrukere(regBrukernavn, hashPassord);

    console.log("authController test levering av database", registrerBruker);

    if(registrerBruker)
    {
        console.log("authConstroller registrer: Bruker registrert");
        return res.json({ success: true });
    }
    else
    {
        console.log("authController registrer: Bruker ikke registrert");
        return res.json({ success: false });
    }   
}


export async function logginn(req, res)
{
    const {loggBrukernavn, loggPassord} = req.body;

    console.log("authController loggBrukernavn: ", loggBrukernavn);
    console.log("authController loggPassord: ", loggPassord);

    const { data: loggBrukere } = await loggInnBruker(loggBrukernavn, loggPassord);

    console.log("authController loggBrukere (info fra database)", loggBrukere);

    const sjekketPassord = await checkHashedPassord(loggPassord, loggBrukere.Passord);

    console.log("authController sjekk passord", sjekketPassord);

    if(sjekketPassord.success === true)
    {
        console.log("authConstroller: Bruker logget inn");
        return res.json({ success: true });
    }
    else
    {
        console.log("authController: Bruker ikke logget inn");
        return res.json({ success: false });
    }   
}
