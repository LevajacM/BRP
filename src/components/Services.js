import Title from "./Title";
import { servicesData } from "./data";
import Service from "./Service";

export const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title first={"our"} second={"services"} />
      <div className='section-center services-center'>
        {servicesData.map(({ title, text, icon, id } /* service*/) => {
          return (
            <Service
              title={title}
              text={text}
              icon={icon}
              key={id}
              /* {...service}
              key={service.id}*/
            />
          );
        })}
        ;
      </div>
    </section>
  );
};
