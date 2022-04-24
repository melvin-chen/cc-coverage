import { Typography } from "antd";
import styled from "styled-components";

const BlurbContainer = styled.div`
  margin-top: 20px;
  padding: 20px 0;
  border-top: 1px solid #efefef;
`;
const BlurbText = styled(Typography.Text)`
  display: inline-block;
  max-width: 700px;
  margin: 10px 0;
`;

export const Blurb = () => (
  <BlurbContainer>
    <BlurbText>
      Welcome to the credit card coverage visualizer. This web app lets you see
      gaps in your credit card rewards so you can make the most out of your
      spending. Short disclaimer, there are a lot of good cards out there that I
      did not include in this list:
    </BlurbText>
    <BlurbText>
      (1) Cards that have quarterly rotating categories (CFF, Discover it Cash
      Back, etc.). These cards are great but not consistent which is what this
      tool is calculating for.
    </BlurbText>
    <BlurbText>
      (2) Cards that have multiple selections for categories (BoA Customized
      Cash, Venmo, US Bank Cash+, etc.). Those are just a little more
      complicated to implement, PRs welcome if you would like to take a stab.
    </BlurbText>
    <BlurbText>
      (3) Airline or Hotel branded cards. Some of them are good, some not as
      much, but just a lot to implement for. They also are not exactly
      redeemable as 1 cent per point. Again, PRs welcome if you would really
      like to include them.
    </BlurbText>
    <BlurbText>
      Did I make a mistake? Do you have a card you would like to add? Do you
      just have general feedback? Feel free to{" "}
      <Typography.Link href="https://github.com/melvin-chen/cc-coverage/pulls">
        open a PR
      </Typography.Link>{" "}
      or{" "}
      <Typography.Link href="https://github.com/melvin-chen/cc-coverage/issues">
        open an issue
      </Typography.Link>{" "}
      on Github!
    </BlurbText>
  </BlurbContainer>
);
