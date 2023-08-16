import Style from "./Timeline.module.scss";
const timeLineData=[
   {
    year: "2015-2016",
    info: 'Curso DAM-Desarrollo de aplicaciones multiplataforma en IES Jaume II El just'
   },
   {
    year: "2017",
    info: 'Empiezo universidad con el curso de Ingenieria Informática en la UBU-Universidad de Burgos'
   },
   {
    year: "2018",
    info: 'Curso 2do en la UNED',
   },
  
   {
     year: "2018-2019",
     info: 'Trabajé en el ayuntamiento de Bellreguard como Técnico informático',
     mas_info: <ul>
     <li>Desarrollo de 2 aplicaciones con java:
     Una para enviar los pagos por correo electrónico  y otra para controlar entradas y salidas de los trabajadores del ayuntamiento.
     </li>
     <li>Gestión y uso de bases de datos MySQL</li>
     <li>Configuración e instalación de dispositivos Ubiquiti poe</li>
     <li>Configuración de distintos routers</li>
     <li>Gestión de impresoras través de la red</li>
     <li>Acoplamiento de cables rj-45</li>
     <li>Uso de servidor linux con Apache, DNS server, Samba,Webmin</li>
     <li>Creación de página wordpress, html, css y javascript</li>
     <li>Gestión de diferentes servidores usando máquinas virtuales con proxmox y webmin</li>
     <li>Reparación de ordenadores</li>
     <li>Configuración de firewalls</li>
     <li>Instalación de linux y windows en distintos equipos y servidores</li>
     </ul>
   },
   {
    year: "2019-2022",
    info: 'Freelance ofreciendo servicios de desarrollo web a diferentes clientes', 
    mas_info: <ul>
    <li>Proyectos en wordpress</li>
    <li>HTML,CSS y js</li>
    </ul>
   },
   {
     year: "2022-2023",
     info: 'Curso DAW- Desarrollo de aplicaciones web'
   }
];
 const TimeLine = () => {
  return (
    <div>
      <h2>Trabajo y estudios</h2>
      <ul className={Style.timeline}>

      {timeLineData.map((item,index)=>{
        return (
          <li className={Style.timeline__element} key={index}><h6>{item.year}</h6><p className={Style.timeline__info}>{item.info} </p>{item?.mas_info}</li>
          )
        })}
      </ul>
    </div>
  )
}
export default TimeLine;