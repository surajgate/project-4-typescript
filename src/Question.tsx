import { info } from "console";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Container,
  Paper,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

interface QuestionProp {
  id: number;
  title: string;
  info: string;
}

const Question = ({ title, info }: QuestionProp) => {
  const [showInfo, setShowInfo] = useState<boolean>();

  return (
    <>
      <Container sx={{m : 1, p : 1}}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography letterSpacing={1} fontSize={18} fontWeight={"bold"} variant="h6" gutterBottom>
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph gutterBottom>
              {info}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
    // <article className="question">
    //   <header>
    //     <h4>{title}</h4>
    //     <button
    //       className="btn"
    //       onClick={() => {
    //         setShowInfo(!showInfo);
    //       }}
    //     >
    //       {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
    //     </button>
    //     {showInfo && <p>{info}</p>}
    //   </header>
    // </article>
  );
};

export default Question;
