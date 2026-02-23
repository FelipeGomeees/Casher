<template>
    <div class="surface-stack">
        <slot />
    </div>
</template>

<style scoped>
  .surface-stack {
    border: var(--border-width-md) solid var(--border-color);
    border-radius: var(--radius-lg);
    overflow: hidden;
  }

  .surface-stack > * {
    padding: var(--padding-md);
    border-bottom: var(--border-width-md) solid var(--border-color);
  }

  .surface-stack > *:last-child {
    border-bottom: none;
  }
</style>