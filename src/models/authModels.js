import { supabase } from "../config/supabase.js";

export async function registrerBrukere(regBrukernavn, hashPassord)
{
    return await supabase
    .from("Brukere")
    .insert([
        {
            Brukernavn: regBrukernavn,
            Passord: hashPassord
        }
    ])
    .select();
}

export async function loggInnBruker(loggBrukernavn, loggPassord)
{
    return await supabase
    .from("Brukere")
    .select("BrukerID, Brukernavn, Passord")
    .eq("Brukernavn", loggBrukernavn)
    .single();
}