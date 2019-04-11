const mongoose = require("mongoose");

const File = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

File.virtual("url").get(function() {
  return `${process.env.BASE_URL}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model("File", File);