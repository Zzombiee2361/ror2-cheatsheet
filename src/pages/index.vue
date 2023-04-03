<script setup>
import { allItems } from '~/data/items';
</script>

<template>
  <div>
    <div w="5/6" grid grid-cols-3 gap-2>
      <ItemCard v-for="(item, i) in allItems" :key="i" :item="item" />
    </div>
    <div w="1/6" />
  </div>
</template>
