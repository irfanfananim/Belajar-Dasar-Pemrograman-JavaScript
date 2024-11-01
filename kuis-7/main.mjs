// const age = 23;
// const name = 'Alan';
// let username = 'Mac Allister';
// console.log(`Aku adalah ${name},usiaku ${age}`);
// console.log(username);
// username = 'John';

// console.log(`sudah diubah jadi ${username}`);

// const currentYear = new Date().getFullYear();
// const year = `sekarang tahun ${currentYear}`;

// console.log(year);

// const number = 123;
// const bol = false;

// const numtoStr = String(number);
// const boltoStr = bol.toString();

// console.log(numtoStr);
// console.log(boltoStr);

// const currency = "IDR";
// const value = 10000;

// console.log(currency + " " + value);


// // TODO: buatlah variabel (konstan) bernama `currency` dan isi dengan nilai "IDR".
// const currency = "IDR";
// console.log(currency);

// // TODO: buatlah variabel bernama `value` dan isi dengan nilai 10000.
// const value = 10000;
// console.log(value);

// // TODO: tambahkan nilai di dalam variabel `value` sebesar 5000.
// const newValue = value + 5000;
// console.log(newValue);

// /**
//  * TODO: buatlah variabel (konstan) bernama `money`,
//  * isi dengan penambahan string dari nilai `currency` + " " + `value`.
//  */
// const money = currency + "" + value;
// console.log(money);

// number('20px');
// console.log(number);

// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//       break;
//     }
//     console.log(i);
//   }

// class Animal {
//   constructor(name, age, isMammal) {
//     this.name = name;
//     this.age = age;
//     this.isMammal = isMammal;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age) {
//     super(name, age, true);
//   }

//   eat() {
//     return `${this.name} sedang makan!`;
//   }
// }

// class Eagle extends Animal {
//   constructor(name, age) {
//     super(name, age, false);
//   }

//   fly() {
//     return `${this.name} sedang terbang!`;
//   }
// }

// const myRabbit = new Rabbit("Labi", 2);
// const myEagle = new Eagle("Elo", 4);

// console.log(myRabbit.eat());
// console.log(myEagle.fly());


const sampleProducts = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
    { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
    { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
    { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
  ];
  
  function getProductsByCategory(products, category) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk mengembalikan array produk yang termasuk dalam kategori yang diberikan.
     */
    return products.filter(product => product.category === category);
  }
  
  function findProductById(products, id) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk mengembalikan produk dengan ID yang cocok.
     */
    return products.find(product => product.id === id);
  }
  
  function calculateTotalPrice(products) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk menghitung total harga semua produk.
     */
    return products.reduce((total, products) => total + products.price, 0);
  }
  
  function applyDiscount(products, discount) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk mengembalikan array baru,
     * di mana setiap produk memiliki harga yang sudah dikurangi dengan diskon yang diberikan.
     */
    return products.map(product => ({
      ...product,
      price: product.price * (1 - discount / 100)
    }));
  }
  
  console.log(getProductsByCategory(sampleProducts, 'Electronics')); // Should return products with id 1 and 2
  console.log(calculateTotalPrice(sampleProducts)); // Should return 1830
  console.log(applyDiscount(sampleProducts, 10)); // Should return products with prices reduced by 10%
  console.log(findProductById(sampleProducts, 3)); // Should return the product with id 3
  