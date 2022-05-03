import { ComponentCommonCarousel } from "graphql/types";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
  data: ComponentCommonCarousel;
};
const CarouselBlock = ({ data }: Props) => {
  const styles = {
    carouselHolder: {
      background: '#272727',
      color: 'white',
      textAlign: 'left'
    },
    item: {
      padding: 20,
      textAlign: 'left'
    },
    fullHeight: {
      height: 220,
      width: 30,
      top: 0,
      left: 0,
      color: 'white',
      padding: 5,
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }

  return (
      <div style={styles.carouselHolder}>
        <Carousel
            showIndicators={false}
            showStatus={false}
            infiniteLoop={true}
            showArrows={true}
            showThumbs={false}
        >
          {data?.Item.map((item, index) => {
            return (
              <div style={styles.item} key={index}>
                <p>{item?.TitleText}</p>
                <img src={process.env.STRAPI_CMS_URL + item?.Image?.data?.attributes?.url} alt={item?.Image?.data?.attributes?.url} key={index}/>
              </div>
            )
          })}
        </Carousel>
      </div>
  );
};

export default CarouselBlock;
