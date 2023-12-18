const generateQuote = async () => {
  try {
    // Fetch random quote
    let url = "https://api.quotable.io/random";
    const quoteResponse = await fetch(url);
    const quoteData = await quoteResponse.json();

    // Display the quote
    document.getElementById("quote").innerHTML = `" ${quoteData.content}"`;
    document.getElementById("author").innerHTML = `~ ${quoteData.author} ~`;


    // Fetch random image
    const imageResponse = await fetch("https://source.unsplash.com/random");

    // Get the image URL
    const imageUrl = imageResponse.url;

    // Set the background image
    document.body.style.backgroundImage = `url('${imageUrl}')`;
    document.body.style.backgroundSize = "cover";

  } catch (error) {
    console.log(error);
  }
};
