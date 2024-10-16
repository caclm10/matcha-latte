import { nanoid } from "nanoid";

import matchaPowderImg from "@/assets/images/matcha-powder.jpg";
import warmWaterImg from "@/assets/images/warm-water.jpg";
import milkImg from "@/assets/images/milk.jpg";
import iceCubesImg from "@/assets/images/ice-cubes.jpg";
import sugarImg from "@/assets/images/sugar.jpg";

import matchaPowderInGlassImg from "@/assets/images/matcha-powder-in-glass.jpg";
import stirInMatchaPowderImg from "@/assets/images/stir-in-matcha-powder.jpg";
import sugar2Img from "@/assets/images/sugar-2.jpg";
import iceCubesInGlassImg from "@/assets/images/ice-cubes-in-glass.jpg";
import milkToGlassImg from "@/assets/images/milk-to-glass.jpg";
import matchaToIcedMilkImg from "@/assets/images/matcha-to-iced-milk.jpeg";
import icedMatchaLatteImg from "@/assets/images/iced-matcha-latte.jpeg";

export const ingredients = [
    {
        id: nanoid(),
        name: "Bubuk matcha",
        image: matchaPowderImg,
        imageAlt: "Bubuk matcha"
    },
    {
        id: nanoid(),
        name: "Air hangat",
        image: warmWaterImg,
        imageAlt: "Air hangat"
    },
    {
        id: nanoid(),
        name: "Susu",
        image: milkImg,
        imageAlt: "Susu"
    },
    {
        id: nanoid(),
        name: "Es batu",
        image: iceCubesImg,
        imageAlt: "Es batu"
    },
    {
        id: nanoid(),
        name: "Gula",
        image: sugarImg,
        imageAlt: "Gula"
    },
];

export const steps = [
    {
        number: 1,
        image: matchaPowderInGlassImg,
        imageAlt: "Bubuk matcha di gelas",
        description: "Masukkan bubuk matcha di gelas kecil. Takarannya sesuai selera."
    },
    {
        number: 2,
        image: stirInMatchaPowderImg,
        imageAlt: "Aduk bubuk matcha",
        description: "Tuangkan air hangat ke bubuk matcha, lalu aduk hingga merata. Air hangat hanya digunakan agar bubuk matcha dapat diaduk, jadi sedikit saja ya..."
    },
    {
        number: 3,
        image: sugar2Img,
        imageAlt: "Tambahkan gula",
        description: "Tuangkan gula ke dalam matcha jika diperlukan (opsional)."
    },
    {
        number: 4,
        image: iceCubesInGlassImg,
        imageAlt: "Masukkan es batu ke dalam gelas",
        description: "Ambil gelas utama, masukkan es batu ke dalam gelas."
    },
    {
        number: 5,
        image: milkToGlassImg,
        imageAlt: "Tuang susu ke dalam gelas",
        description: "Tuangkan susu ke dalam gelas yang sudah terisi es batu tadi."
    },
    {
        number: 6,
        image: matchaToIcedMilkImg,
        imageAlt: "Tambahkan matcha ke susu",
        description: "Tuangkan matcha yang sudah diaduk tadi ke dalam gelas susu yang sudah terisi es batu."
    },
    {
        number: 7,
        image: icedMatchaLatteImg,
        imageAlt: "Matcha latte siap diminum",
        description: "Selesai... Iced Matcha Latte siap diminum. Selamat menikmati :)"
    },
]