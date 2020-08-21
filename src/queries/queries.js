export const getReposQuery = `{
    viewer {
      repositories(first: 100) {
        edges {
          node {
            issues(states: [OPEN,CLOSED], first:100) {
              edges {
                node {
                  createdAt
                  title
                  url
                  state
                  id
                  repository {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }    
`

export const changeIssueTitle =`
mutation UpdateIssueInput($id: ID!, $title: String!) {
    updateIssue(input: {id: $id, title: $title}) {
      issue {
        title
      }
    }
  }
`