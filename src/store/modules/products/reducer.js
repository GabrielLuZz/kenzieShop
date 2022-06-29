const initalState = [
  {
    id: 1,
    name: "Smartphone Motorola Moto E20 32GB 4G Wi-Fi Tela 6.5'' Dual Chip 2GB RAM Câmera Dupla + Selfie 5MP - Cinza",
    img: "https://statics-americanas.b2w.io/spacey/acom/2021/03/30/motoe.webp",
    price: 699,
  },
  {
    id: 2,
    name: "Smartphone Samsung Galaxy S20 Fe 128GB 4G Wi-Fi Tela 6.5'' Dual Chip 6GB RAM Câmera Tripla + Selfie 32MP - Cloud Navy",
    img: "https://images-americanas.b2w.io/produtos/01/00/img/3234383/1/3234383171_1SZ.jpg",
    price: 1100,
  },
  {
    id: 3,
    name: "Xiaomi Redmi Note 11 128gb 6 De Ram Versão Global Cinza Gray",
    img: "https://img.ibxk.com.br/2020/08/10/10012156262096.jpg",
    price: 2000,
  },
];

const productsReducer = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
