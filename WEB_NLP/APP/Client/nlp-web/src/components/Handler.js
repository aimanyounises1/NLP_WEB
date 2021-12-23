import React, { useState } from "react";
import "./Handler.scss";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { InputLabel } from "@material-ui/core";
import { FormControl, Box } from "@material-ui/core";
function Handler() {
  const [option, setOption] = useState("");

  const handleChange = (event) => {
    setOption(event.target.value);
  };
  return (
    <section className="input__sec" id="input__scroll">
      <h2>
        NLP <span style={{ color: "#007AF3" }}>WEB</span>
      </h2>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel
            style={{ fontWeight: "bold", color: "black" }}
            id="option-label"
          >
            Choose option
          </InputLabel>
          <Select
            labelId="option-label"
            id="demo-simple-select"
            value={option}
            label="Choose option"
            style={{ width: "200px", margin: "1em 0 1em 0" }}
            onChange={handleChange}
          >
            <MenuItem value={10}>Named Entity Recognition</MenuItem>
            <MenuItem value={20}>Summarizer</MenuItem>
            <MenuItem value={30}>Mask Completion</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <form action="" fullWidth>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <input type="submit" class="send-message-cta" value="Submit" />
      </form>
    </section>
  );
  /*
   */
}

export default Handler;
