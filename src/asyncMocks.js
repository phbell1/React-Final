

const products = [
    {
        id: 1,
        title: 'Echeveria Elegans',
        price: 1500,
        category: 'Interior',
        description: 'Es una planta suculenta originaria de México, popular en jardinería debido a su atractivo aspecto y a su facilidad de cuidado',
        image: '../src/assets/img/int/int-0001.jpg',
    },

    {
        id: 2,
        title: 'Maranta Leuconeura',
        price: 2500,
        category: 'Interior',
        description: 'Conocida como Maranta o planta de oración, es una planta de interior popular debido a sus hojas decorativas y su fácil cuidado.',
        image: '../src/assets/img/int/int-0002.jpg',
    },
    {
        id: 3,
        title: 'Nolina Recurvata',
        price: 5200,
        category: 'Interior',
        description: 'Conocida como "Pata de Elefante". Planta de interior popular debido a su aspecto exótico y su facilidad de cuidado.',
        image: '../src/assets/img/int/int-0003.jpg',
    },
    {
        id: 4,
        title: 'Ficus Benjamina',
        price: 8800,
        category: 'Exterior',
        description: 'El Ficus es de origen tropical que se destaca por sus hojas verdes y blancas, lo que le brinda un aspecto muy llamativo y decorativo.',
        image: '../src/assets/img/ext/ext-0001.jpg',
    },
    {
        id: 5,
        title: 'Aralia Schefflera',
        price: 7400,
        category: 'Exterior',
        description: 'Puede ser utilizada tambien como una planta de bonsái, esto añade un atractivo adicional para los aficionados a esta técnica.',
        image: '../src/assets/img/ext/ext-0002.jpg',
    },
    {
        id: 6,
        title: 'Dracena Massangeana',
        price: 9200,
        category: 'Exterior',
        description: 'Conocida tambien con el nombre de "Palo del Brasil" es una planta resistente y curativa. Ideal para espacios semiabiertos.',
        image: '../src/assets/img/ext/ext-0003.jpg',
    },
    {
        id: 7,
        title: 'Plastica Premium',
        price: 3900,
        category: 'Maceteria',
        description: 'Variedad en tamaños, formatos y colores,peso super liviano. Material premium. Super resistentes.',
        image: '../src/assets/img/mac/m-0001.jpg',
    },
    {
        id: 8,
        title: 'Plastica Estriada',
        price: 6800,
        category: 'Maceteria',
        description: 'Variedad en tamaños, formatos y colores,peso super liviano. Material premium. Super resistentes.',
        image: '../src/assets/img/mac/m-0002.jpg',
    },
    {
        id: 9,
        title: 'Plastica Standard',
        price: 1200,
        category: 'Maceteria',
        description: 'Variedad en tamaños, formatos y colores,peso super liviano. Fragil a los golpes. Nivel calidad medio.',
        image: '../src/assets/img/mac/m-0003.jpg',
    },
]


export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products);


    }, 2000)

});

export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
};

export const getCats = (prodCat) => {
    return products.filter((prod) => prod.category == prodCat)
}



