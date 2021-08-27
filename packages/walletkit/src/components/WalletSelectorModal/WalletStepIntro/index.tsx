import styled from "@emotion/styled";

import { ContinueButton } from "./ContinueButton";
import { Detail } from "./Detail";
import { BoltIcon, ConnectDots, LockIcon, SolanaIcon } from "./icons";

interface Props {
  appName: string;
  appIcon?: React.ReactNode;
  onContinue?: () => void;
}

export const WalletStepIntro: React.FC<Props> = ({
  appName,
  appIcon,
  onContinue,
}: Props) => {
  return (
    <Wrapper>
      <AppIconsWrapper>
        <AppIcons>
          <SolanaIcon />
          <ConnectDots />
          {appIcon}
        </AppIcons>
      </AppIconsWrapper>
      <Instruction>
        To use {appName}, you need to connect a <strong>Solana</strong> wallet.
      </Instruction>
      <DetailsWrapper>
        <Detail
          icon={<LockIcon />}
          title="You control your crypto"
          description="Using a non-custodial wallet enables you to control your crypto without having to trust third parties."
        />
        <Detail
          icon={<BoltIcon />}
          title="Transact quickly and cheaply"
          description="Solana's scalability ensures transactions remain less than $0.01 and at lightning fast speeds."
        />
      </DetailsWrapper>
      <BottomArea>
        <ContinueButton onClick={onContinue}>Continue</ContinueButton>
        <FirstTime>
          First time using Solana?{" "}
          <a
            href="https://solana.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Learn more
          </a>
        </FirstTime>
      </BottomArea>
    </Wrapper>
  );
};

const BottomArea = styled.div`
  position: absolute;
  left: 28px;
  right: 28px;
  bottom: 28px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

const FirstTime = styled.div`
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #696969;
  & > a {
    color: #696969;
    font-weight: bold;
  }
`;

const Wrapper = styled.div`
  padding: 28px;
  padding-top: 33px;
`;

const AppIcons = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr 48px;
  grid-column-gap: 20px;
  align-items: center;
  width: 192px;
`;

const Instruction = styled.h2`
  font-weight: normal;
  margin-top: 27px;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #000000;
`;

const DetailsWrapper = styled.div`
  margin-top: 92px;
  display: grid;
  grid-row-gap: 28px;
`;

const AppIconsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
