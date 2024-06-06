import pokemonAPI from "@/environments/enviroment"

// generar un array de 4 elementos aleatoriios
const getPokemonList = async () => {
    const list = [
        Math.floor( Math.random() * 649) + 1,
        Math.floor( Math.random() * 649) + 1,
        Math.floor( Math.random() * 649) + 1,
        Math.floor( Math.random() * 649) + 1
    ];

    return await getPokemonNames(list)
}

const getPokemonNames =  async ([a, b, c, d] = []) => {
    
    const arrayPromises = [
    pokemonAPI.get(`/${a}`),
    pokemonAPI.get(`/${b}`),
    pokemonAPI.get(`/${c}`),
    pokemonAPI.get(`/${d}`)
];

const [p1, p2, p3, p4] = await Promise.all(arrayPromises);
return [
    {name: p1.data.name, id: p1.data.id},
    {name: p2.data.name, id: p2.data.id},
    {name: p3.data.name, id: p3.data.id},
    {name: p4.data.name, id: p4.data.id}
]
} 
export default getPokemonList;