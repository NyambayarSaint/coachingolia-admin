module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: `mongodb+srv://nymsak:Popersia12@cluster0.ubw8m.mongodb.net/coachingolia?retryWrites=true&w=majority`
      },
      options: {
        ssl: true,
      },
    },
  },
});