<script setup lang="ts">
import { ItemRarity } from '~/data/constants';
import type { Item } from '~/data/items';
const props = defineProps<{
  item: Item
}>();
// const rarityClass = computed(() => {
//   switch (props.item.itemRarity) {
//     case ItemRarity.EQUIPMENT:
//       return '.equipment-colour-normal';
//     default:
//       return `item-colour-${props.item.itemRarity.description?.toLowerCase()}`;
//   }
// });
const itemClass = computed(() => ({
  [ItemRarity.COMMON]: 'bg-common/20 border-common',
  [ItemRarity.UNCOMMON]: 'bg-uncommon/20 border-uncommon',
  [ItemRarity.LEGENDARY]: 'bg-legendary/20 border-legendary',
  [ItemRarity.VOID]: 'bg-void/20 border-void',
  [ItemRarity.BOSS]: 'bg-boss/20 border-boss',
  [ItemRarity.LUNAR]: 'bg-lunar/20 border-lunar',
  [ItemRarity.EQUIPMENT]: 'bg-equipment/20 border-equipment',
}[props.item.itemRarity]));
const itemBgClass = computed(() => ({
  [ItemRarity.COMMON]: 'item-bg-common border-common',
  [ItemRarity.UNCOMMON]: 'item-bg-uncommon border-uncommon',
  [ItemRarity.LEGENDARY]: 'item-bg-legendary border-legendary',
  [ItemRarity.VOID]: 'item-bg-void border-void',
  [ItemRarity.BOSS]: 'item-bg-boss border-boss',
  [ItemRarity.LUNAR]: 'item-bg-lunar border-lunar',
  [ItemRarity.EQUIPMENT]: 'item-bg-equipment border-equipment',
}[props.item.itemRarity]));
</script>

<template>
  <div flex border-2 :class="itemClass">
    <div :class="itemBgClass" w="80px" border-r-2>
      <img :src="item.image" :alt="item.name">
    </div>
    <div w-full text-left ml-4>
      <p font-bold text-sm>
        {{ item.name }}
      </p>
      <p text-xs>
        {{ item.shortDescription }}
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Setting colours for different rarities */
/* Setting colours for different rarities */
.item-colour-common {
  --item-card-colour: #96A6A6;
  --item-card-colour-opaque: rgba(199, 204, 206, var(--background-opacity));
}
.item-colour-uncommon {
  --item-card-colour: #71BC39;
  --item-card-colour-opaque: rgba(113, 188, 57, var(--background-opacity));
}
.item-colour-legendary {
  --item-card-colour: #DF4D39;
  --item-card-colour-opaque: rgba(223, 77, 57, var(--background-opacity));
}
.item-colour-void {
  --item-card-colour: #C678B4;
  --item-card-colour-opaque: rgba(198, 120, 180, var(--background-opacity));
}
.item-colour-boss {
  --item-card-colour: #AEBA23;
  --item-card-colour-opaque: rgba(174, 186, 35, var(--background-opacity));
}
.item-colour-lunar, .equipment-colour-lunar {
  --item-card-colour: #36B8E0;
  --item-card-colour-opaque: rgba(54, 184, 224, var(--background-opacity));
}
.equipment-colour-normal, .equipment-colour-elite {
  --item-card-colour: #C78536;
  --item-card-colour-opaque: rgba(199, 133, 54, var(--background-opacity));
}

/* .item-icon {
  background: radial-gradient(var(--item-card-colour), #222222);
} */
</style>
