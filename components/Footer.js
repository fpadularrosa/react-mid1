
const Footer = () => {
    return(
        <>
        <footer className='bottom-0 w-full bg-black'>
            <div id='first-container-footer' className="flex mx-10 text-white justify-center">
                <div className='lg:text-md'></div>
                    <div className='py-6  place-items-start'>
                        <div className='pb-5 pt-4 text-md'>Ponte en contácto conmigo</div>
                            <a className='text-sm' href='mailto:fpadularrosa22@gmail.com'>fpadularrosa22@gmail.com</a>
                        <div>
                        <div className='py-3 text-md'>Conectar</div>
                            <a className='text-sm ' href='https://www.linkedin.com/in/padularrosa-franco-fullstack' target='_blank'>LinkedIn</a>
                        </div>
                    </div>
            </div>
            <div id='second-container-footer' className='grid w-full text-white justify-items-center'>
            <hr width='45%'/>
            <div className='py-6 text-md'>
                Diseñado y desarrollado por: Franco J. Padularrosa
                <br/>
                ©2022
            </div>
            <div></div>
            </div>
        </footer>
        </>
    )
}

export default Footer;