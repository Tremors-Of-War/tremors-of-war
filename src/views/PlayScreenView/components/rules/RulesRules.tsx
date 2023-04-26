import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { FunctionComponent } from "react";
import {
  AccordionDetails,
  Typography,
  AccordionSummary,
  Accordion,
} from "@mui/material";

interface Props {
  name: string;
  rules: string[];
}

const RulesRules: FunctionComponent<Props> = ({ name, rules }) => (
  <AccordionDetails>
    <Accordion
      sx={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.16) 100%), #121212",
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{name}</Typography>
      </AccordionSummary>
      {rules.map((rule, index) => (
        <Typography margin="16px 16px" key={index} variant="body2">
          {rule}
        </Typography>
      ))}
    </Accordion>
  </AccordionDetails>
);
export default RulesRules;
