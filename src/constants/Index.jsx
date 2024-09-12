// Import statements
import imgAnatomize1 from "../assets/img/itemProduct/anatomize/anatomize1.jpg";
import imgAnatomize2 from "../assets/img/itemProduct/anatomize/anatomize2.jpg";
import imgAnatomize3 from "../assets/img/itemProduct/anatomize/anatomize3.jpg";
import imgAnatomize4 from "../assets/img/itemProduct/anatomize/anatomize4.jpg";
import imgConvernire1 from "../assets/img/itemProduct/convernire/convenire1.jpg";
import imgConvernire2 from "../assets/img/itemProduct/convernire/convenire2.jpg";
import imgConvernire3 from "../assets/img/itemProduct/convernire/convenire3.jpg";
import imgConvernire4 from "../assets/img/itemProduct/convernire/convenire4.jpg";
import imgJacketTempur1 from "../assets/img/itemProduct/jacketTempur/jacketTempur1.jpg";
import imgJacketTempur2 from "../assets/img/itemProduct/jacketTempur/jacketTempur2.jpg";
import imgJacketTempur3 from "../assets/img/itemProduct/jacketTempur/jacketTempur3.jpg";
import imgJacketTempur4 from "../assets/img/itemProduct/jacketTempur/jacketTempur4.jpg";
import imgMatcros1 from "../assets/img/itemProduct/matcros/matcros1.jpg";
import imgMatcros2 from "../assets/img/itemProduct/matcros/matcros2.jpg";
import imgMatcros3 from "../assets/img/itemProduct/matcros/matcros3.jpg";
import imgMatcros4 from "../assets/img/itemProduct/matcros/matcros4.jpg";
import imgSkuligan1 from "../assets/img/itemProduct/skuligan/skuligan1.jpg";
import imgSkuligan2 from "../assets/img/itemProduct/skuligan/skuligan2.jpg";
import imgSkuligan3 from "../assets/img/itemProduct/skuligan/skuligan3.jpg";
import imgSkuligan4 from "../assets/img/itemProduct/skuligan/skuligan4.jpg";
import imgBorz1 from "../assets/img/itemProduct/borz/borz1.jpg";
import imgBorz2 from "../assets/img/itemProduct/borz/borz2.jpg";
import imgBorz3 from "../assets/img/itemProduct/borz/borz3.jpg";
import imgBorz4 from "../assets/img/itemProduct/borz/borz4.jpg";
import imgNordrav1 from "../assets/img/itemProduct/nordrav/nordrav1.jpg";
import imgNordrav2 from "../assets/img/itemProduct/nordrav/nordrav2.jpg";
import imgNordrav3 from "../assets/img/itemProduct/nordrav/nordrav3.jpg";
import imgNordrav4 from "../assets/img/itemProduct/nordrav/nordrav4.jpg";
import imgGermal1 from "../assets/img/itemProduct/germal/germal1.jpg";
import imgGermal2 from "../assets/img/itemProduct/germal/germal2.jpg";
import imgGermal3 from "../assets/img/itemProduct/germal/germal3.jpg";
import imgGermal4 from "../assets/img/itemProduct/germal/germal4.jpg";

// Data Item with updated images
export const dataItem = [
  {
    id: "1",
    name: "Anatomize",
    description: "A comfortable graphic T-shirt with a unique design.",
    price: 189,
    sizes: ["M", "L", "XL"],
    colors: "black",
    images: [imgAnatomize1, imgAnatomize2, imgAnatomize3, imgAnatomize4],
    imgsize: "sizeSS",
    category: "T-Shirts",
    stock: 20,
    material: "Heavyweight 230gsm",
    slug: "anatomize",
  },
  {
    id: "2",
    name: "Convernire",
    description: "A comfortable graphic T-shirt with a unique design.",
    price: 189,
    sizes: ["L", "XL"],
    colors: "black",
    images: [imgConvernire1, imgConvernire2, imgConvernire3, imgConvernire4],
    imgsize: "sizeSS",
    category: "T-Shirts",
    stock: 10,
    material: "Heavyweight 230gsm",
    slug: "convernire",
  },
  {
    id: "3",
    name: "Jacket Tempur",
    description: "A comfortable graphic T-shirt with a unique design.",
    price: 349,
    sizes: ["XL"],
    colors: "black",
    images: [
      imgJacketTempur1,
      imgJacketTempur2,
      imgJacketTempur3,
      imgJacketTempur4,
    ],
    imgsize: "sizeLS",
    category: "Outwear",
    stock: 2,
    material: "Heavyweight 330gsm",
    slug: "jackettempur",
  },
  {
    id: "4",
    name: "Matcros",
    description: "A comfortable graphic T-shirt with a unique design.",
    price: 189,
    sizes: ["M", "L"],
    colors: "black",
    images: [imgMatcros1, imgMatcros2, imgMatcros3, imgMatcros4],
    imgsize: "sizeSS",
    category: "T-Shirts",
    stock: 10,
    material: "Heavyweight 230gsm",
    slug: "matcros",
  },
  {
    id: "5",
    name: "Skuligan",
    description: "A stylish jacket with a modern design.",
    price: 429,
    sizes: ["M", "L", "XL"],
    colors: "black",
    images: [imgSkuligan1, imgSkuligan2, imgSkuligan3, imgSkuligan4],
    imgsize: "sizeLS",
    category: "Outwear",
    stock: 15,
    material: "Heavyweight 330gsm",
    slug: "skuligan",
  },
  {
    id: "6",
    name: "Borz",
    description: "A trendy T-shirt with vibrant colors.",
    price: 189,
    sizes: ["S", "M", "L"],
    colors: "black",
    images: [imgBorz1, imgBorz2, imgBorz3, imgBorz4],
    imgsize: "sizeSS",
    category: "T-Shirts",
    stock: 25,
    material: "Heavyweight 230gsm",
    slug: "borz",
  },
  {
    id: "7",
    name: "Nordrav",
    description: "A rugged jacket designed for durability.",
    price: 429,
    sizes: ["M", "L", "XL"],
    colors: "black",
    images: [imgNordrav1, imgNordrav2, imgNordrav3, imgNordrav4],
    imgsize: "sizePO",
    category: "Outwear",
    stock: 20,
    material: "Heavyweight 330gsm",
    slug: "nordrav",
  },
  {
    id: "8",
    name: "Germal",
    description: "A long-sleeve shirt with a comfortable fit.",
    price: 199,
    sizes: ["M", "L"],
    colors: "black",
    images: [imgGermal1, imgGermal2, imgGermal3, imgGermal4],
    imgsize: "sizeLS",
    category: "T-Shirts",
    stock: 15,
    material: "Heavyweight 230gsm",
    slug: "germal",
  },
];

// size
import sizeSS from "../assets/img/itemProduct/size/sizeSS.jpg";
import sizeLS from "../assets/img/itemProduct/size/sizeLS.jpg";
import sizePO from "../assets/img/itemProduct/size/sizePO.jpg";
export const dataSize = [
  {
    id: 1,
    size: "M",
    height: "160cm - 164cm",
    weight: "55Kg - 60Kg",
  },
  {
    id: 2,
    size: "L",
    height: "170cm - 175cm",
    weight: "60Kg - 64Kg",
  },
  {
    id: 3,
    size: "XL",
    height: "160cm - 164cm",
    weight: "60Kg - 64Kg",
  },
];
