export default async function handler(req, res) {
    const lastArticles = await fetch('https://beta.mejorconsalud.com/wp-json/mc/v3/posts?orderby=date&order=desc').then(r => r.json());
    const urlRelevants = `https://beta.mejorconsalud.com/wp-json/mc/v3/posts?search=${req.query.name}&page=1&orderby=relevance`;
    const {data} = await fetch(urlRelevants).then(res => res.json());
    data.length ? res.status(200).json({list: data, numOfarticles: data.length}) : res.status(404).json({message: "¡No hay artículos relacionados con el término de búsqueda!"});
}