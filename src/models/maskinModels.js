import { supabase } from "../config/supabase.js";

export async function registrerMaskiner(regMaskinNavn, regSerienummer)
{
    return await supabase
    .from("Maskiner")
    .insert([
        {
            Maskin: regMaskinNavn,
            Serienummer: regSerienummer
        }
    ])
    .select();
}

export async function hentMaskinListe() {
    return await supabase
    .from("Maskiner")
    .select("Maskin, Serienummer")
}