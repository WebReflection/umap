const umap = require('../cjs');

const map = umap(new Map);
console.assert(
  (map.get(1) || map.set(1, Math.random())) ===
  (map.get(1) || map.set(1, Math.random())),
  'a very common pattern I have with Map instances'
);

const weakMap = umap(new WeakMap);
console.assert(
  (weakMap.get(map) || weakMap.set(map, Math.random())) ===
  (weakMap.get(map) || weakMap.set(map, Math.random())),
  'which I use even more with WeakMap instances'
);
