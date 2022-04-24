import { REWARD_TYPES, CATEGORIES } from "../Data";
import { useState, useEffect } from "react";
import { Form, Input, InputNumber, Button, Typography } from "antd";
import styled from "styled-components";

const CardForm = styled(Form)`
  display: grid;
  row-gap: 10px;
  padding: 10px 0;
  max-width: 400px;
`;

const Title = styled.div`
  border-bottom: 1px solid #efefef;
  padding-bottom: 10px;
`;

const CardFormItem = styled(Form.Item)`
  &.ant-form-item {
    margin-bottom: 8px;
    display: grid;
    grid-template-columns: 120px 1fr;
  }
`;

const CustomCategoryContainer = styled.div`
  border-top: 1px solid #efefef;
  padding: 10px 0;
`;

const AppliedCategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const AppliedCategory = styled.div`
  padding: 2px 10px;
  margin: 0 5px 10px 0;
  border-radius: 40px;
  background-color: #2e9eff36;
`;
const CustomSelect = styled.select`
  width: 100%;
`;

const CustomInputNumber = styled(InputNumber)`
  width: 100%;
`;

const CustomCategory = ({ filteredCategories, addCategory }) => {
  const [category, setCategory] = useState(filteredCategories[0]);
  const [rewardPercent, setRewardPercent] = useState(1);
  return (
    <>
      <CardFormItem name="category" label="Category">
        <CustomSelect
          name="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          {filteredCategories.map((category) => (
            <option key={category} value={category}>
              {CATEGORIES[category].displayName}
            </option>
          ))}
        </CustomSelect>
      </CardFormItem>
      <CardFormItem name="rewardPercent" label="Reward Rate">
        <CustomInputNumber
          addonAfter="%"
          defaultValue={rewardPercent}
          onChange={(value) => {
            setRewardPercent(value);
          }}
          value={rewardPercent}
        />
      </CardFormItem>
      <Button
        type="link"
        block
        onClick={() => {
          setCategory(filteredCategories[0]);
          addCategory({ category, rewardPercent });
        }}
      >
        Add Category
      </Button>
    </>
  );
};

export const CustomCard = ({
  selectedCards,
  setSelectedCards,
  setCustomCardPopoverVisible,
}) => {
  const [cardName, setCardName] = useState("");
  const [annualFee, setAnnualFee] = useState(0);
  const [rewardType, setRewardType] = useState(REWARD_TYPES.CASH_BACK);
  const [categories, setCategories] = useState({ all: 0.01 });

  const [CustomSelectedCategories, setCustomSelectedCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState(
    Object.keys(CATEGORIES).filter(
      (category) =>
        !CustomSelectedCategories.includes(CATEGORIES[category].displayName)
    )
  );

  useEffect(() => {
    setFilteredCategories(
      Object.keys(CATEGORIES).filter(
        (category) => !CustomSelectedCategories.includes(category)
      )
    );
  }, [CustomSelectedCategories]);

  const addCategory = (category) => {
    let categoryCopy = categories;
    categoryCopy[category.category] = category.rewardPercent / 100;
    setCustomSelectedCategories((prev) => [...prev, category.category]);
    setCategories(categoryCopy);
  };
  const onNewCardSubmit = () => {
    let selectedCardsCopy = selectedCards;

    selectedCardsCopy = new Set([
      ...[...selectedCards].filter((c) => c.id !== cardName),
      {
        cardName,
        id: cardName,
        bank: "Other",
        annualFee,
        rewardType,
        categories,
      },
    ]);
    setSelectedCards(selectedCardsCopy);
    setCustomCardPopoverVisible(false);
    setCardName("");
    setAnnualFee(0);
    setRewardType(REWARD_TYPES.CASH_BACK);
    setCategories({ all: 0.01 });
  };

  return (
    <CardForm>
      <Title>
        <Typography.Title level={4} style={{ marginBottom: 0 }}>
          Add a custom card
        </Typography.Title>
        <Typography.Text type="danger">
          Might be a little buggy, please be patient :(
        </Typography.Text>
      </Title>
      <CardFormItem name="cardName" label="Card Name">
        <Input
          value={cardName}
          onChange={(event) => {
            setCardName(event.target.value);
          }}
        />
      </CardFormItem>
      <CardFormItem name="annualFee" label="Annual Fee">
        <CustomInputNumber
          addonBefore="$"
          defaultValue={annualFee}
          onChange={(value) => {
            setAnnualFee(value);
          }}
          value={annualFee}
        />
      </CardFormItem>
      <CardFormItem name="rewardType" label="Reward Type">
        <CustomSelect
          name="rewardType"
          value={rewardType.name}
          onChange={(e) => {
            setRewardType(REWARD_TYPES[e.target.value]);
          }}
        >
          {Object.keys(REWARD_TYPES).map((rewardType) => (
            <option key={rewardType} value={rewardType}>
              {REWARD_TYPES[rewardType].name}
            </option>
          ))}
        </CustomSelect>
      </CardFormItem>
      <CustomCategoryContainer>
        <AppliedCategoryContainer>
          {Object.keys(categories).map((category) =>
            category === "all" ? (
              <AppliedCategory key={category}>
                All {categories[category] * 100}%
              </AppliedCategory>
            ) : (
              <AppliedCategory key={category}>
                {CATEGORIES[category].displayName} {categories[category] * 100}%
              </AppliedCategory>
            )
          )}
        </AppliedCategoryContainer>
        <CustomCategory
          filteredCategories={filteredCategories}
          addCategory={addCategory}
        />
      </CustomCategoryContainer>

      <Button
        type="primary"
        onClick={() => {
          onNewCardSubmit();
        }}
      >
        Add Card
      </Button>
    </CardForm>
  );
};
