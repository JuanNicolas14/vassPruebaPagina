import React, { useEffect, useState } from 'react'
import './Header.scss'
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenu = () => {
        if(showMenu == false){
            setShowMenu(true)
        }else{
            setShowMenu(false)
        }
    }

    return (
        <header className='prueba__header'>
            <section className='container'>
                <div style={{ background: scrolled ? "#222121" : "transparent" }}>
                    {showMenu == true
                        && (<div className='menu-movil'>
                            <p>EN</p>
                            <ul className='listado-servicios'>
                                {["HOME", "CASOS DE ÉXITO", "MERCADOS", "CÓMO LO HACEMOS", "SOMOS VASS", "INSIGHTS", "CONTACTO", "VASS RESEARCH", "TALENTO"].map((servicio, index) => (
                                    <li className="prueba__header-servicio" key={`servicio-${index}`}>
                                        <p>{servicio}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>)
                    }

                    <div className='prueba__header-logo'>
                        <p>VASS</p>
                    </div>
                    <div className='prueba__header-movil'>
                        <AiOutlineSearch className='lupa' />
                        {showMenu == true
                        ?(<RxCross2 onClick={()=> handleMenu()} className='burguer-menu'/>)
                        :(<AiOutlineMenu onClick={()=> handleMenu()} className='burguer-menu' />)
                        }
                    </div>
                    <nav className='prueba__header-desktop'>
                        <ul className='listado-servicios'>
                            {["Casos de éxito", "Mercados", "Países", "Somos VASS", "Cómo lo hacemos", "Insights", "Noticias", "VASS Research", "EN"].map((servicio, index) => (
                                <li className="prueba__header-servicio" key={`servicio-${index}`}>
                                    <p>{servicio}</p>
                                </li>
                            ))}
                            <li><AiOutlineSearch className='lupa' /></li>
                            <li className='talento'><p>Talento</p></li>
                        </ul>
                    </nav>
                </div>

                <h1>CONTACTO</h1>
            </section>
            <div className='prueba__header-talento'>

            </div>


        </header>
    )
}

export default Header