export const validateMeme = (meme: {
  title: string;
  image: string;
  likes: number;
}): string | null => {
  if (!meme.title || meme.title.length < 3 || meme.title.length > 100) {
    return "Назва має бути від 3 до 100 символів.";
  }
  if (
    !/^https?:\/\/.+\.(jpg|jpeg)(\?.*)?$/i.test(meme.image) &&
    !/^https?:\/\/images\.unsplash\.com\/.+/i.test(meme.image)
  ) {
    return "URL картинки має бути коректним посиланням на JPG або Unsplash.";
  }
  if (meme.likes < 0 || meme.likes > 99) {
    return "Кількість лайків має бути від 0 до 99.";
  }

  return null;
};
