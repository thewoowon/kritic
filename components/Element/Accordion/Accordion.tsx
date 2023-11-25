import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";

type AccordionElement = {
  title: string;
  content: string;
  disabled?: boolean;
};

type KriticAccordionProps = {
  list: AccordionElement[];
};

const KriticAccordion = ({ list }: KriticAccordionProps) => {
  return (
    <Wrapper>
      {list.map((item, index) => {
        return (
          <Accordion key={index} disabled={item.disabled ?? false}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                fontWeight: 300,
              }}
            >
              <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Wrapper>
  );
};

export default KriticAccordion;

const Wrapper = styled.div`
  .MuiAccordion-root {
    box-shadow: none;
    .MuiAccordionSummary-root {
      padding: 0;
    }
    font-family: "Pretendard Variable", sans-serif;
    .MuiTypography-root {
      font-size: 16px;
      font-weight: 300;
    }
  }
  width: 100%;
`;
