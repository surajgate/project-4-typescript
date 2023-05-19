import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
import { Container, Paper, Box, Typography, Accordion } from "@mui/material";

interface QuestionType {
  id: number;
  title: string;
  info: string;
}

function App() {
  const [questions, setQuestion] = useState<QuestionType[]>(data);

  return (
    <>
      <Container>
        <Paper sx={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '25vh', p : 1}}>
          <Container sx={{display : 'flex'}}>
            <Box sx={{p : 1}}>
              <Typography letterSpacing={2} fontSize={26} fontWeight={'bold'} variant="h5">
                Questions and Answers about Login
              </Typography>
            </Box>
            <Box>
              {questions.map((question) => {
                return <Question key={question.id} {...question} />;
              })}
            </Box>
          </Container>
        </Paper>
      </Container>
    </>
    // <main>
    //   <div className="container">
    //     <h3>Questions and Answers about Login</h3>
    //     <section className="info">
    //       {questions.map((question=>{
    //         return <Question key = {question.id} {...question}/>
    //       }))}
    //     </section>
    //   </div>
    // </main>
  );
}

export default App;
