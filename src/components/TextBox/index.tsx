import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  mt?: boolean;
}>;

import * as S from "./styled";

const TextBox: React.FC<Props> = ({ children, mt }) => {
  return <S.TextBoxWrap mt={mt}>{children}</S.TextBoxWrap>;
};

export default TextBox;
