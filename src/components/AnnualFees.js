import { Typography } from "antd";
import React from "react";

export const AnnualFees = ({ selectedCards }) => (
  <>
    <Typography.Title level={2} style={{ marginTop: "1.2em" }}>
      Total Annual Fees
    </Typography.Title>
    <Typography.Paragraph>
      $
      {[...selectedCards].reduce(
        (previous, current) => previous + current.annualFee,
        0
      )}{" "}
      (
      {[...selectedCards]
        .filter((card) => card.annualFee != 0)
        .map((card, index) => (
          <React.Fragment key={card.cardName}>
            {index != 0 && " + "}
            {card.cardName}: ${card.annualFee}
          </React.Fragment>
        ))}
      )
    </Typography.Paragraph>
  </>
);
