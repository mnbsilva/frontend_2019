<template>
    <div 
        class="drawer-toggle" 
        role="button" 
        @click="$emit('toggle')">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
</template>

<style scoped>
.drawer-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 25px;
    width: 25px;
    cursor: pointer;
}

@media (min-with: 768px) {
    .drawer-toggle{
        display: none;
    }
}

.drawer-toggle .bar {
    width: 90%;
    height: 2px;
    background-color: #35495e;
}
</style>


