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
    ManuelTerronesGodoy: createAvatar("Charles Hoskinson", Photo.ManuelTerronesGodoy),
    EmmanuelDanann: createAvatar("Charles Hoskinson", Photo.EmmanuelDanann),
    OficinaDelPresidente: createAvatar("Charles Hoskinson", Photo.OficinaDelPresidente),
    DavePortnoy: createAvatar("Charles Hoskinson", Photo.DavePortnoy),
    LuisCaputo: createAvatar("Charles Hoskinson", Photo.LuisCaputo),
    PatriciaBullrich: createAvatar("Charles Hoskinson", Photo.PatriciaBullrich),
    JonatanViale: createAvatar("Charles Hoskinson", Photo.JonatanViale),
    DonaldTrump: createAvatar("Charles Hoskinson", Photo.DonaldTrump),
    MelaniaTrump: createAvatar("Charles Hoskinson", Photo.MelaniaTrump),
    MaximilianoFirtman: createAvatar("Charles Hoskinson", Photo.MaximilianoFirtman)
} as const;

export const TimelineAvatar = (avatar: AvatarConfig) => `
    <span class="timeline-item-avatar">
        <Avatar data-name="${avatar.name}" src="${avatar.src}"/>
        <Tooltip>${avatar.name}</Tooltip>
    </span>
`;

export default Avatar; 