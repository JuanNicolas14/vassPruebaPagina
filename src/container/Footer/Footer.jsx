import React from 'react'
import './Footer.scss'
import { footerImagen } from '../../assets/images'
import {AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin, AiFillYoutube} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className='prueba__footer'>
            <section className='prueba__footer-info'>
                <div className='contenedor-1'>
                    <p>Complex made simple</p>
                    <p className='vass'>VASS</p>
                </div>
                <div className='contenedor-2'>
                    <div>
                        <h3>Sitemap VASS</h3>
                        <ul>
                            {["Home", "Casos éxito", "Somos VASS", "Impactos", "Método", "Tecnologías", "Proyectos l+D+i", "Insights", "Noticias", "VASS Research", "Canal de denuncias", "Contacto"].map((servicio, index) => {
                                return <li key={index}>{servicio}</li>
                            })}
                        </ul>
                    </div>
                    <div>
                        <h3>Sitemap Talento</h3>
                        <ul>
                            {["Talento", "#LifeVASS", "Beneficios", "Planes para ti", "Proyectos", "Smartworking", "Ofertas"].map((servicio, index) => {
                                return <li key={index}>{servicio}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className='contenedor-3'>
                    <div>
                        <h3>Empresas</h3>
                        <ul>
                            {["VASS", "Nateevo", "Serbatic", "vdSHOP"].map((servicio, index) => {
                                return <li key={index}>{servicio}</li>
                            })}
                        </ul>
                    </div>
                    <img src={footerImagen} alt="imagenFooter" />

                </div>
            </section>
            <section className='prueba__footer-politicas'>
                <div>
                    <p>Copyright @ 2021 Todos los derechos reservados</p>
                </div>
                <ul className='lista-politicas'>
                    {["Memoria ambiental","Politica de cookies","Politica de privacidad","Politica de calidad y medio ambiente"].map((politica,index) => {
                        return <li key={index}>{politica}</li>
                    })}
                </ul>
                <ul className='redes'>
                    <li><AiOutlineTwitter/></li>
                    <li><AiOutlineLinkedin/></li>
                    <li><AiOutlineInstagram/></li>
                    <li><AiFillYoutube/></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer