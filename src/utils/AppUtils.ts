class AppUtils {
  static getImageUrl(imagePath: string): string {
    return `https://image.tmdb.org/t/p/w1280${imagePath}`;
  }

  static getDisplayDate(dateString: string): string {
    const dateObj = new Date(dateString);

    const formattedDate = new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(dateObj);
    return formattedDate;
  }
}

export default AppUtils;
