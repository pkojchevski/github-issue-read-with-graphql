



export const converGitHubData = (data) => {
    let nodes = data?.viewer?.repositories?.edges.filter(data => data.node.issues.edges.length > 0)
    .map(data=> data.node.issues.edges).flat().map(node => (node.node));
    let arr = [[{ value: "Repository name" },{value:"Issue link"},
    {value:"Issue Title"}, {value:"Issue status"}, {value:"Issue id"}]];
    if(nodes) {
        for(let node of Object.entries(nodes).flat()) {
            if(typeof node === 'object'){
arr.push([{value:node.repository.name}, {value:node.url}, {value:node.title}, {value:node.state}, {value:node.id}])
            }   
        }
    }
    return arr;
}