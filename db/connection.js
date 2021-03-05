const monk = require('monk')




// Connection URL
const url = process.env.MONGODB_URI || 'mongodb+srv://javascriptboss:javascript123@cluster0.5zq0v.mongodb.net/blog?retryWrites=true&w=majority';

const db = monk(url);

db.then(() => {
  console.log('Connected correctly to server')
})

module.exports = db