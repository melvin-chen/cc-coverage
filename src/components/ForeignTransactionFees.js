import { Typography } from "antd";
import React from "react";

export const ForeignTransactionFees = ({ selectedCards }) => {
  const sortedCards = [...selectedCards].sort((a, b) => a.FTF > b.FTF);
  const noFTFCards = sortedCards.filter((card) => card.FTF === 0);
  const FTFCards = sortedCards.filter((card) => card.FTF != 0);
  return (
    <>
      <Typography.Title level={2}>
        Foreign Transaction Fee (FTF) Info
      </Typography.Title>
      {sortedCards.length === 0 && (
        <Typography.Paragraph>No cards selected</Typography.Paragraph>
      )}
      {noFTFCards.length > 0 && (
        <>
          <Typography.Title level={3}>No FTF</Typography.Title>{" "}
          <Typography.Paragraph>
            {noFTFCards.map((card, index) => (
              <React.Fragment key={card.cardName}>
                {index != 0 && ", "}
                {card.cardName}
              </React.Fragment>
            ))}
          </Typography.Paragraph>
        </>
      )}
      {FTFCards.length > 0 && (
        <>
          <Typography.Title level={3}>With FTF</Typography.Title>
          {FTFCards.map((card) => (
            <Typography.Paragraph key={card.cardName}>
              {card.FTF * 100}% with {card.cardName}
            </Typography.Paragraph>
          ))}
        </>
      )}
    </>
  );
};
