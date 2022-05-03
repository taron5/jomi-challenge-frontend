import { ComponentCommonHeader } from "graphql/types";
type Props = {
  data: ComponentCommonHeader;
};

const style = {
    padding: 30,
    fontWeight: 500,
    fontSize: 25,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const HeaderBlock = ({ data }: Props) => {
    return <div style={style}> {data?.Text} </div>
};

export default HeaderBlock;
