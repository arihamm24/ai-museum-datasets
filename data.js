let artifacts = null;
let newDiv, previousDiv;

fetch('./AIMuseumDataset.json')
    .then(response => response.json())
    .then(data => {
            getArtifacts(data);
        })
    .catch(error => {
            console.error('Error fetching data:', error);
    }
);

function getArtifacts(data) {
    artifacts = data.artifacts;
    
}