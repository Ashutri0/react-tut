import React from 'react'

const MenuCard = ({ menuData }) => {
  // console.log(menuData);


  // let nubstyl = { color: "royalblue" }

  return (
    <>

      <section className="main-card--cointainer">
        {menuData.map((curElem) => {

          let {id, name, category, description,image, price} = curElem;

          return (
            <>
              <div className='card-container' key={id}>
                <div className="class">
                  <div className="card-body">
                    <span className="card-author subtle" style={{ color: "red" }}>{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                    <div>
                      <img src={image} alt="images" className='card-media' />
                      <div className='card-item-price'>
                        <div className="card-tag subtle">Order Now</div>
                        <div className="card-price">{price}</div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </section>

    </>
  )
}

export default MenuCard;
