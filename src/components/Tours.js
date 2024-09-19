import { ToursData } from "../data";
import { Title } from "../Title";
function Tours() {
  return (
    <section className="section" id="tours">
      <Title Title="featured" SubTitle="tours" />

      <div className="section-center featured-center">
        {ToursData.map((tour) => {
          const { id, img, title, text, country, days, price, date } = tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {country}
                  </p>
                  <p>{days}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default Tours;
