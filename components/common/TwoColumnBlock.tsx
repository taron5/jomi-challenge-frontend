import { ComponentCommonTwoColumnBlock } from "graphql/types";

type Props = {
  data: ComponentCommonTwoColumnBlock;
};



const TwoColumnBlock = ({data}: Props) => {
  const styles = {
        holder: {
            width: '100%',
            textAlign: 'center'
        },
        heading: {
            fontWeight: 500,
            fontSize: 25
        },
        container: {
            width: '100%',
            display: 'flex',
            flexDirection: data.ImagePosition === 'Left' ? 'row' : 'row-reverse',
            justifyContent: 'center',
            alignItems: 'center'
        },
        textHolder: {
            padding: 50,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
        },
        descriptionHeading: {
            fontSize: 18
        },
        button: {
            width: 'fit-content',
            border: '1px solid #677EFF',
            color: '#677EFF',
            background: 'transparent',
            padding: '7px 14px',
            cursor: 'pointer'
        }
    }
  return (
      <div style={styles.holder}>
        <p style={styles.heading}>{data?.TitleText}</p>
        <div style={styles.container}>
            <div>
                <img src={process?.env?.STRAPI_CMS_URL + data?.Image?.data?.attributes?.url} alt={data?.Image?.data?.attributes?.url}/>
            </div>
            <div style={styles.textHolder}>
                <p style={styles.descriptionHeading}>{data?.DescriptionHeading}</p>
                <p style={styles.description}>{data?.Description}</p>
                <button style={styles.button}>
                    {data?.ButtonText}
                </button>
            </div>
        </div>
      </div>
  );
};

export default TwoColumnBlock;
