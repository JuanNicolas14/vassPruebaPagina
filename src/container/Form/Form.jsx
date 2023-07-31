import React, { useState } from 'react'
import './Form.scss'

const Form = () => {
    const [error, setError] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        country: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        name: '',
        company: '',
        country: '',
        message: '',
        phone: '',
    });

    const { email, name, company, country, message, phone } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Realizar validación en tiempo real y actualizar mensajes de error
        setErrors({
            ...errors,
            [name]: value.trim() === '' ? `El campo es obligatorio` : '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar campos antes de enviar
        const newErrors = {
            email: email.trim() === '' ? 'El campo email no puede estar vacío' : '',
            name: name.trim() === '' ? 'El campo nombre no puede estar vacío' : '',
            company: company.trim() === '' ? 'El campo empresa no puede estar vacío' : '',
            message: message.trim() === '' ? 'El campo mensaje no puede estar vacío' : '',
            phone: phone.trim() === '' ? 'El campo teléfono no puede estar vacío' : '',
            country: country.trim() === '' ? 'El campo País no puede estar vacío' : '',
        };

        setErrors(newErrors);

        // Verificar si hay algún campo vacío y abortar el envío si es así
        if (Object.values(newErrors).some((errorMsg) => errorMsg !== '')) {
            return;
        }

        // Aquí puedes hacer una solicitud a un servidor para enviar los datos
        console.log('Datos del formulario:', formData);
    };

    return (
        <section className='prueba__form'>
            <div className='prueba__form-info'>
                <h3>EMPECEMOS A <br />HACERLO SENCILLO</h3>
                <div>
                    <p className='movil'>Nos emociona impulsar tu <br /> transformación digital</p>
                    <p className='desktop'>Nos emociona impulsar tu transformación digital</p>
                </div>
            </div>
            <form className='prueba__form-formulario'>
                <div className='contenedor-1'>
                    <input
                        required
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Nombre y apellidos'
                    />
                    {errors.name && <small>{errors.name}</small>}
                    <input
                        required
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email'
                    />
                    {errors.email && <small>{errors.email}</small>}
                    <input
                        required
                        type='text'
                        name='company'
                        value={formData.company}
                        onChange={handleChange}
                        placeholder='Empresa/Organismo'
                    />
                    {errors.company && <small>{errors.company}</small>}
                    <input
                        required
                        type='text'
                        name='country'
                        value={formData.country}
                        onChange={handleChange}
                        placeholder='País'
                    />
                    {errors.country && <small>{errors.country}</small>}

                </div>
                <div className='contenedor-2'>
                    <input
                        required
                        type='text'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder='Teléfono'
                    />
                    {errors.phone && <small>{errors.phone}</small>}
                    <label htmlFor="message">Mensaje:</label>
                    <textarea
                        required
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    {errors.message && <small>{errors.message}</small>}
                    <button onClick={handleSubmit} type='submit'>Enviar</button>
                </div>

            </form>
        </section>
    )
}

export default Form