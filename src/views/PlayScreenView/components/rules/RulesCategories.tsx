import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { FunctionComponent } from "react";
import {
  Typography,
  AccordionSummary,
  Accordion,
  AccordionDetails
} from "@mui/material";
import rulesData from "./rules.json";
import RulesRules from "./RulesRules";

const RulesCategories: FunctionComponent = () => (
  <>
    {Object.entries(rulesData).map(([categoryName, ruleCategory]) => (
      <AccordionDetails>
        <Accordion
          key={categoryName}
          sx={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.11) 100%), #121212"
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">
              {categoryName.charAt(0).toUpperCase() +
                categoryName.substr(1).toLowerCase()}
            </Typography>
          </AccordionSummary>
          {Object.values(ruleCategory).map((rule) => (
            <RulesRules name={rule.name} rules={rule.rule} />
          ))}
        </Accordion>
      </AccordionDetails>
    ))}
  </>
);
export default RulesCategories;
