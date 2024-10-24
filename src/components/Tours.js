import Title from "./Title";
import { toursData } from "./data";
import Tour from "./Tour";

export const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title first={"featured"} second={"tours"} />;
      <div className='section-center featured-center'>
        {toursData.map(
          ({ date, title, text, location, days, price, id, pic }) => {
            return (
              <Tour
                date={date}
                title={title}
                text={text}
                location={location}
                days={days}
                price={price}
                key={id}
                pic={pic}
              />
            );
          }
        )}
      </div>
    </section>
  );
};
