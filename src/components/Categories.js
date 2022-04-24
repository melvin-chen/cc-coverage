import { Typography } from "antd";
import { REWARD_TYPES } from "../Data";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../Constants";

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
  background-color: ${({ backgroundColor }) => backgroundColor};

  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: 330px 60px 1fr;
    grid-column-gap: 20px;
  }
`;

const CategoryTitle = styled(Typography.Paragraph)``;

const CategoryAmount = styled(Typography.Paragraph)`
  width: 60px;
  text-align: center;
  align-self: center;
  padding: 2px 0;
  border-radius: 40px;
  background-color: ${({ reward }) =>
    reward >= 0.015
      ? `rgb( 0, 255, 0, ${reward / 0.06})`
      : `rgba( 255, 0, 0, ${0.7 - reward / 0.02})`};

  ${MEDIA_QUERIES.TABLET} {
    width: 100%;
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
`;

export const Categories = ({ selectedCategories }) => {
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

  return (
    <>
      <Typography.Title level={2}>Covered Categories</Typography.Title>
      <div>
        {Object.keys(selectedCategories).map((category) => (
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

      <Typography.Title level={3}>Color Key</Typography.Title>
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
