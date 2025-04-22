export const validateMeme = (meme: {
  title: string;
  image: string;
  likes: number;
}): string | null => {
  if (!meme.title || meme.title.length < 3 || meme.title.length > 100) {
    return "The title must be between 3 and 100 characters.";
  }
  if (
    !/^https?:\/\/.+\.(jpg|jpeg)(\?.*)?$/i.test(meme.image) &&
    !/^https?:\/\/images\.unsplash\.com\/.+/i.test(meme.image)
  ) {
    return "The image URL must be a valid link to a JPG or Unsplash.";
  }
  if (meme.likes < 0 || meme.likes > 99) {
    return "The number of likes must be between 0 and 99.";
  }

  return null;
};
