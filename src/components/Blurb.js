import { Typography } from "antd";
import styled from "styled-components";

const BlurbContainer = styled.div`
  margin-top: 20px;
  border-top: 1px solid #efefef;
`;
const BlurbText = styled(Typography.Text)`
  display: block;
  max-width: 700px;
  margin: 30px 0;
`;

export const Blurb = () => (
  <>
    <BlurbContainer>
      <BlurbText>Disclaimers:</BlurbText>
      <BlurbText>
        (1) CFU only has 5% gas on the first year, afterwards it is 1%
      </BlurbText>
      <BlurbText>
        (2) Some cards have caps on amounts you can spend in category (e.g.,
        Citi Custom Cash, Amex BCP, etc.). Keep those in mind when you choose a
        card.
      </BlurbText>
    </BlurbContainer>
    <BlurbContainer>
      <Typography.Title level={2} style={{ marginTop: "1.2em" }}>
        Welcome to the credit card coverage visualizer.
      </Typography.Title>
      <BlurbText>
        This web app lets you see gaps in your credit card rewards so you can
        make the most out of your spending. Short disclaimer, there are a lot of
        good cards out there that I did not include in this list:
      </BlurbText>
      <BlurbText>
        (1) Cards that have quarterly rotating categories (e.g., CFF, Discover
        it Cash Back, etc.). These cards are great but not consistent which is
        what this tool is calculating for.
      </BlurbText>
      <BlurbText>
        (2) Airline or Hotel branded cards. Some of them are good, some not as
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
  </>
);
