const products = [
    {
        id:1,
        titulo:"Wenax-SC",
        precio:21419,
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/wenax-kit-15cee2d0c19851541d16994809165135-1024-1024.webp",
        categoria:"Pods",
        descripcion:"'Pod Geekvape Pods",
    },
    {
        id:2,
        titulo:"Koko Prime",
        precio:47729,
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/img_95651-3f0c9d8148ead753f516448618862767-1024-1024.webp",
        categoria:"Pods", 
        descripcion:"Pod Calbirun Pods.",
    },
    {  
        id:3,
        titulo:"G2" , 
        precio:48769 , 
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/caliburn-g2-001-898ba36ed6632d1e3416702356414356-1024-1024.webp" ,
        categoria:"Pods" ,
        descripcion:"Pod Calbirun G2", 
    },
    {  
        id:4,
        titulo:"G3" , 
        precio:64739 , 
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/kit-g3-e33c24c4be81de711217087226573986-1024-1024.webp" ,
        categoria:"Pods" ,
        descripcion:"Viene reversionado a G3, con su nueva funcion de variar ohms y su cartucho que resiste sales de nicotina y e-liquids", 
    },
    {
        id:1000,
        titulo:"Drag 4" ,
        precio:109869 ,
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/drag4-011-aa0705228d810e371d16841142953567-1024-1024.webp" , 
        categoria:"Kits" , 
        descripcion:"Voopoo nos trae su version mejorada a un Drag 4", 
    },
    {
        id:1001,
        titulo:"Swag Px80" , 
        precio:62619 ,
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/img_81881-7a2a4d3b8314cdfbec16376423415254-1024-1024.webp" , 
        categoria:"Kits" ,
        descripcion:"'Vaporesso nos trae una version mini y comoda de su kit Swag PX80", 
    },
    {
        id:1002 ,
        titulo:"Digiflavor XP 77w" ,
        precio:66379 ,
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/xp77-kit1-7e19a8ea5459e291b616958573712741-1024-1024.webp" , 
        categoria:"Kits" ,
        descripcion:"Digiflavor nos tra un kit ilustrado a Cyperpunk para iluminar tu camino", 
    },
    {
        id:1003 ,
        titulo:"Digiflavor XP 77w" ,
        precio:62089 ,
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/musket-kit-001-b3903171b3f6b74a9116702347849121-1024-1024.webp" , 
        categoria:"Kits" ,
        descripcion:"Voopoo nos trae el mas fino y elegante kit, Musket", 
    },
    {
        id:2000,
        titulo:"Vanilla Cuban" ,
        precio:16779 ,
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/img_2223-d9d4e999e48f67a1b117079292957474-1024-1024.webp" , 
        categoria:"E-Liquids" , 
        descripcion:"Nasty nos trae una riquisima conbinacion de vainilla con tabaco cubano",
    },
    {
        id:2001,
        titulo:"Bad Blood" , 
        precio:16779 ,
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/img_58971-fdeec6942b269ddac115904343667994-1024-1024.webp" , 
        categoria:"E-Liquids" ,
        descripcion:"No podia faltar unas ricas grosellas frescas de parte de Nasty", 
    },
    {
        id:2002 ,
        titulo:"Mango Ice" ,
        precio:16779 ,
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/img_59491-069ca06de4ff51042d15904349012072-1024-1024.webp" ,
        categoria:"E-Liquids" ,
        descripcion:"Nos nos podia faltar en inigualable Cushman Mango Ice",
    },
    {
        id:2003 ,
        titulo:"Stargazing" ,
        precio:16779 ,
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/img_56361-24d9401d976ab398fd15904315206791-1024-1024.webp" ,
        categoria:"E-Liquids" ,
        descripcion:"Lo mas rico en arandanos mix",
    },
    {
        id:3000 ,
        titulo:"Don Juan Reserve",
        precio:20599 ,
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/88b49cb7-c548-44d4-a7b6-bb40317f01b11-974f966dcd724d24b115911687943257-1024-1024.webp" ,
        categoria:"Sales-Nicotina" ,
        descricpion:"El mas famoso liquido de Kings Crest una riquisima tarta de chocolate con coco y vainilla", 
    },
    {
        id:3001,
        titulo:"Purple Rain" , 
        precio:15069 , 
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/83d6d123-c1b4-490d-8402-e3ae6f59716c-233fdb4403e09bf0a317087339168070-1024-1024.webp" ,
        categoria:"Sales-Nicotina" , 
        descricpion:"Dinner Lady nos trae una riquisima combinacion de Arandanos, limon y frambuesas",
    },
    {
        id:3002,
        titulo:"Berries Ice" ,
        precio:15069 ,
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/zerosalt-berries1-37648729e7d06751ac16845297995394-1024-1024.webp" ,
        categoria:"Sales-Nicotina" ,
        descricpion:"Mamma Juice Zero nos trae para estos calores unos riquisimos frutos rojos con su toque de ice",
    },
    {
        id:3003,
        titulo:"LOVE 66" ,
        precio:10599 ,
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/vapesoul-love-66-2f9ab394f2164b9c7017069172845474-1024-1024.webp" ,
        categoria:"Sales-Nicotina" ,
        descricpion:"Vapesoul nos trae una riquisima combinacion de sandia melon",
    },
    {
        id:4001,
        titulo:"High Ohm Alien Mech",
        precio:3419,
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/4179986e-faa6-412c-817e-a23301505ad4_nube-ce958c06cb02aedaac15795296131471-1024-1024.webp",
        categoria:"Resistencias",
        descricpion:"Nuestros amigos de ERO Coils nos traen su resistencias high ohm para levantar mas sabor a la hora de vapear",
    },
    {
        id:4002,
        titulo:"Resistencia Koko Prime/G2 POD" ,
        precio:6359,
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/koko0-81-bf396456953eb51bc916948966486540-1024-1024.webp",
        categoria:"Resistencias",
        descricpion:"Las resistencias para tu pod preferido",
    },
    {
        id:4003,
        titulo:"PnP X",
        precio:20000,
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/pnp-x-3f691f60556a2302d916978175731527-1024-1024.webp",
        categoria:"Resistencias",
        descricpion:"Resistencia Pnp X Voopoo de 0.15.",
    },
    {
        id:4004,
        titulo:"GT X",
        precio:5179,
        img:"https://dcdn.mitiendanube.com/stores/001/061/548/products/gtx0-81-42968b48d4b20b7cc316948954459673-1024-1024.webp",
        categoria:"Resistencias",
        descricpion:"Resistencia Vaporesso GT X de 0.15.",
    },

]

export const carrousel = [
    {id: "C1", img:"https://www.fundacionfemeba.org.ar/website/image/blog.post/50271_0beb71f/title_image"},
    {id: "C2", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiLP-_EXOxkHb_dDd8iQ5vhOC60RGhAPNrQA&usqp=CAU"},
    {id: "C3", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKpK3FxN_xR6hKqpMkPobdCNGH-j8CnbOzw&usqp=CAU"},
    {id: "C4", img:"https://i.pinimg.com/236x/fc/e0/f6/fce0f6027d2fcbbd232fddcd71873f03.jpg"},
];

export const cargarProductos = new Promise ((resolve) => {
    setTimeout (()=> {
        resolve (products);
    },);
});

export const cargarProducto = (id) => {
    return products.find ((prod) => prod.id == id);
};
