import { Typography } from "antd";
import { REWARD_TYPES, TRAVEL_PORTALS } from "../Data";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../Constants";

const getPercentColor = (rewardRate) => {
  const rewardRateInt = Math.ceil(rewardRate * 100);
  switch (rewardRateInt) {
    case 0:
      return "rgba(255, 26, 26, 0.75)";
    case 1:
      return "rgba(255, 83, 83, 0.60)";
    case 2:
      return "rgba(255, 205, 26, 0.8)";
    case 3:
      return "rgba(147, 237, 34, 0.7)";
    default:
      return "rgba(54, 214, 28, 0.7)";
  }
};

const RewardTypeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RewardType = styled.div`
  padding: 2px 10px;
  margin: 0 10px 5px 0;
  border-radius: 40px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-row-gap: 10px;
  border-top: 1px solid #efefef;
  padding: 10px 0;
  justify-items: start;
  min-height: 30px;
  background-color: ${({ backgroundColor }) => backgroundColor};

  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: 330px 60px 1fr;
    grid-column-gap: 20px;
  }
`;

const CategoryTitle = styled(Typography.Paragraph)`
  &.ant-typography {
    margin-bottom: 0;
  }
`;

const CategoryAmount = styled(Typography.Paragraph)`
  width: 60px;
  text-align: center;
  align-self: center;
  padding: 2px 0;
  border-radius: 40px;
  background-color: ${({ reward }) => getPercentColor(reward)};

  &.ant-typography {
    margin-bottom: 0;
  }
  ${MEDIA_QUERIES.TABLET} {
    width: 100%;
  }
  @media (prefers-color-scheme: dark) {
    color: black !important;
  }
`;

const CategorySources = styled.div`
  grid-column: 1 / -1;

  ${MEDIA_QUERIES.TABLET} {
    grid-column: 3;
  }
`;

const CategorySource = styled(Typography.Paragraph)`
  display: inline-block;
  padding: 2px 10px;
  border-radius: 40px;
  background-color: ${({ $associatedColor }) => $associatedColor};
  margin: 0 5px 5px 0;
  &.ant-typography {
    margin-bottom: 0;
  }
`;

export const Categories = ({ selectedCategories, selectedCards }) => {
  const Best = ({ bestCards, bestRate }) =>
    bestCards && (
      <>
        <CategoryAmount reward={bestRate}>{bestRate * 100}%</CategoryAmount>
        {bestCards.length > 0 && (
          <CategorySources>
            {bestCards.map((card) => (
              <CategorySource
                key={card.cardName}
                $associatedColor={card.rewardType.associatedColor}
              >
                {card.cardName}
              </CategorySource>
            ))}
          </CategorySources>
        )}
      </>
    );

  const getBest = (cards, category) => {
    let bestRate = 0;
    let bestCards = [];

    cards.forEach((card) => {
      if (card.categories[category] > bestRate) {
        bestRate = card.categories[category];
        bestCards = [card];
      } else if (card.categories["all"] > bestRate) {
        bestRate = card.categories["all"];
        bestCards = [card];
      } else if (card.categories["all"] === bestRate) {
        bestCards.push(card);
      } else if (card.categories[category] === bestRate) {
        bestCards.push(card);
      }
    });

    return { bestCards, bestRate };
  };

  const normalCategories = Object.keys(selectedCategories).slice(0, 9);
  const chaseTravelCategories = ["TRAVEL_CHASE_FLIGHTS", "TRAVEL_CHASE_HOTELS"];
  const amexTravelCategories = ["TRAVEL_AMEX_FLIGHTS", "TRAVEL_AMEX_HOTELS"];
  const capitalOneTravelCategories = ["TRAVEL_CO_FLIGHTS", "TRAVEL_CO_HOTELS"];

  return (
    <>
      <Typography.Title level={2}>Covered Categories</Typography.Title>
      {/* Normal non-portal categories */}
      <div>
        {normalCategories.map((category) => (
          <CategoryGrid key={selectedCategories[category].displayName}>
            <CategoryTitle>
              {selectedCategories[category].displayName}
            </CategoryTitle>
            <Best
              {...getBest(
                [...selectedCategories[category].cardsInCategory],
                category
              )}
            />
          </CategoryGrid>
        ))}
        {/* Travel categories through Chase */}
        {[...selectedCards].some(
          (card) => card.travelPortal === TRAVEL_PORTALS.CHASE
        ) &&
          chaseTravelCategories.map((category) => (
            <CategoryGrid key={selectedCategories[category].displayName}>
              <CategoryTitle>
                {selectedCategories[category].displayName}
              </CategoryTitle>
              <Best
                {...getBest(
                  [...selectedCategories[category].cardsInCategory],
                  category
                )}
              />
            </CategoryGrid>
          ))}
        {/* Travel categories through American Express */}
        {[...selectedCards].some(
          (card) => card.travelPortal === TRAVEL_PORTALS.AMEX
        ) &&
          amexTravelCategories.map((category) => (
            <CategoryGrid key={selectedCategories[category].displayName}>
              <CategoryTitle>
                {selectedCategories[category].displayName}
              </CategoryTitle>
              <Best
                {...getBest(
                  [...selectedCategories[category].cardsInCategory],
                  category
                )}
              />
            </CategoryGrid>
          ))}
        {/* Travel categories through Capital One */}
        {[...selectedCards].some(
          (card) => card.travelPortal === TRAVEL_PORTALS.CAPITAL_ONE
        ) &&
          capitalOneTravelCategories.map((category) => (
            <CategoryGrid key={selectedCategories[category].displayName}>
              <CategoryTitle>
                {selectedCategories[category].displayName}
              </CategoryTitle>
              <Best
                {...getBest(
                  [...selectedCategories[category].cardsInCategory],
                  category
                )}
              />
            </CategoryGrid>
          ))}
      </div>

      <Typography.Title level={3} style={{ marginTop: "1.2em" }}>
        Color Key
      </Typography.Title>
      <RewardTypeContainer>
        {Object.keys(REWARD_TYPES).map((type) => (
          <RewardType
            key={type}
            backgroundColor={REWARD_TYPES[type].associatedColor}
          >
            {REWARD_TYPES[type].name}
          </RewardType>
        ))}
      </RewardTypeContainer>
    </>
  );
};
