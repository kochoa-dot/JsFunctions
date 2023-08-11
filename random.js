const arr = [1, 2, 3, 4, 5, 6];

Array.prototype.random = function () {
    const totalElements = this.length;
    const randomIndex = Math.floor(Math.random() * totalElements);
    return this[randomIndex];
};

const randomElement = arr.random();
console.log(randomElement);
