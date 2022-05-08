import { Typography } from "antd";

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
          <Typography.Title level={3}>No FTF</Typography.Title>
          {noFTFCards.map((card) => (
            <Typography.Paragraph>{card.cardName}</Typography.Paragraph>
          ))}
        </>
      )}
      {FTFCards.length > 0 && (
        <>
          <Typography.Title level={3}>With FTF</Typography.Title>
          {FTFCards.map((card) => (
            <Typography.Paragraph>
              {card.FTF * 100}% with {card.cardName}
            </Typography.Paragraph>
          ))}
        </>
      )}
    </>
  );
};
