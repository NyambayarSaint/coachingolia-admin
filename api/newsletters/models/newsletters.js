const slugify = require("slugify");

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      if(!data.Slug) data.Slug = slugify(data.Title, { lower: true });
    }
  },
};
