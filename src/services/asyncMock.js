const productos = [
    {
      title: "Nike Phantom GT",
      id: 1,
      limit: 5,
      description: "Botin de alta calidad para un mejor desempeño",
      img: "https://i.ibb.co/mFZ0K8Z/NI-CW6667-160-1.jpg",
      price: 90000,
      category: "indumentaria",
    },
    {
      title: "Nike Mercurial Vapor XV Air Zoom",
      id: 2,
      stock: 8,
      description: "Botin de alta calidad para un mejor desempeño",
      img: "https://i.ibb.co/G0jdt3f/Whats-App-Image2022-10-17at5-33-41-PM-grande.webp",
      price: 95000,
      category: "calzado",
    },
    {
      title: "Nike Mercurial Superfly",
      id: 3,
      stock: 3,
      description: "Botin de alta calidad para un mejor desempeño",
      img: "https://i.ibb.co/6nGkQ0F/NI-AT5382-906-1.jpg",
      price: 100000,
      category: "indumentaria",
    },
    {
      title: "Nike Mercurial Vapor 14",
      id: 4,
      stock: 2,
      description: "Botin de alta calidad para un mejor desempeño",
      img: "https://i.ibb.co/WVTB29H/NI-CU5691-403-1.jpg",
      price: 93000,
      category: "indumentaria",
    },
    {
      title: "Nike Tiempo Legend",
      id: 5,
      stock: 5,
      description: "Botin de alta calidad para un mejor desempeño",
      img: "https://i.ibb.co/qYv4yWH/697902-800-auto.webp",
      price: 80000,
      category: "indumentaria",
    },
    {
      title: "Nike Legend Elite",
      id: 6,
      stock: 8,
      description: "Botin de alta calidad para un mejor desempeño",
      img: "https://i.ibb.co/GJ2Sjrf/5e85eb01a9b3b-484950-500x500.jpg",
      price: 75000,
      category: "calzado",
    },
    {
      title: "Nike Mercurial Superfly Elite",
      id: 7,
      stock: 3,
      description: "Botin de alta calidad para un mejor desempeño",
      img: "https://i.ibb.co/60nnfJ6/tenis-de-futbol-nike-mercurial-superfly-elite-cr7-fg-is-AJ3547-600-3.jpg",
      price: 90000,
      category: "indumentaria",
    },
    {
      title: "Nike Phantom Gt2",
      id: 8,
      stock: 2,
      description: "Botin de alta calidad para un mejor desempeño",
      img: "https://i.ibb.co/Dfxm9Wy/NI-DH9638-407-1.jpg",
      price: 110000,
      category: "indumentaria",
    },
  ];
  const getData = () => {
    return new Promise((resolve, reject) => {
  setTimeout(() => {
    const date = new Date().toLocaleDateString;
    resolve(productos, date);
  }, 2000);
});
}

export const getProductData = (idURL) => {
  return new Promise((resolve, reject) => {
    const productRequested = productos.find(
      (item) => item.id === Number(idURL)
    );

    setTimeout(() => {
      resolve(productRequested);
    }, 2000);
  });
}
export const getCategory = (categoryData) => {
  return new Promise((resolve) => {
    const userCategory = productos.filter((item) => {
      return item.categoryId === categoryData;
    });

    setTimeout(() => {
      resolve(userCategory);
    },200);
  });
}

  export default getData;