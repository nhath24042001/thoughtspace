export const getCategoryColor = (category: string): string => {
  switch (category) {
    case "Tech":
      return "bg-blue-100 text-blue-700";
    case "Life":
      return "bg-green-100 text-green-700";
    case "Design":
      return "bg-pink-100 text-pink-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};
