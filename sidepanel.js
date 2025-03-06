document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['researchNotes'], function(result) {
        if(result.researchNotes) {
            document.getElementById('notes').value = result.researchNotes
        }
    });

    document.getElementById('summarizeBtn').addEventListener('click', summarizeText)
    document.getElementById('saveNotesBtn').addEventListener('click', saveNotes)
});

async function summarizeText() {

}

async function saveNotes() {

}