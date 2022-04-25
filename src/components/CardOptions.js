import { ALL_CARDS, BANKS, REWARD_TYPES } from "../Data";
import { Typography, Checkbox } from "antd";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../Constants";

const CardCategories = styled.div`
  display: grid;
  row-gap: 10px;

  ${MEDIA_QUERIES.TABLET} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
  }
  ${MEDIA_QUERIES.DESKTOP} {
    grid-template-columns: repeat(6, 1fr);
    column-gap: 15px;
  }
`;

const CardContainer = styled.div`
  border: 1px solid #efefef;
  border-radius: 5px;
  padding: 15px;
`;

const CardTitle = styled(Typography.Title)`
  margin: 0 0 10px;

  &.ant-typography {
    font-size: 16px;
  }
`;
const CardName = styled(Typography.Paragraph)`
  display: inline;
  ${MEDIA_QUERIES.DESKTOP} {
    font-size: 14px;
  }
`;
const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomCheckbox = styled(Checkbox)`
  margin: 5px 0;

  &.ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin: 5px 0;
  }

  & .ant-checkbox {
    margin-right: 5px;
  }

  & .ant-checkbox + span {
    padding: 0;
  }
`;

const CustomCashCard = ({ onCheckChange }) => {
  const [chosenCCOption, setChosenCCOption] = useState("DINING");
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (chosenCCOption === "TRAVEL_GENERAL") {
      onCheckChange(
        { target: { checked: isSelected } },
        {
          cardName: "Citi Custom Cash",
          bank: BANKS.CITI,
          id: "citi-cc",
          annualFee: 0,
          rewardType: REWARD_TYPES.TYP,
          categories: {
            TRAVEL_GENERAL_FLIGHTS: 0.05,
            TRAVEL_GENERAL_HOTELS: 0.05,
            all: 0.01,
          },
        }
      );
    } else {
      onCheckChange(
        { target: { checked: isSelected } },
        {
          cardName: "Citi Custom Cash",
          bank: BANKS.CITI,
          id: "citi-cc",
          annualFee: 0,
          rewardType: REWARD_TYPES.TYP,
          categories: {
            [chosenCCOption]: 0.05,
            all: 0.01,
          },
        }
      );
    }
  }, [chosenCCOption, isSelected, onCheckChange]);
  return (
    <>
      <CustomCheckbox
        onChange={(e) => {
          setIsSelected(e.target.checked);
          onCheckChange(e, {
            cardName: "Citi Custom Cash",
            bank: BANKS.CITI,
            id: "citi-cc",
            annualFee: 0,
            rewardType: REWARD_TYPES.TYP,
            categories: {
              [chosenCCOption]: 0.05,
              all: 0.01,
            },
          });
        }}
      >
        <CardName>Citi Custom Cash</CardName>
      </CustomCheckbox>
      <label htmlFor="cc-select">
        <CardName>Custom Cash category:</CardName>
      </label>

      <select
        name="cc-options"
        id="cc-select"
        value={chosenCCOption}
        onChange={(e) => {
          setChosenCCOption(e.target.value);
        }}
      >
        <option value="DINING">Dining</option>
        <option value="GAS">Gas</option>
        <option value="GROCERY">Grocery</option>
        <option value="TRANSIT">Transit</option>
        <option value="TRAVEL_GENERAL">Travel</option>
        <option value="STREAMING">Streaming</option>
        <option value="DRUGSTORE">Drugstore</option>
      </select>
    </>
  );
};

export const CardOptions = ({ selectedCards, setSelectedCards }) => {
  const onCheckChange = (event, card) => {
    const isChecked = event.target.checked;
    let selectedCardsCopy = selectedCards;
    if (isChecked) {
      selectedCardsCopy = new Set([
        ...[...selectedCards].filter((c) => c.id !== card.id),
        card,
      ]);
    } else {
      selectedCardsCopy = new Set(
        [...selectedCards].filter((c) => c.id !== card.id)
      );
    }
    setSelectedCards(selectedCardsCopy);
  };

  return (
    <>
      <Typography.Title level={2}>Cards</Typography.Title>
      <CardCategories>
        {Object.keys(ALL_CARDS).map((cardGroup) => (
          <CardContainer key={ALL_CARDS[cardGroup].displayName}>
            <CardTitle level={3}>{ALL_CARDS[cardGroup].displayName}</CardTitle>
            <CheckboxGroup>
              {ALL_CARDS[cardGroup].cards.map((card) =>
                card.id !== "citi-cc" ? (
                  <CustomCheckbox
                    onChange={(e) => onCheckChange(e, card)}
                    key={card.id}
                  >
                    <CardName>{card.cardName}</CardName>
                  </CustomCheckbox>
                ) : (
                  <CustomCashCard key={card.id} onCheckChange={onCheckChange} />
                )
              )}
            </CheckboxGroup>
          </CardContainer>
        ))}
      </CardCategories>
    </>
  );
};
