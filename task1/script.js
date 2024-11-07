function showMoreInfo(card) {
  const moreInfo = card.querySelector(".more-info");
  if (moreInfo.style.display === "block") {
    moreInfo.style.display = "none";
  } else {
    moreInfo.style.display = "block";
  }
}
