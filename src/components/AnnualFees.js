import { Typography } from "antd";

export const AnnualFees = ({ selectedCards }) => (
  <>
    <Typography.Title level={2}>Total Annual Fees</Typography.Title>
    <Typography.Paragraph>
      $
      {[...selectedCards].reduce(
        (previous, current) => previous + current.annualFee,
        0
      )}
    </Typography.Paragraph>
  </>
);
