const urlArticles = 'https://beta.mejorconsalud.com/wp-json/mc/v3/posts?search=';

export default async function handler(req, res) {
    const lastArticles = await fetch('https://beta.mejorconsalud.com/wp-json/mc/v3/posts?orderby=date&order=desc').then(r => r.json());
    
    const articles = await fetch(`${urlArticles}${req.query.name}`).then(res => res.json());
    articles.data.length ? res.status(200).json({list:articles.data, numOfarticles:articles.data.length}) : res.status(404).json({message:"¡No hay artículos relacionados con el término de búsqueda!"});
}