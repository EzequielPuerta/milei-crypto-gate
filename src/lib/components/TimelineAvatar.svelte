<script lang="ts">
    import { Avatar as FlowbiteAvatar, Tooltip } from 'flowbite-svelte';
    import type { AvatarConfig } from './Avatar';
    
    export let avatar: AvatarConfig;
</script>

<span class="timeline-item-avatar">
    <FlowbiteAvatar data-name={avatar.name} src={avatar.src}/>
    <Tooltip>{avatar.name}</Tooltip>
</span> 

<style>
    .timeline-item-avatar {
        display: flex;
        position: absolute;
        left: -0.75rem;
        justify-content: center;
        align-items: center;
        width: 1.5rem;
        height: 1.5rem;
        background-color: var(--primary-200);
        border-radius: 9999px;
        box-shadow: 0 0 0 2px white;
        /* Dark mode styles */
        --tw-ring-color: var(--gray-900);
        --tw-bg-opacity: 1;
        background-color: var(--primary-900);
    }
</style>