let artifacts = null;
let humanArtifacts = null
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

fetch ('./HumanDataset.json')
    .then(response => response.json())
    .then(data =>{
        getHuman(data);
    })
    .catch(error => {
            console.error('Error fetching data:', error);
    })

function getArtifacts(data) {
    artifacts = data.artifacts;
    //document.getElementById('artifacts-json').innerHTML = JSON.stringify(artifacts, null,2);
    let table = '<table style="border-collapse: collapse;">';
    table += `
    <thead>
        <tr>
            <th>ID </th>
            <th>Artifact Image </th>
            <th>Label Text </th>
            <th>AI Description </th>
            <th>Human Description </th>
        </tr>
    </thead>
    <tbody>
    `;
    for (let i = 0; i < 56; i++) {
       table += `
            <tr>
                <td>${artifacts[i].ID} </td>
                <td><img src="./Artifact Images/${artifacts[i].image}"/></td>
                <td>${artifacts[i].labelText} </td>
                <td>${artifacts[i].ai_desc} </td>
                <td>${artifacts[i].human_desc} </td>
            </tr>
        `;
    }

    table += `
    </tbody>
    </table>
    `;
    document.getElementById("artifact-table").innerHTML = table;
}

function getHuman(data) {
    humanArtifacts = data;
    //document.getElementById('artifacts-json').innerHTML = JSON.stringify(artifacts, null,2);
    let table = '<table style="border-collapse: collapse;">';
    table += `
    <thead>
        <tr>
            <th>ID </th>
            <th>Artifact Image </th>
            <th>Label Text </th>
            <th>Alt Text</th>
        </tr>
    </thead>
    <tbody>
    `;
    for (let i = 0; i < humanArtifacts.length; i++) {
       table += `
            <tr>
                <td>${humanArtifacts[i].ID} </td>
                <td><img src="./Artifact Images/${humanArtifacts[i].image}"/></td>
                <td>${humanArtifacts[i].labelText} </td>
                <td>${humanArtifacts[i].altText} </td>
            </tr>
        `;
    }

    table += `
    </tbody>
    </table>
    `;
    document.getElementById("human-table").innerHTML = table;
}