import { Typography, Popover, Button } from "antd";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CATEGORIES } from "./Data";
import { CardOptions } from "./components/CardOptions";
import { Categories } from "./components/Categories";
import { AnnualFees } from "./components/AnnualFees";
import { CustomCard } from "./components/CustomCard";
import { Blurb } from "./components/Blurb";
import { ForeignTransactionFees } from "./components/ForeignTransactionFees";
import { MEDIA_QUERIES } from "./Constants";
import "antd/dist/antd.min.css";

const AppContainer = styled.div`
  padding: 30px 20px;
  max-width: 1200px;
  margin: auto;

  ${MEDIA_QUERIES.DARK} {
    color: white;
  }
`;

const CustomPopover = styled(Popover)`
  margin: 20px 0;
`;

function App() {
  const [selectedCategories, setSelectedCategories] = useState(CATEGORIES);
  const [selectedCards, setSelectedCards] = useState(new Set());
  const [customCardPopoverVisible, setCustomCardPopoverVisible] = useState(
    false
  );

  // When the selected cards change, update the categories
  useEffect(() => {
    let selectedCategoriesCopy = CATEGORIES;
    selectedCards.forEach((card) => {
      // Map through each category in the card
      Object.keys(card.categories).forEach((category) => {
        // If the category is higher than the previous, add it to the selected categories
        if (
          category !== "all" &&
          card.categories[category] > selectedCategoriesCopy[category].reward
        ) {
          selectedCategoriesCopy = {
            ...selectedCategoriesCopy,
            [category]: {
              displayName: selectedCategoriesCopy[category].displayName,
              cardsInCategory: new Set([
                ...[...selectedCategoriesCopy[category].cardsInCategory],
                card,
              ]),
            },
          };
          // If the general spending category is higher than the default, add it to the category
        } else if (category === "all") {
          Object.keys(selectedCategoriesCopy).forEach((cat) => {
            selectedCategoriesCopy = {
              ...selectedCategoriesCopy,
              [cat]: {
                displayName: selectedCategoriesCopy[cat].displayName,

                cardsInCategory: new Set([
                  ...[...selectedCategoriesCopy[cat].cardsInCategory],
                  card,
                ]),
              },
            };
          });
        }
      });
    });

    setSelectedCategories(selectedCategoriesCopy);
  }, [selectedCards]);

  return (
    <AppContainer>
      <Typography.Title level={1}>Card Type Coverage</Typography.Title>
      <CardOptions
        selectedCards={selectedCards}
        setSelectedCards={setSelectedCards}
      />
      <CustomPopover
        content={
          <CustomCard
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
            setCustomCardPopoverVisible={setCustomCardPopoverVisible}
          />
        }
        trigger="click"
        visible={customCardPopoverVisible}
        onVisibleChange={setCustomCardPopoverVisible}
      >
        <Button type={customCardPopoverVisible ? "default" : "primary"}>
          Add a custom card
        </Button>
      </CustomPopover>
      <Categories selectedCategories={selectedCategories} />
      <AnnualFees selectedCards={selectedCards} />
      <ForeignTransactionFees selectedCards={selectedCards} />

      <Blurb />
    </AppContainer>
  );
}

export default App;
