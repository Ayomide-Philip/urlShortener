import { useState } from "react";
import axios from "axios";
import ShortenURL from "./componets/shortenUrl";
import UrlForm from "./componets/form";
import Container from "./componets/container";
import URLHeading from "./componets/urlHeading";
export default function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const endPointUrl = "https://clck.ru/--";
  async function getShortenUrl() {
    try {
      const response = await axios.get(`${endPointUrl}`, {
        params: { url: url },
      });
      setShortUrl(response.data);
    } catch (error) {
      if (error.status == 400) {
        setShortUrl("You didnt Input a link!!!");
      } else {
        setShortUrl("Network Error.");
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    getShortenUrl();
  }
  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      alert("Text Copied!!!!");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <URLHeading />
      <UrlForm handleSubmit={handleSubmit} setUrl={setUrl} />
      <ShortenURL shortUrl={shortUrl} copyToClipboard={copyToClipboard} />
    </Container>
  );
}
