import { Photo } from './Photo';
import type { ComponentType } from 'svelte';
import { Avatar as FlowbiteAvatar, Tooltip } from 'flowbite-svelte';

type AvatarConfig = {
    src: string;
    name: string;
    component: ComponentType;
};

const createAvatar = (name: string, src: string): AvatarConfig => ({
    src,
    name,
    component: FlowbiteAvatar
});

export const Avatar = {
    JavierMilei: createAvatar("Javier Milei", Photo.JavierMilei),
    MauricioNovelli: createAvatar("Mauricio Novelli", Photo.MauricioNovelli),
    JulianPeh: createAvatar("Julián Peh", Photo.JulianPeh),
    HaydenMarkDavis: createAvatar("Hayden Mark Davis", Photo.HaydenMarkDavis),
    CharlesHoskinson: createAvatar("Charles Hoskinson", Photo.CharlesHoskinson),
    ManuelTerronesGodoy: createAvatar("Manuel Terrones Godoy", Photo.ManuelTerronesGodoy),
    EmmanuelDanann: createAvatar("Emmanuel Danann", Photo.EmmanuelDanann),
    OficinaDelPresidente: createAvatar("Oficina del Presidente", Photo.OficinaDelPresidente),
    DavePortnoy: createAvatar("Dave Portnoy", Photo.DavePortnoy),
    LuisCaputo: createAvatar("Luis Caputo", Photo.LuisCaputo),
    PatriciaBullrich: createAvatar("Patricia Bullrich", Photo.PatriciaBullrich),
    JonatanViale: createAvatar("Jonatan Viale", Photo.JonatanViale),
    DonaldTrump: createAvatar("Donald Trump", Photo.DonaldTrump),
    MelaniaTrump: createAvatar("Melania Trump", Photo.MelaniaTrump),
    MaximilianoFirtman: createAvatar("Maximiliano Firtman", Photo.MaximilianoFirtman),
    LiliaLemoine: createAvatar("Lilia Lemoine", Photo.LiliaLemoine),
    AgustinLaje: createAvatar("Agustin Laje", Photo.AgustinLaje),
    NicolasPassini: createAvatar("Nicolas Passini", Photo.NicolasPassini),
    ElGordoDan: createAvatar("El Gordo Dan", Photo.ElGordoDan),
    FranFijap: createAvatar("Fran Fijap", Photo.FranFijap),
    SantiagoCaputo: createAvatar("Santiago Caputo", Photo.SantiagoCaputo),
    DiegoSantilli: createAvatar("Diego Santilli", Photo.DiegoSantilli),
    GuillermoFrancos: createAvatar("Guillermo Francos", Photo.GuillermoFrancos),
    AlejandroMelik: createAvatar("Alejandro Melik", Photo.AlejandroMelik),
    Ape: createAvatar("Ape", Photo.Ape),
    HoracioRodriguezLarreta: createAvatar("Horacio Rodriguez Larreta", Photo.HoracioRodriguezLarreta),
    CristinaPerez: createAvatar("Cristina Perez", Photo.CristinaPerez),
    DiogenesCaseres: createAvatar("Diogenes Caseres", Photo.DiogenesCaseres),
    SergioMorales: createAvatar("Sergio Morales", Photo.SergioMorales),
    NancyPazos: createAvatar("Nancy Pazos", Photo.NancyPazos),
    DavidCayon: createAvatar("David Cayón", Photo.DavidCayon),
    KarinaMilei: createAvatar("Karina Milei", Photo.KarinaMilei),
    MariaODonnell: createAvatar("Maria O'Donnell", Photo.MariaODonnell),
    LourdesArrieta: createAvatar("Lourdes Arrieta", Photo.LourdesArrieta),
} as const;

export const TimelineAvatar = (avatar: AvatarConfig) => `
    <span class="timeline-item-avatar">
        <Avatar data-name="${avatar.name}" src="${avatar.src}"/>
        <Tooltip>${avatar.name}</Tooltip>
    </span>
`;

export default Avatar; 