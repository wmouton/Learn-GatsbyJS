module.exports.onCreateNode = ({ node, actions }) => {
  const { ceateNodeField } = actions
  console.log(JSON.stringify(node, undefined, 4))
}
