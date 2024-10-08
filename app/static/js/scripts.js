document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is loaded and working!');
});

function getPlayerSuggestions(query, suggestionBoxId) {
    if (query.length === 0) {
        document.getElementById(suggestionBoxId).innerHTML = "";
        return;
    }
    
    $.ajax({
        url: '/get_player_suggestions',
        method: 'GET',
        data: { query: query },
        success: function (response) {
            let suggestions = response.map(function(player) {
                return `<div onclick="selectPlayer('${player}', '${suggestionBoxId}')">${player}</div>`;
            }).join('');
            
            document.getElementById(suggestionBoxId).innerHTML = suggestions;
        }
    });
}

function selectPlayer(playerName, suggestionBoxId) {
    let inputField = suggestionBoxId.includes('player1') ? 'player1' : 'player2';
    document.getElementById(inputField).value = playerName;
    document.getElementById(suggestionBoxId).innerHTML = "";  // Clear the suggestions
}
