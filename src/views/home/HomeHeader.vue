<template>
    <div class="header-background">
        <h1 class="header-text">Olá, Felipe!</h1>
        <div class="low-border"></div>
    </div>
</template>

<style scoped>
    .header-background {
        background-color: var(--color-primary);
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .header-text {
        color: white;
        padding-left: 10px;
        margin-bottom: 10px;
    }
    .low-border {
        background-color: white;
        border-radius: 15px 15px 0 0;
        height: 15px;
    }
</style>