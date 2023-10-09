let map = new Map();

map.set('1', 'str')
map.set(2,'num')
map.set(true, 'boolean')

for (const [key, value] of map) {
    console.log(`Ключ — ${key}, значение — ${value}`);
}