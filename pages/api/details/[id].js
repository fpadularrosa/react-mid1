export default async function handler(req, res) {
    //título, categoría, fecha de publicación, contenido (texto legible), etiquetas, biografías y nombre del autor.
    try {
        const url = await fetch(`https://beta.mejorconsalud.com/wp-json/mc/v3/posts/${req.query.id}`).then(r => r.json());
        const datePublished = url.published.split('-');
        const data = {
            title: url.title,
            datePublished: `${datePublished[0]}-${datePublished[1]}` ,
            datePublished1: url.published,
            category: url.categories[0].name,
            content: url.content.replace(/<[^>]+>/g, ''),
            headline: url.headline,
            author: url.author.name,
            authorImage: url.author.picture,
            pageOfauthor: url.author.link,
            biography: url.author.description.replace(/<[^>]+>/g, ''),
            image: url.featured_media['1536x1536'],
            image1: url.featured_media['2048x2048']
        }
        res.status(200).json(data) 
    } catch (error) {
        console.log(error)
    }
}