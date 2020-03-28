import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedData: {
    type: Date,
    default: Date.now, //현재 날짜를 기본값으로 지정
  },
});

//첫번째 파라미터: 스키마 이름, 두번째 파라미터: 스키마 객체
const Post = mongoose.model('Post', PostSchema);
export default Post;
