'use client'
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+57) 310 385 8806",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "salejandraolaya@gmail.com",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    to_name: 'Alejandra',
    user_name: '',
    user_email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false); // Estado para controlar el loading

  useEffect(() => {
    emailjs.init({ publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Inicia el estado de loading

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData
      );
      console.log('Email enviado exitosamente:', result.text);
      toast.success('¡Mensaje enviado con éxito!', {
        style: {
          backgroundColor: '#1c1c22',
          color: '#B85EFF',
          fontSize: '1.25rem' // Letra grande
        }
      });
      setFormData({
        ...formData,
        user_name: '',
        user_email: '',
        message: '',
      });
    } catch (error) {
      console.log('Error al enviar el email:', error.text);
      toast.error('Error al enviar el mensaje. Por favor, intenta de nuevo.', {
        style: {
          backgroundColor: '#1c1c22',
          color: '#9b3fff',
          fontSize: '1.25rem' // Letra grande
        }
      });
    } finally {
      setLoading(false); // Finaliza el estado de loading
    }
  };

  return (
    <>
      <Toaster position="top-center" richColors />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">Trabajemos juntos</h3>
                <p className="text-white/60">
                  Estoy entusiasmada por colaborar en proyectos donde la innovación, la creatividad y la tecnología se encuentren. Si estás buscando a alguien con habilidades técnicas sólidas, pensamiento analítico, y una gran capacidad de trabajo en equipo, ¡no dudes en contactarme!
                </p>
                {/* inputs */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Input
                    type="text"
                    name="user_name"
                    placeholder="Nombre"
                    onChange={handleChange}
                    value={formData.user_name}
                    required
                    disabled={loading} // Deshabilita los inputs si está en loading
                  />
                  <Input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.user_email}
                    required
                    disabled={loading} // Deshabilita los inputs si está en loading
                  />
                </div>
                {/* textarea */}
                <Textarea
                  className="h-[200px]"
                  name="message"
                  placeholder="Escribe tu mensaje aquí."
                  onChange={handleChange}
                  value={formData.message}
                  required
                  disabled={loading} // Deshabilita el textarea si está en loading
                />
                {/* btn */}
                <div className="flex justify-center">
                  <Button type="submit" size="md" className="max-w-40" disabled={loading}>
                    {loading ? 'Cargando...' : 'Enviar'}
                  </Button>
                </div>
              </form>
            </div>
            {/* info */}
            <div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
