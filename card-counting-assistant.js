let count = 0;

function cardCounter(cards) {
  // Helper to process one card
  function processCard(card) {
    let val = typeof card === 'string' ? card.toUpperCase() : card;
    
    if ([2, 3, 4, 5, 6].includes(val)) {
      count++;
    } else if ([10, "J", "Q", "K", "A"].includes(val)) {
      count--;
    }
    // 7, 8, 9 do nothing
  }

  // If input is an array (e.g. cards for players in a round), process each one
  if (Array.isArray(cards)) {
    cards.forEach(card => processCard(card));
  } else {
    // Single card input
    processCard(cards);
  }

  // final count and decision
  return count > 0 ? `${count} Bet` : `${count} Hold`;
}