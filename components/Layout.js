import Head from "next/head";
import Link from "next/link";

export default function Layout({title, children}) {
    return(
        <>
        <Head>
            <title>{title ? title + ' - Argentina' : 'Argentina'}</title>
            <meta charSet="utf-8"/>
            <meta name="description" content='Articulos sobre nutrición y salud'/>
            <meta name="keywords" content="articulos interesantes, salud, nutrición, noticias, buscar articulos"/>
        </Head>
        <div className="mb-14">
            <header>
                <nav className="flex justify-center py-4 pb-6 shadow-lg">
                    <li className="list-none"><Link href='/'><a className="text-4xl underline text-[#FFB6C1]">Inicio</a></Link></li>
                </nav>
            </header>
            <main>{children}</main>
        </div>
        </>
    )
}