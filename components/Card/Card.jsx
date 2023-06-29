import Image from 'next/image';
import './Card.scss';
import iPhone from './img/iPhone.png';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const Card = () => {
  return (
    <article className="card">
      <div className="card__image_wrapper">
        <Image src={iPhone} alt="Product" />
        <span className="card__discount">-14%</span>
        <div className="card__view__wrapper">
          <button className="card__view">Быстрый просмотр</button>
        </div>
      </div>
      <div className="card__info_wrapper">
        <div className="card__price__wrapper">
          <span className="card__price_new">86 956 P</span>
          <span className="card__price_old">99 990 P</span>
        </div>
        <div className="card__price_bank__wrapper">
          <span className="card__price_bank">85 251 P</span>
        </div>
        <p className="card__name">
          Apple / Смартфон iPhone 12 Pro 128GB / 6.1&quot; / 2532x1170 / OLED /
          128 ГБ
        </p>
        <div className="card__rating_wrapper">
          <div className="card__rating_stars_wrapper">
            <StarRoundedIcon
              inheritViewBox={false}
              sx={{ width: '17px' }}
              viewBox={'3 3 17 17'}
              htmlColor={'#cb11ab'}
            />
            <StarRoundedIcon
              inheritViewBox={false}
              sx={{ width: '17px' }}
              viewBox={'3 3 17 17'}
              htmlColor={'#cb11ab'}
            />
            <StarRoundedIcon
              inheritViewBox={false}
              sx={{ width: '17px' }}
              viewBox={'3 3 17 17'}
              htmlColor={'#cb11ab'}
            />
            <StarRoundedIcon
              inheritViewBox={false}
              sx={{ width: '17px' }}
              viewBox={'3 3 17 17'}
              htmlColor={'#cb11ab'}
            />
            <StarRoundedIcon
              inheritViewBox={false}
              sx={{ width: '17px' }}
              viewBox={'3 3 17 17'}
              htmlColor={'#cb11ab'}
            />
          </div>
          <span className="card__rating_quantity">87</span>
        </div>
        <div className="card__promo">РАССРОЧКА 0-0-6</div>
        <div className="card__buttons_wrapper">
          <button className="card__button_cart">В корзину</button>
          <FavoriteBorderIcon
            htmlColor={'#cb11ab'}
            sx={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </article>
  );
};
