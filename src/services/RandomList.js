export function getRandomItems(list, count) {
    if (count > list.length) {
        throw new Error("El recuento solicitado es mayor que el tamaño de la lista.");
    }
    const shuffled = list.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}