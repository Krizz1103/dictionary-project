import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(reponse) {
    console.log(reponse.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "54734t1680o470cbbe3f700fdd2fa18e";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="Type your word here..."
          autoFocus={true}
        />
      </form>
    </div>
  );
}
