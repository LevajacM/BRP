function Tour({ date, title, text, location, days, price, pic }) {
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={pic} className='tour-img' alt='' />
        <p className='tour-date'>{date}</p>
      </div>
      <div className='tour-info'>
        <div className='tour-title'>
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className='fa-solid fa-map'></i>
            </span>
            {location}
          </p>
          <p>{`${days} days`}</p>
          <p>{`from $${price}`}</p>
        </div>
      </div>
    </article>
  );
}
export default Tour;
