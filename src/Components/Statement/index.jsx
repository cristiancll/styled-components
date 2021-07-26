import React from 'react';
import {Box, Button} from "../UI";
import {statementList} from "../../info"
import Items from "../Items"
const Statement = () => {
  return (
    <Box>
      {
        statementList.updates.map(({id, type, from, value, date}) => (
            <Items key={id} type={type} from={from} value={value} date={date}/>
        ))
      }
       <Button>Ver Mais</Button>
    </Box>
  );
};

export default Statement;
